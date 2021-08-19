import React, { useEffect, useRef, useCallback } from 'react';
import { Animated, View, Dimensions, PanResponder } from 'react-native';
import styles from './styles';

const ModalSheet = ({ visible, children, onDismiss }) => {
  const { height } = Dimensions.get('window');
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateAnim = useRef(new Animated.Value(height - 80)).current;

  const panResponder = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy > 0) {
          translateAnim.setValue(gestureState.dy);
          fadeAnim.setValue(0.6 - 0.6 * (gestureState.dy / (height - 80)));
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dy > 100) {
          transitOut();
        } else {
          transitIn();
        }
      },
    }),
  ).current;

  const transitIn = useCallback(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0.6,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, translateAnim]);

  const transitOut = useCallback(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(translateAnim, {
        toValue: height - 80,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onDismiss();
    });
  }, [fadeAnim, translateAnim, height, onDismiss]);

  useEffect(() => {
    if (visible) {
      transitIn();
    } else {
      transitOut();
    }
  }, [visible, transitIn, transitOut]);
  return visible ? (
    <>
      <Animated.View
        style={[styles.transparentBackground, { opacity: fadeAnim }]}
      />
      <Animated.View
        style={[
          styles.modalContainer,
          {
            transform: [
              {
                translateY: translateAnim,
              },
            ],
          },
        ]}
        {...panResponder.panHandlers}>
        <View style={styles.pullBar} />
        <View style={styles.content}>{children}</View>
      </Animated.View>
    </>
  ) : null;
};

export default ModalSheet;

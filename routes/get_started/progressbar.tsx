import React, { ReactNode, useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { Circle, G, Svg } from 'react-native-svg';

type CircularProgressBarProps = {
  progress?: number; // value between 0 and 100
  size?: number;
  strokeWidth?: number;
  backgroundColor?: string;
  progressColor?: string;
  children?: ReactNode;
  duration?: number;
  delay?: number;
  easing?: (value: number) => number;
};

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  progress = 0,
  size = 150,
  strokeWidth = 10,
  backgroundColor = '#f0f0f0',
  progressColor = '#3b5998',
  children,
  duration = 1000,
  delay = 0,
  easing = Easing.out(Easing.ease),
}) => {
  const animatedProgress = useRef(new Animated.Value(0)).current;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  useEffect(() => {
    // Start animation when progress changes
    Animated.timing(animatedProgress, {
      toValue: progress,
      duration,
      delay,
      easing,
      useNativeDriver: true,
    }).start();
  }, [progress, duration, delay, easing]);

  const strokeDashoffset = animatedProgress.interpolate({
    inputRange: [0, 100],
    outputRange: [circumference, 0], // Corrected interpolation
  });

  // Create animated circle component
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      {/* Progress Bar */}
      <Svg
        width={size}
        height={size}
        style={styles.svg}
      >
        <G
          rotation='-90'
          origin={`${size / 2}, ${size / 2}`}
        >
          {/* Background circle */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={backgroundColor}
            strokeWidth={strokeWidth}
            fill='transparent'
          />
          {/* Progress circle */}
          <AnimatedCircle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={progressColor}
            strokeWidth={strokeWidth}
            fill='transparent'
            strokeDasharray={`${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap='round'
          />
        </G>
      </Svg>

      {/* Center Content - shows actual progress value */}
      <View style={styles.contentContainer}>
        {typeof children === 'function'
          ? //@ts-ignore
            children(animatedProgress)
          : children || (
              <Animated.Text style={styles.progressText}>
                {animatedProgress.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%'],
                })}
              </Animated.Text>
            )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  svg: {
    position: 'absolute',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  progressText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default CircularProgressBar;

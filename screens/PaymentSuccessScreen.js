import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View, StyleSheet, Text } from 'react-native';

const PaymentSuccessAnimation = () => {
  const scaleValue = useRef(new Animated.Value(0)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.elastic(1),
        useNativeDriver: true,
      }),
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.checkmarkContainer,
          { transform: [{ scale: scaleValue }], opacity: opacityValue },
        ]}
      >
        <Animated.Text style={styles.checkmark}>✓</Animated.Text>
      </Animated.View>
      <Text style={styles.successText}>Payment Successful!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmarkContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#2ecc71',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkmark: {
    fontSize: 80,
    color: '#fff',
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default PaymentSuccessAnimation;

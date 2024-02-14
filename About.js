



import React, { useRef } from 'react';
import { Animated, View, StyleSheet, PanResponder, Text } from 'react-native';

const About = () => {
  const pan1 = useRef(new Animated.ValueXY()).current;
  const pan2 = useRef(new Animated.ValueXY()).current;
  const pan3 = useRef(new Animated.ValueXY()).current;


  const panResponder1 = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {
        const { moveX, moveY } = gestureState;
        console.log('latest moveX for pan1:', moveX);
        console.log('latest moveY for pan2:', moveY);

        Animated.event([null, { dx: pan1.x, dy: pan1.y }])(event, gestureState);
      },
      onPanResponderRelease: () => {
        pan1.extractOffset();
      },
    }),
  ).current;

  const panResponder2 = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan2.x, dy: pan2.y }]),
      onPanResponderRelease: () => {
        pan2.extractOffset();
      },
    }),
  ).current;

  const panResponder3 = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan3.x, dy: pan3.y }]),
      onPanResponderRelease: () => {
        pan3.extractOffset();
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Drag these boxes!</Text>
      <View style={styles.boxesContainer}>
        <Animated.View
          style={{
            transform: [{ translateX: pan1.x }, { translateY: pan1.y }],
          }}
          {...panResponder1.panHandlers}>
          <View style={styles.box} />
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ translateX: pan2.x }, { translateY: pan2.y }],
          }}
          {...panResponder2.panHandlers}>
          <View style={styles.boxTwo} />
        </Animated.View>
        <Animated.View
          style={{
            transform: [{ translateX: pan3.x }, { translateY: pan3.y }],
          }}
          {...panResponder3.panHandlers}>
          <View style={styles.boxThree} />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  boxesContainer: {
    flexDirection: 'row',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'pink',
    marginTop: 100,
    borderRadius: 5,
  },
  boxTwo: {
    height: 100,
    width: 150,
    backgroundColor: 'green',
    marginTop: 100,
    marginLeft: 20,
    borderRadius: 30,
  },
  boxThree: {
    height: 100,
    width: 150,
    backgroundColor: 'black',
    marginBottom: 350,
    marginLeft: 40,
    borderRadius: 30,
  },
});

export default About;

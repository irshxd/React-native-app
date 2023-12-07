import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const flatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Orange</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>White</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>green</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 15,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 8,
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 8,
  },
  cardOne: {
    backgroundColor: 'orange',
  },
  cardTwo: {
    backgroundColor: 'white',
  },
  cardThree: {
    backgroundColor: 'green',
  },
});

export default flatCards;

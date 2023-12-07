import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Scrollable cards</Text>
      <ScrollView horizontal={true} style={styles.Container}>
        <View style={[styles.cards, styles.cardelevated]}>
          <Text style={{color: 'black'}}>Swipe</Text>
        </View>
        <View style={[styles.cards, styles.cardelevated]}>
          <Text style={{color: 'black'}}>To</Text>
        </View>
        <View style={[styles.cards, styles.cardelevated]}>
          <Text style={{color: 'black'}}>The</Text>
        </View>
        <View style={[styles.cards, styles.cardelevated]}>
          <Text style={{color: 'black'}}>Left</Text>
        </View>
        <View style={[styles.cards, styles.cardelevated]}>
          <Text style={{color: 'black'}}>✌️</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 15,
  },
  Container: {
    padding: 8,
  },
  cards: {
    flex: 1,
    flexDirection: 'row',
    width: 100,
    height: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  cardelevated: {
    backgroundColor: 'white',
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: 'grey',
    shadowOpacity: 0.5,
  },
});

import {
  Image,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const FancyCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Trending pictures</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image source={require('./art.jpeg')} style={styles.cardImage} />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}> Koala </Text>
          <Text style={styles.cardLabel}> Image type: Cartoon </Text>
          <Text style={styles.cardDescription} numberOfLines={4}>
            {' '}
            The koala, sometimes calle̦d koala bear, is an arboreal herbivorous
            marsupial native to Australia. It is the only extant representative
            of the family Phascolarctidae{' '}
          </Text>
        </View>
        <View style={styles.footerCard}>
          <TouchableOpacity
            style={styles.footerTouch}
            onPress={() => {
              openWebsite('https://en.wikipedia.org/wiki/Koala');
            }}>
            <Text style={styles.footerText}> More </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 15,
  },
  card: {
    marginHorizontal: 12,
    marginVertical: 16,
  },
  elevatedCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 210,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    fontSize: 16,
    fontWeight: '600',
    paddingBottom: 4,
  },
  cardDescription: {
    fontSize: 15,
    fontWeight: '500',
  },
  footerCard: {
    backgroundColor: 'lavender',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  footerTouch: {},
  footerText: {
    fontSize: 20,
    fontWeight: '700',
  },
});

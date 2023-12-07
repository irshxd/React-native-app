import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Irshad',
      ph: '00000000000',
      image:
        'https://images.pexels.com/photos/4458553/pexels-photo-4458553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      uid: 2,
      name: 'Adil',
      ph: '00000000000',
      image:
        'https://images.pexels.com/photos/4458553/pexels-photo-4458553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      uid: 3,
      name: 'Asharf',
      ph: '00000000000',
      image:
        'https://images.pexels.com/photos/4458553/pexels-photo-4458553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      uid: 4,
      name: 'Ibrahim',
      ph: '00000000000',
      image:
        'https://images.pexels.com/photos/4458553/pexels-photo-4458553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      uid: 5,
      name: 'Ayaan',
      ph: '00000000000',
      image:
        'https://images.pexels.com/photos/4458553/pexels-photo-4458553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      uid: 6,
      name: 'Saif',
      ph: '00000000000',
      image:
        'https://images.pexels.com/photos/4458553/pexels-photo-4458553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.scroll}>
        {contacts.map(({uid, name, ph, image}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: image}} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>Name: {name}</Text>
              <Text style={styles.userPh}>Phone: {ph}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 10,
  },
  userCard: {
    backgroundColor: 'lavender',
    marginBottom: 4,
    padding: 5,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginHorizontal: 10,
    marginTop: 10,
  },
  scroll: {},
  userName: {
    color: 'black',
    marginTop: 20,
    fontWeight: '600',
    fontSize: 18,
  },
  userPh: {
    color: 'black',
  },
});

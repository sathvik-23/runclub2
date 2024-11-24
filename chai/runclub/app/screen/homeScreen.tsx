import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const clubs = [
    {
      id: '1',
      name: 'Morning Joggers',
      description: 'Start your day fresh with morning runs in Central Park.',
      image:
        'https://images.pexels.com/photos/876337/pexels-photo-876337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '2',
      name: 'Night Sprinters',
      description: 'Feel the night breeze with energetic runs downtown.',
      image:
        'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: '3',
      name: 'Weekend Warriors',
      description: 'Join us every weekend for a refreshing beachside jog.',
      image:
        'https://images.pexels.com/photos/40751/walking-morning-sunrise-walk-40751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const renderClubCard = ({item}: {item: (typeof clubs)[0]}) => (
    <View style={[styles.card, styles.elevatedCard]}>
      <Image source={{uri: item.image}} style={styles.cardImage} />
      <View style={styles.bodyContainer}>
        <Text style={styles.headerText}>{item.name}</Text>
        <Text numberOfLines={2} style={styles.descriptionText}>
          {item.description}
        </Text>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Join</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.title}>RunClub</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={{uri: 'https://i.pravatar.cc/100?img=3'}} // Placeholder profile image
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      {/* List of Clubs */}
      <FlatList
        data={clubs}
        keyExtractor={item => item.id}
        renderItem={renderClubCard}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#6200ea',
    elevation: 4,
  },
  menuText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  card: {
    borderRadius: 8,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    overflow: 'hidden',
  },
  elevatedCard: {
    shadowColor: '#333',
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  bodyContainer: {
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  descriptionText: {
    fontSize: 14,
    color: '#555',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  actionButton: {
    backgroundColor: '#6200ea',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

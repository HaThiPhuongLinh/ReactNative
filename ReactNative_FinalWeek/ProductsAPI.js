import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setBikes, setSelectedCategory } from './bikeSlice';
import { useNavigation } from '@react-navigation/native';

export default function ProductsAPI() {
  const dispatch = useDispatch();
  const bikes = useSelector(state => state.bikes.bikes);
  const selectedCategory = useSelector(state => state.bikes.selectedCategory);
  const navigation = useNavigation();

  const options = ['All', 'Roadbike', 'Mountain'];

  useEffect(() => {
    fetch('https://64544639a74f994b333d117e.mockapi.io/status')
      .then((response) => response.json())
      .then((data) => dispatch(setBikes(data)))
      .catch((error) => console.log('Error fetching bikes', error));
  }, [dispatch]);

  const handleCategorySelect = (category) => {
    dispatch(setSelectedCategory(category));
  };

  const handleAddNewBike = () => {
    // Navigate to the AddNewBike screen
    navigation.navigate('AddNewBike');
  };

  return (
    <View style={{ backgroundColor: '#FFFFFF', flex: 1 }}>
      <Text style={styles.title}>The world’s Best Bike</Text>

      <View style={styles.filterContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[styles.filterButton, selectedCategory === option && styles.selectedButton]}
            onPress={() => handleCategorySelect(option)}
          >
            <Text style={[styles.filterText, selectedCategory === option && styles.selectedText]}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
        <FlatList
          data={bikes.filter(bike => selectedCategory === 'All' || bike.category === selectedCategory)}
          renderItem={({ item }) => (
            <Item bike={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
        />
      </SafeAreaView>

      {/* Add New Bike Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddNewBike}>
        <Text style={styles.addButtonText}>Add New Bike</Text>
      </TouchableOpacity>
    </View>
  );
}

const Item = ({ bike, navigation }) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={() => navigation.navigate('DetailsProduct', { bike })}
  >
    <View style={styles.itemInnerContainer}>
      <HeartIcon />
      <View style={styles.imageWrapper}>
        <Image source={bike.image} style={styles.image} resizeMode="contain" />
      </View>
      <Text style={styles.itemTitle}>{bike.name}</Text>
      <View style={styles.itemPrice}>
        <SvgDollar />
        <Text style={styles.itemPriceText}>{bike.price}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const HeartIcon = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.5342 6.92383C22.2069 6.16611 21.7351 5.47947 21.145 4.90235C20.5545 4.3235 19.8583 3.8635 19.0942 3.54737C18.3019 3.21825 17.4522 3.04979 16.5942 3.05176C15.3906 3.05176 14.2163 3.38135 13.1958 4.00391C12.9517 4.15283 12.7197 4.31641 12.5 4.49463C12.2803 4.31641 12.0483 4.15283 11.8042 4.00391C10.7837 3.38135 9.60937 3.05176 8.40576 3.05176C7.53906 3.05176 6.69922 3.21778 5.90576 3.54737C5.13916 3.86475 4.44824 4.32129 3.85498 4.90235C3.26415 5.47882 2.79218 6.16562 2.46582 6.92383C2.12646 7.7124 1.95312 8.54981 1.95312 9.41162C1.95312 10.2246 2.11914 11.0718 2.44873 11.9336C2.72461 12.6538 3.12012 13.4009 3.62549 14.1553C4.42627 15.3491 5.52734 16.5942 6.89453 17.8564C9.16016 19.9487 11.4038 21.394 11.499 21.4526L12.0776 21.8237C12.334 21.9873 12.6636 21.9873 12.9199 21.8237L13.4985 21.4526C13.5938 21.3916 15.835 19.9487 18.103 17.8564C19.4702 16.5942 20.5713 15.3491 21.3721 14.1553C21.8774 13.4009 22.2754 12.6538 22.5488 11.9336C22.8784 11.0718 23.0444 10.2246 23.0444 9.41162C23.0469 8.54981 22.8735 7.7124 22.5342 6.92383ZM12.5 19.8926C12.5 19.8926 3.80859 14.3237 3.80859 9.41162C3.80859 6.92383 5.8667 4.90723 8.40576 4.90723C10.1904 4.90723 11.7383 5.90332 12.5 7.3584C13.2617 5.90332 14.8096 4.90723 16.5942 4.90723C19.1333 4.90723 21.1914 6.92383 21.1914 9.41162C21.1914 14.3237 12.5 19.8926 12.5 19.8926Z"
      fill="#545454"
    />
    <path
      d="M16.5942 4.90723C14.8096 4.90723 13.2617 5.90332 12.5 7.3584C11.7383 5.90332 10.1904 4.90723 8.40576 4.90723C5.8667 4.90723 3.80859 6.92383 3.80859 9.41162C3.80859 14.3237 12.5 19.8926 12.5 19.8926C12.5 19.8926 21.1914 14.3237 21.1914 9.41162C21.1914 6.92383 19.1333 4.90723 16.5942 4.90723Z"
      fill="#545454"
      fillOpacity="0.15"
    />
  </svg>
);

const SvgDollar = () => (
  <svg
    width="7"
    height="15"
    viewBox="0 0 7 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.921875 15.666C1.24089 15.8548 1.57292 16.0241 1.91797 16.1738C2.26953 16.3236 2.65365 16.3984 3.07031 16.3984C3.32422 16.3984 3.56836 16.3626 3.80273 16.291C4.03711 16.2194 4.24219 16.1087 4.41797 15.959C4.59375 15.8092 4.73372 15.6204 4.83789 15.3926C4.94206 15.1582 4.99414 14.8815 4.99414 14.5625C4.99414 14.3477 4.96484 14.1263 4.90625 13.8984C4.85417 13.6706 4.76302 13.4264 4.63281 13.166C4.50911 12.8991 4.3431 12.6094 4.13477 12.2969C3.93294 11.9844 3.67904 11.6361 3.37305 11.252L2.11328 9.66016C1.80078 9.26302 1.53385 8.88542 1.3125 8.52734C1.09766 8.16927 0.921875 7.82747 0.785156 7.50195C0.648438 7.16992 0.547526 6.85417 0.482422 6.55469C0.423828 6.2487 0.394531 5.94922 0.394531 5.65625C0.394531 4.88802 0.583333 4.22396 0.960938 3.66406C1.33854 3.09766 1.8724 2.70052 2.5625 2.47266V0.695312H4.00781V2.26758C4.41797 2.2806 4.82487 2.3457 5.22852 2.46289C5.63867 2.58008 6.03906 2.7526 6.42969 2.98047L5.64844 4.49414C5.42057 4.35742 5.17318 4.24023 4.90625 4.14258C4.64583 4.03841 4.35612 3.98633 4.03711 3.98633C3.50326 3.98633 3.07682 4.13932 2.75781 4.44531C2.4388 4.74479 2.2793 5.17122 2.2793 5.72461C2.2793 5.87435 2.29557 6.0306 2.32812 6.19336C2.36068 6.34961 2.41602 6.52214 2.49414 6.71094C2.57878 6.89974 2.68945 7.10807 2.82617 7.33594C2.9694 7.5638 3.14844 7.82096 3.36328 8.10742L5.18945 10.5098C5.42383 10.8223 5.64518 11.1283 5.85352 11.4277C6.06185 11.7207 6.24089 12.0234 6.39062 12.3359C6.54036 12.6419 6.65755 12.9674 6.74219 13.3125C6.83333 13.651 6.87891 14.0189 6.87891 14.416C6.87891 14.9173 6.80729 15.373 6.66406 15.7832C6.52734 16.1934 6.33203 16.5547 6.07812 16.8672C5.83073 17.1797 5.53125 17.4401 5.17969 17.6484C4.82812 17.8568 4.4375 18.0033 4.00781 18.0879V19.7285H2.5625V18.1562C2.08073 18.1107 1.625 18.0098 1.19531 17.8535C0.772135 17.6973 0.401042 17.5085 0.0820312 17.2871L0.921875 15.666Z"
      fill="#F7BA83"
    />
  </svg>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Ubuntu',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 25,
    marginLeft: 10,
    marginTop: 30,
    color: '#E94141',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  filterButton: {
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#E94141',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  selectedButton: {
    backgroundColor: '#E94141',
  },
  filterText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
  },
  selectedText: {
    color: '#FFF',
  },
  itemContainer: {
    flex: 1,
  },
  itemInnerContainer: {
    backgroundColor: '#F7BA8326',
    alignItems: 'center',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 8,
  },
  imageWrapper: {
    alignItems: 'center',
    marginTop: -20,
  },
  image: {
    width: '85%',
    height: 100,
  },
  itemTitle: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  itemPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  itemPriceText: {
    marginLeft: 5,
    fontFamily: 'Voltaire',
  },
  addButton: {
    backgroundColor: '#E94141',
    paddingVertical: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import { setBikes } from './bikeSlice';

export default function AddNewBike() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 600,
        maxHeight: 800,
      },
      (response) => {
        if (!response.didCancel && response.assets) {
          setImageUri(response.assets[0].uri);
        }
      }
    );
  };

  const handleSubmit = () => {
    const newBike = {
      name: name,
      price: price,
      image: imageUri,
    };

    fetch('https://64544639a74f994b333d117e.mockapi.io/status', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBike),
    })
      .then((response) => response.json())
      .then(() => {
        dispatch(setBikes([...bikes, newBike])); 
        navigation.navigate('DetailsProduct')
      })
      .catch((error) => {
        console.error('Error adding new bike:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Bike</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Bike Name"
        value={name}
        onChangeText={setName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      
      <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
        <Text>Pick Image</Text>
      </TouchableOpacity>

      {imageUri && <Image source={{ uri: imageUri }} style={styles.imagePreview} />}

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  imageButton: {
    backgroundColor: '#E94141',
    padding: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  imagePreview: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#E94141',
    padding: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

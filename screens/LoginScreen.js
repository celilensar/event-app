import React, { useEffect, useLayoutEffect, useState} from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, Animated, KeyboardAvoidingView, ScrollView, Platform, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [logoOpacity] = useState(new Animated.Value(0));

  useEffect(() => {
    // Trigger the logo animation on component mount
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLogin = async () => {
    try {
      // Retrieve the stored email and password
      const storedUsername = await AsyncStorage.getItem('Username');
      const storedPassword = await AsyncStorage.getItem('password');

      if (username === storedUsername && password === storedPassword) {
        // Perform login logic here
        // Show a success message
        Alert.alert('Login Successful', 'You have been logged in successfully.');

        // Navigate to the Home screen
        navigation.navigate('UserProfile', { username, password });
        navigation.navigate('Home');

      } else {
        // Show an error message for invalid login
        Alert.alert('Invalid Login', 'Please enter valid login information.');
      }
    } catch (error) {
      // Show an error message
      Alert.alert('Error', 'An error occurred during login.');

      console.log('Error retrieving user data:', error);
    }
  };


  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    });
  }, []);

  return (
<KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >

<ScrollView contentContainerStyle={styles.contentcontainer}
    keyboardShouldPersistTaps='handled'
    >
    <View style={styles.logoContainer}>
       
       <Animated.Image
           source={require('../assets/Logo-1.png')} // Replace with your logo image source
           style={[styles.logo, { opacity: logoOpacity }]}
           resizeMode="contain"
           />
   
   </View> 
   <View>
        <Text style={styles.welcomeText}>Login Your Account</Text>

    </View>
      
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      <View style={styles.loginButton}>
        <Button title="Login" onPress={handleLogin} style={styles.loginButton} color={'#fff'} />
      </View>

    </View>
</ScrollView>    
</KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
      flex: 1,
      // justifyContent: 'center',
      // paddingHorizontal: 20,
      backgroundColor: '#222831',
paddingHorizontal: 14,
paddingBottom:2,


},
contentContainer: {
flex: 1,
flexGrow: 1,
justifyContent: 'center',
alignItems: 'center',
padding: 20,
},

welcomeText: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 70,
textAlign: 'center',
color: '#fafafa',

},

input: {
marginBottom: 10,
paddingHorizontal: 12,
paddingVertical: 12,
borderWidth: 0,
borderColor: '#CCCCCC',
borderRadius: 20,
backgroundColor: '#e7eaf6',
},
loginButton: {
  marginTop: 7,
  borderRadius: 20,
  paddingVertical: 3,
  marginHorizontal: 12,
  backgroundColor: '#2772db',
},
logoContainer: {
  alignItems:'center',
  marginHorizontal:20,
},
logo: {
  paddingTop:10,
  width: 300,
  height: 200,
  alignItems: 'center',
  
},

});

export default LoginScreen;

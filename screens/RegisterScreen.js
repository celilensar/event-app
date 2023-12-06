import React, { useEffect, useLayoutEffect, useState,  } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, Animated, KeyboardAvoidingView, ScrollView, Platform, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const RegisterScreen = ({ navigation }) => {
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
  
  
  const handleRegister = async () => {
    try {
      // Perform registration logic here
      // Store the registered user's email and password
      await AsyncStorage.setItem('Username', username);
      await AsyncStorage.setItem('password', password);
      // Show a success message
      Alert.alert('Registration Successful', 'You have been registered successfully. Please Login Your Account');
      // Navigate to the Login screen
      navigation.navigate('Login');
    } catch (error) {
      // Show an error message
      Alert.alert('Error', 'An error occurred during registration.');

      console.log('Error storing user data:', error);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    });
  }, []);

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };
 

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
        <Text style={styles.welcomeText}>Welcome to Your Events App!</Text>

        </View>

        
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
          secureTextEntry
          style={styles.input}
          />
        <View style={styles.registerButton}>
        <Button title="Sign Up" onPress={handleRegister} color="#FFFF"
          style={styles.registerButton}/>
        </View>
        
        <View style={styles.loginContainer}>
            <Text style={styles.subtitle}>Already You're a member?</Text>
            
        </View>
        <View style={styles.loginButton}>
            <Button title="Login" onPress={navigateToLogin} color="#fff" style={styles.loginButton} />
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
  formContainer: {
    padding: 20,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
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
  registerButton: {
    borderRadius: 20,
    marginTop: 18,
    paddingVertical: 3,
    marginHorizontal: 12,
    backgroundColor: '#fdb44b',
  },
  loginContainer: {
    paddingTop: 30,
  },

  subtitle: {
    textAlign: 'center',
    marginVertical: 7,
    color:'#0092ca',
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
  
  
},
);



export default RegisterScreen;

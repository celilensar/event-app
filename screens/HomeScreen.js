import React, { useLayoutEffect, useState, useRef } from 'react';
import { View, Text,StyleSheet, ScrollView, TextInput, Image, TouchableOpacity, Animated } from 'react-native';
import { MaterialIcons, Fontisto, Feather, AntDesign } from '@expo/vector-icons';
import RegisterScreen from './RegisterScreen';
import UserProfileScreen from './UserProfileScreen';


const HomeScreen = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const scaleValue = useRef(new Animated.Value(1)).current;
  const [selectedIcon, setSelectedIcon] = useState('home');

 
  const handleIconSelection = (iconName) => {
    setSelectedIcon(iconName);
  };
  
 

  
  const handleOptionClick = (option) => {
    // setSelectedOption(option);
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
    animateCard();
  };

 
  
  const menuOptions = [
    { label: 'Concert', image: require('../assets/concert.jpg') },
    { label: 'Party', image: require('../assets/party.jpg') },
    { label: 'Museum', image: require('../assets/museum.jpg') },
    { label: 'Exhibitions', image: require('../assets/exhibition.jpg') },
    { label: 'Other', image: require('../assets/splash.png') },
  ];

  const animateCard = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 6000,
        useNativeDriver: true,
      }),
    ]).start();
  };


  useLayoutEffect(() => {
    navigation.setOptions({
        headerShown: false,
    });
  }, []);

  
  // const HomeContent = () => {
  //   <View>
  //     <Text>Welcome to the Home Screen!</Text>
  //   </View>
  // };
  
 const UserProfileContent = () => {
    
    
    return (
    <View style={{flex:1}}>

     
      <UserProfileScreen/>

        
      


    </View>
 )};

  const FavoriteContent = () => (
    <View style={{flex:1}}>
      
    </View>
  );

  
  const renderContent = () => {
    if (selectedIcon === 'user') {
      return <UserProfileContent /> ;
    } else if (selectedIcon === 'favorite') {
      return <FavoriteContent />;
    } 
    else
    
    
    
    
    return (
    
      
      
      <View style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 20, paddingTop:30, flexDirection:'row', justifyContent:'center', alignItems: 1 }}>
        <MaterialIcons name="menu" size={28} color="black" />
        <Text style={{ fontSize: 20, fontWeight: '500', textAlign:'center', flex:1 }}>HOME</Text>
        <Fontisto name="adjust" size={24} color="black" />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 15, paddingLeft: 20 }}>
        {menuOptions.map((option) => (
          <TouchableOpacity
          key={option.label}
          onPress={() => handleOptionClick(option.label)} activeOpacity={0.9}
          style={{  borderRadius: 20, marginRight: 10, marginTop:10, marginBottom: 10, backgroundColor: selectedOption === option.label ? '#dbd8e3' : '#e7eaf6',alignItems:'center', shadowColor: '#000',
          shadowOffset: {
            width: 3,
            height: 2,
          },
            shadowOpacity: 0.15, shadowRadius: 3.84,  }}
            >
            <Animated.View
              style={[{
                alignItems: 'center',
                transform: [{ scale: selectedOption === option.label ?  scaleValue : 1}],
                shadowColor: '#000',
                shadowOffset: {
                  width: 3,
                  height: 3,
                },
                shadowOpacity: selectedOption === option.label ? 0.25 : 0.15, 
                shadowRadius: 3.84,
                elevation: 5,
              },
              selectedOption === option.label ? { borderWidth: 5, borderColor: '#0000' } : null,
            ]}
            >

              <Image source={option.image} style={{width:80, height:100 ,resizeMode:'cover', borderRadius:10, margin:0}}/>
            </Animated.View>
              <Text style={{ fontWeight:'600' , position:'absolute',color: selectedOption === option ? '#fff' : '#000', bottom:10 }}>{option.label}</Text>
          </TouchableOpacity>
            
            ))}
      </ScrollView>
        <View style={{marginHorizontal:20, marginTop:20, flexDirection:'row', alignItems:'center',borderWidth: 0, borderRadius: 20,backgroundColor:'#fdffcd'}}>
        <Feather name="search" size={24} color="black" style={{marginLeft:5}} />
          <TextInput style={{ flex: 1 ,backgroundColor:'#fdffcd',paddingVertical:13, padding: 10, borderWidth: 0, borderRadius: 20 }} placeholder="Search" />
          <Feather name="filter" size={21} color="black" style={{marginRight:15, opacity:0.7}} />
        </View>

        



      <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Recommended</Text>
        {/* Render recommended events here */}
        {/* For each event, create a horizontally scrollable container */}
      </View>

      {/* Render the event card */}
      <TouchableOpacity style={{ margin: 20, borderRadius: 10, overflow: 'hidden' }}>
        <Image source={require('../assets/Event-1.jpg')} style={{ width: '100%', height: 200, resizeMode: 'cover', opacity: 0.8 }} />
        <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, justifyContent: 'flex-end', padding: 10 }}>
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Event Name</Text>
          <Text style={{ color: '#fff', fontSize: 14 }}>Date - Price - Category</Text>
        </View>
      </TouchableOpacity>
      


      
    

      
    </View>
  );
};

return (
  <>
  {renderContent()}
  
  
  <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 20,marginBottom:0 }}>

      <TouchableOpacity activeOpacity={0.7}
        style={[
          styles.iconContainer,
          selectedIcon === 'favorite' && styles.selectedIconContainer,
        ]}
        onPress={() => handleIconSelection('favorite')}
        >
        <MaterialIcons
          name="favorite-border"
          size={30}
          color={selectedIcon === 'favorite' ? '#fff' : '#000'}
          />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7}
        style={[
          styles.iconContainer,
          selectedIcon === 'home' && styles.selectedIconContainer,
        ]}
        onPress={() => handleIconSelection('home')}
        >
        <AntDesign
          name="home"
          size={30}
          color={selectedIcon === 'home' ? '#feffdf' : '#000'}
          />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7}
        style={[
          styles.iconContainer,
          selectedIcon === 'user' && styles.selectedIconContainer,
        ]}
        onPress={() => handleIconSelection('user')}
        >
        <AntDesign
          name="user"
          size={30}
          color={selectedIcon === 'user' ? '#fff' : '#000'}
          />
      </TouchableOpacity>
      
      </View>

      </>   
  )
  
  
};

const styles = StyleSheet.create({
  homeButtons: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    
  },
  iconContainer: {
    padding: 10,
    borderRadius: 20,
    // backgroundColor: '#e7eaf6',
  },
  selectedIconContainer: {
    backgroundColor: '#352f44',
    opacity:1
    
  },
});

export default HomeScreen;

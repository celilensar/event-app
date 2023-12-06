import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const UserProfileScreen = () => {
  

  return (
    <View style={{ paddingTop:30, flexDirection:"row", marginHorizontal:10, justifyContent:'center',}}>
       <Ionicons name="chevron-back-outline" size={27} color="black" />
       <Text style={{fontWeight: "500", fontSize: 20, textAlign:"center", flex:1 }}>PROFILE</Text>
       <Ionicons name="settings-outline" size={24} color="black" />
        <Image source={{uri: "./assets/Photo.png"}} />
    </View>

  );
};

export default UserProfileScreen;

import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderWithMenu from '../components/headerMenu'
import { StatusBar } from 'expo-status-bar'

const profileIcon = require("../assets/profile-pfp.png");

const Perfil = () => {
  return (
    <View>
      <HeaderWithMenu/>

      <View style={styles.perfilContainer}>
        <Text>Perfil</Text>

        <Image source={profileIcon} style={styles.profileIcon}></Image>
        

      </View>

      <StatusBar style="auto" />
      
    </View>
  )
}

export default Perfil

const styles = StyleSheet.create({
    perfilContainer: {

    },
    profileIcon:{
        width: 120,
        height: 120,

    }
})
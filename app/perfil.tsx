import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderWithMenu from '../components/headerMenu'
import { StatusBar } from 'expo-status-bar'

const Perfil = () => {
  return (
    <View>
      <HeaderWithMenu/>

      <View style={styles.perfilContainer}>
        <Text>Perfil</Text>
        

      </View>

      <StatusBar style="auto" />
      
    </View>
  )
}

export default Perfil

const styles = StyleSheet.create({
    perfilContainer: {

    }
})
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Pacientes = () => {
    return (
        <View>
            <View>
                <Text style={styles.pacienteTitle}>Menu</Text>
            </View>


        </View>
    )
}

export default Pacientes

const styles = StyleSheet.create({
    pacienteTitle: {
        fontFamily: 'NotoSans_Condensed',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 29,
        color: '#0066FF',
        marginTop: 19,
        marginLeft: 38
    }
})
import { Link } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import HeaderWithoutMenu from '../components/headerMenuX';

const calendarioIMG = require("../assets/calendar.png");
const listaPacienteIMG = require("../assets/lista_paciente.png");
const perfilIMG = require("../assets/perfil.png");
const chatIMG = require("../assets/chat_bubble.png");
const globoIMG = require("../assets/globe.png");
const faqIMG = require("../assets/faq.png");
const configuracoesIMG = require("../assets/Settings.png");

const Pacientes = () => {
    return (
        <View>
            <HeaderWithoutMenu />
            <View>
                <Text style={styles.menuTitle}>Menu</Text>
            </View>
            <View>
                <View>
                    <Link href='/calendario'>
                        <Image source={calendarioIMG} style={styles.menuIcons}></Image>
                    </Link>
                    <Link href='pacientes'>
                        <Image source={listaPacienteIMG} style={styles.menuIcons}></Image>
                    </Link>
                    <Link href='perfil'>
                        <Image source={perfilIMG} style={styles.menuIcons}></Image>
                    </Link>
                    <Link href='/'>
                        <Image source={chatIMG} style={styles.menuIcons}></Image>
                    </Link>
                    <Link href='/'>
                        <Image source={globoIMG} style={styles.menuIcons}></Image>
                    </Link>
                    <Link href='/'>
                        <Image source={faqIMG} style={styles.menuIcons}></Image>
                    </Link>
                    <Link href='/'>
                        <Image source={configuracoesIMG} style={styles.menuIcons}></Image>
                    </Link>
                </View>
                <View>
                    <Link href='/calendario'>
                        <Text></Text>
                    </Link>
                    <Link href='pacientes'>
                        <Text></Text>
                    </Link>
                    <Link href='perfil'>
                        <Text></Text>
                    </Link>
                    <Link href='/'>
                        <Text></Text>
                    </Link>
                    <Link href='/'>
                        <Text></Text>
                    </Link>
                    <Link href='/'>
                        <Text></Text>
                    </Link>
                    <Link href='/'>
                        <Text></Text>
                    </Link>
                </View>

            </View>


        </View>
    )
}

export default Pacientes

const styles = StyleSheet.create({
    menuTitle: {
        fontFamily: 'NotoSans_Condensed',
        fontWeight: 500,
        fontSize: 24,
        lineHeight: 29,
        color: '#0066FF',
        marginTop: 19,
        marginLeft: 38
    },

    menuLinkName: {
        fontFamily: 'NotoSans_Regular',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 29,
        color: '#666666',
        marginTop: 36,
        marginLeft: 24,
    },

    menuIcons: {
        width: 30,
        height: 30
    }
})
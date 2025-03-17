import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CalendarComponent from '../components/c_calendario';

const Calendario: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <CalendarComponent />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default Calendario;

import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Text, View } from "react-native";
import styles from './Style';
import { BatLogo } from '../../Components/BatLogo/BatLogo';
import { BatTextInput } from '../../Components/BatTextInput/BatTextInput';
import { BatButton } from '../../Components/BatButton/BatButton';




export default function Home() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo/>
            </View>

            <View style={styles.inputContainer}>
                <BatButton/>
            </View>
            <StatusBar style="light" />
        </View>
    );
}



import React, {useState} from 'react';
import { Text, Pressable, View } from 'react-native';
import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';
import { TextInput } from 'react-native';


export function BatButton() {
    const [pass, setPass] = useState('')
    const [char, setChar] = useState('')
    const [charPass, setCharPass] = useState('')

    function handleGenerateButton() {
        let generateToken = generatePass()
        setPass(generateToken)
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(pass)
    }

    function handleInputCharChange(text:string){
        setChar(text)
    }

    function handleGenerateWithCharButton(){
        let generateToken = generatePass(char)
        setCharPass(generateToken)
    }

    function handleCopyButton2(){
        Clipboard.setStringAsync(charPass)
    }

  return (
    <>
        <BatTextInput pass={pass}></BatTextInput>
        <Pressable 
            style={styles.button} 
            onPress={handleGenerateButton}
        >
            <Text style={styles.text}>GENERATE</Text>
        </Pressable>
        <Pressable 
            style={styles.button} 
            onPress={handleCopyButton}
        >
            <Text style={styles.text}>⚡ COPY</Text>
        </Pressable>

        <View style={{marginTop:30, width:'100%'}}>
            
            <TextInput 
                style={styles.inputer}
                placeholder='Digite os caracteres'
                multiline={false}
                onChangeText={handleInputCharChange}
        >
        </TextInput>
        <Pressable 
            style={styles.button} 
            onPress={handleGenerateWithCharButton}
        >
            <Text style={styles.text}>GENERATE</Text>
        </Pressable>
        <TextInput 
                style={styles.inputer2}
                placeholder='pass'
                multiline={false}  
                value={charPass}
        >
        </TextInput>
        <Pressable 
            style={styles.button} 
            onPress={handleCopyButton2}
        >
            <Text style={styles.text}>⚡ COPY</Text>
        </Pressable>
        </View>
    </>
  );
}
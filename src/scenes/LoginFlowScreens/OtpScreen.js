import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView , TextInput} from "react-native"
// import LinearGradient from 'react-native-linear-gradient';
import {Colors, Mixins, Typography} from '../../styles/index'
import { scaleSize } from '../../styles/mixins';

const OtpScreen = (props)=>{
    const [texts, setTexts] = React.useState({
        ref_1: "",
        ref_2:"",
        ref_3:"",
        ref_4:"",
        ref_5:"",
        ref_6:""
    })
    React.useEffect(()=>{
        if(refs[`ref_1`])
            refs[`ref_1`].focus()
    }, [])
    const refs = {}
    const inputText = (text, type)=>{
        if(type === 6){
            texts[`ref_${type}`] = text
            setTexts(texts)
            // props.navigation.navigate
            refs[`ref_1`].focus()
            return;
        }
        refs[`ref_${type+1}`].focus()
        texts[`ref_${type}`] = text
        setTexts(texts)
    }
    
    return <SafeAreaView style={styles.container}>
        <View style={styles.body}>
            <Text style={styles.mainText}>Enter OTP</Text>
            <Text style={styles.discTxt}>6 digit OTP sent to your mobile number</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={(text)=>{inputText(text, 1)}}
                    ref={(input) => { refs["ref_1"] = input;}}
                    style={styles.input}
                    placeholder={"_"}
                    placeholderTextColor={Colors.GRAY_LIGHT}
                    autoFocus={true}
                    dataDetectorTypes="phoneNumber"
                    keyboardAppearance="dark"
                    keyboardType="numeric"
                    maxLength={1}
                    textContentType={"telephoneNumber"}
                />
                <TextInput
                    onChangeText={(text)=>{inputText(text, 2)}}
                    ref={(input) => { refs["ref_2"] = input; }}
                    style={styles.input}
                    placeholder={"_"}
                    placeholderTextColor={Colors.GRAY_LIGHT}
                    autoFocus={true}
                    dataDetectorTypes="phoneNumber"
                    keyboardAppearance="dark"
                    keyboardType="numeric"
                    maxLength={10}
                    textContentType={"telephoneNumber"}
                />
                <TextInput
                    onChangeText={(text)=>{inputText(text, 3)}}
                    ref={(input) => { refs["ref_3"] = input; }}
                    style={styles.input}
                    placeholder={"_"}
                    placeholderTextColor={Colors.GRAY_LIGHT}
                    autoFocus={true}
                    dataDetectorTypes="phoneNumber"
                    keyboardAppearance="dark"
                    keyboardType="numeric"
                    maxLength={10}
                    textContentType={"telephoneNumber"}
                />
                <TextInput
                    onChangeText={(text)=>{inputText(text, 4)}}
                    ref={(input) => { refs["ref_4"] = input; }}
                    style={styles.input}
                    placeholder={"_"}
                    placeholderTextColor={Colors.GRAY_LIGHT}
                    autoFocus={true}
                    dataDetectorTypes="phoneNumber"
                    keyboardAppearance="dark"
                    keyboardType="numeric"
                    maxLength={10}
                    textContentType={"telephoneNumber"}
                />
                <TextInput
                    onChangeText={(text)=>{inputText(text, 5)}}
                    ref={(input) => { refs["ref_5"] = input; }}
                    style={styles.input}
                    placeholder={"_"}
                    placeholderTextColor={Colors.GRAY_LIGHT}
                    autoFocus={true}
                    dataDetectorTypes="phoneNumber"
                    keyboardAppearance="dark"
                    keyboardType="numeric"
                    maxLength={10}
                    textContentType={"telephoneNumber"}
                />
                <TextInput
                    onChangeText={(text)=>{inputText(text, 6)}}
                    ref={(input) => { refs["ref_6"] = input; }}
                    style={styles.input}
                    placeholder={"_"}
                    placeholderTextColor={Colors.GRAY_LIGHT}
                    autoFocus={true}
                    dataDetectorTypes="phoneNumber"
                    keyboardAppearance="dark"
                    keyboardType="numeric"
                    maxLength={10}
                    textContentType={"telephoneNumber"}
                />
            </View>
        </View>
</SafeAreaView>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.PRIMARY,
    },
    body:{
        marginTop: scaleSize(60),
        marginLeft:scaleSize(12)
    },
    mainText:{
        color:Colors.WHITE,
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontSize: Typography.FONT_SIZE_25,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        marginBottom:scaleSize(10)
    },
    discTxt:{
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontSize: Typography.FONT_SIZE_20,
        color: Colors.GRAY_DARK
    },
    input:{
        textAlign: "center",
        height: scaleSize(60),
        borderRadius: 10,
        backgroundColor: Colors.PRIMARY,
        ...Mixins.boxShadow("black", 5),
        width: "13%",
        marginTop: scaleSize(30),
        letterSpacing: scaleSize(10),
        fontSize: scaleSize(18),
        color: Colors.WHITE,
    },
    inputContainer:{
        flexDirection: "row", justifyContent: "space-evenly", alignItems:"center"
    }
  });
export default  OtpScreen
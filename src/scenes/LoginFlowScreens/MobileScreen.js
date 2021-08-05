import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView , TextInput} from "react-native"
// import LinearGradient from 'react-native-linear-gradient';
import {Colors, Mixins, Typography} from '../../styles/index'
import { scaleSize } from '../../styles/mixins';

const IntroScreen = (props)=>{
    const inputMobile = ()=>{
        console.warn("hello")
    }
    const navigateToScreen=()=>{
        // console.warn(props)
        props.navigation.navigate("EnterOtpScreen")
    }
    return <SafeAreaView style={styles.container}>
        <View style={styles.body}>
            <Text style={styles.mainText}>Mobile verification</Text>
            <Text style={styles.discTxt}>Enter your mobile number</Text>
            <View>
            <TextInput
                onChangeText={inputMobile}
                style={styles.input}
                placeholder={"999999999"}
                placeholderTextColor={Colors.GRAY_DARK}
                autoFocus={true}
                keyboardAppearance="dark"
                keyboardType="number-pad"
                maxLength={10}
                textContentType={"telephoneNumber"}
                returnKeyType="done"
                onSubmitEditing={navigateToScreen}
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
        marginLeft:scaleSize(20)
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
        height: scaleSize(60),
        borderRadius: 20,
        backgroundColor: Colors.PRIMARY,
        ...Mixins.boxShadow("black", 10),
        width: "90%",
        marginTop: scaleSize(30),
        letterSpacing: scaleSize(10),
        fontSize: scaleSize(18),
        color: Colors.WHITE,
    }
  });
export default  IntroScreen
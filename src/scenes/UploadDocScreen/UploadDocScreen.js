import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView , TextInput, TouchableOpacity} from "react-native"
// import LinearGradient from 'react-native-linear-gradient';
import {Colors, Mixins, Typography} from '../../styles/index'
import { scaleSize } from '../../styles/mixins';

const IntroScreen = (props)=>{
    const [uploaded, setUploaded] = React.useState(false)
    const inputMobile = ()=>{
        console.warn("hello")
    }
    const navigateToScreen=()=>{
        // console.warn(props)
        props.navigation.navigate("EnterOtpScreen")
    }
    const UnlockedStep = ()=>{
        return <View style={styles.unlockedStepContainer}>
            <View style={styles.unlockedStepInner}>
                </View>
            </View>
    }
    const LockedStep = ()=>{
        return <View style={styles.lockedStepContainer}>
            </View>
    }
    const toggleUpload = ()=>{
        setUploaded(!uploaded)
    }

    const NonUploadedView = ()=>{
        return <View style={styles.belowDocTxtCont}>
            <Text style={{...styles.mainText, fontSize: scaleSize(Typography.FONT_SIZE_25), marginTop: scaleSize(10), color:Colors.SECONDARY}}>Document icon</Text>
            <TouchableOpacity onPress={toggleUpload}>
                <View style={styles.uploadBtn}>
                    <UnlockedStep />
                    <Text style={{...styles.mainText, fontSize: scaleSize(Typography.FONT_SIZE_20), marginTop: scaleSize(10)}}>Upload</Text>
                </View>
            </TouchableOpacity>
        </View>
    }
    const UploadedView = ()=>{
        return <View style={styles.uploadedBelowDocTxtCont}>
            <View style={styles.jpgView}>
                <View style={styles.tickAndTextCont}>
                    <View style={styles.greenTick}>
                    </View>
                    <Text style={{...styles.discTxt, paddingLeft: scaleSize(10)}}>license.jpg</Text>
                </View>
                <Text style={{...styles.discTxt, color:Colors.SECONDARY}}>X</Text>
            </View>
            <TouchableOpacity onPress={()=>props.navigation.navigate('BottomTabNavigator', {screen: "HomeTabNavigator"})}>
                <View style={styles.uploadBtn}>
                    <Text style={{...styles.discTxt, color:Colors.SECONDARY}}>Next</Text>
                </View>
            </TouchableOpacity>
        </View>
    }
    return <SafeAreaView style={styles.container}>
        <View style={styles.body}>
            <Text style={styles.mainText}>Document verification</Text>
            <Text style={styles.discTxt}>We need to verify your documents to proceed</Text>
            <View style={styles.stepContainer}>
                <UnlockedStep />
                <LockedStep />
                <LockedStep />
            </View>
            <View style={styles.documentSection}>
                <View style={styles.docTextWrap}>
                    <Text style={styles.discTxt}>Step 1</Text>
                    <Text style={{...styles.mainText, fontSize: scaleSize(Typography.FONT_SIZE_20), marginTop: scaleSize(10)}}>Upload driving license</Text>
                </View>
                {uploaded ? <UploadedView /> : <NonUploadedView />}
            </View>
        </View>
</SafeAreaView>
}
const styles = StyleSheet.create({
    tickAndTextCont:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    greenTick:{
        height:scaleSize(26),
        width:scaleSize(26),
        borderRadius:scaleSize(13),
        backgroundColor:"#02bd11"
    },
    jpgView:{
        paddingHorizontal: scaleSize(15),
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        width: "100%",
        height: scaleSize(55),
        borderRadius:scaleSize(10),
        backgroundColor:"#3d3d3d",
        shadowColor: "#666565",
        shadowRadius: 5,
        shadowOpacity: 1,
        shadowOffset: {height:-3,width:0},
        elevation: 2,
    },
    uploadedBelowDocTxtCont:{
        // borderColor:"white",
        // borderWidth:1,
        flex: 1,
        width: "85%",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    belowDocTxtCont:{
        // borderColor:"white",
        // borderWidth:1,
        flex:1,
        justifyContent:"space-between"
    },
    uploadBtn:{
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"row",
        marginBottom:scaleSize(30),
        width: scaleSize(180),
        height: scaleSize(55),
        borderRadius:scaleSize(30),
        backgroundColor:"#3d3d3d",
        shadowColor: "#666565",
        shadowRadius: 5,
        shadowOpacity: 1,
        shadowOffset: {height:-3,width:0},
        elevation: 2,
    },
    docTextWrap:{
        marginTop: scaleSize(50),
        justifyContent:"center",
        alignItems:"center",
    },
    documentSection:{
        // borderColor:"white",
        // borderWidth: 1,
        height: "70%",
        // justifyContent:"space-between",
        alignItems:"center",
        borderRadius:scaleSize(15),
        borderWidth: 0.9,
        overflow: 'hidden',
        shadowColor: "#333333",
        shadowRadius: 7,
        shadowOpacity: 0.9,
        shadowOffset: {height:20,width:10},
        elevation: 2,

    },
    stepContainer:{
        alignSelf:"center",
        // borderColor:"white",
        // borderWidth: 1,
        justifyContent:"space-evenly",
        alignItems:'center',
        height: scaleSize(40),
        flexDirection:"row",
        width: "60%",
        marginVertical: scaleSize(20)
    },
    unlockedStepContainer:{
        justifyContent:"center",
        alignItems:"center",
        height: scaleSize(30),
        width: scaleSize(30),
        borderRadius:scaleSize(15),
        borderWidth: 0.4,
        overflow: 'hidden',
        shadowColor: "#3d3d3d",
        shadowRadius: 2,
        shadowOpacity: 1,
        shadowOffset: {height:3,width:0},
        elevation: 2,
    },
    unlockedStepInner:{
        height: scaleSize(15),
        width: scaleSize(15),
        borderRadius:scaleSize(7.5),
        backgroundColor:Colors.SECONDARY
    },
    lockedStepContainer:{
        height: scaleSize(30),
        width: scaleSize(30),
        borderRadius:scaleSize(15),
        backgroundColor:"#3d3d3d",
        shadowColor: "#666565",
        shadowRadius: 2,
        shadowOpacity: 1,
        shadowOffset: {height:-4,width:0},
        elevation: 2,
    },
    container: {
        flex: 1,
        backgroundColor:Colors.PRIMARY,
    },
    body:{
        marginTop: scaleSize(60),
        marginHorizontal:scaleSize(20)
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

  });
export default  IntroScreen
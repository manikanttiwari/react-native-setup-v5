import * as React from 'react';
import { View, Text, Image, StatusBar , StyleSheet, TouchableOpacity} from "react-native"

const HEADER_HEIGHT = 90;
import {Colors, Spacing, Mixins} from '../styles/index'
import { scaleSize } from '../styles/mixins';

const LeftHeader = (props)=>{
    return <TouchableOpacity style={styles.container} onPress={props.onPress} > 
            <Text style={styles.textStyle}>Back</Text>
    </TouchableOpacity>
}
const styles = StyleSheet.create({
    container: {marginLeft:scaleSize(10),  height: scaleSize(40), width:scaleSize(40), borderRadius:Mixins.scaleSize(20), backgroundColor:Colors.PRIMARY, justifyContent: "center", alignItems:"center", ...Mixins.boxShadow("white", 4)},
    buttonsContainer: {
      padding: scaleSize(10)
    },
    textStyle: {color: Colors.SECONDARY }
  });
export { LeftHeader };
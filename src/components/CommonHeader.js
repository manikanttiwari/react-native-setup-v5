import * as React from 'react';
import { View, Text, Image } from "react-native"

const HEADER_HEIGHT = 80;
import {Colors} from '../styles/index'

const CommonHeader = (props)=>{
    return (
        <View style={{height: HEADER_HEIGHT, backgroundColor:Colors.PRIMARY}}>
            <Text>Hello</Text>
            </View>
    ) 
}
export default CommonHeader;
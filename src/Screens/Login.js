import React from 'react'
import { View, Text, TextInput } from 'react-native'

export default function Login() {
    return (
        <View style={{backgroundColor: 'blue',flex: 1, flexDirection: 'column'}}>
        <View style={{backgroundColor: 'blue', flex: 1}}> 
        </View>

        <View style={{backgroundColor: 'white', alignItems: 'center', flex: 2.5, borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
            <Text style={{color: 'blue', fontSize: 35, paddingTop: 40, fontWeight: 'bold'}}>Login Now</Text> 
        </View>           
        </View>
    )
}

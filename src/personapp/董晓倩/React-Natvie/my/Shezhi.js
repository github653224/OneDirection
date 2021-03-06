import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, AsyncStorage, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
const { width } = Dimensions.get('window');
const s = width / 460;
export default class Shezhi extends Component {
    outlogin = () => {
        AsyncStorage.setItem('username','');
        AsyncStorage.setItem('password','');
        Actions.login(); 
    } 
    render() {
        return (
            <ScrollView>
                <View style={{
                    height: 60 * s, width: '100%', flexDirection: 'row', borderBottomColor: '#dedede', borderWidth: 1, borderTopColor: '#dedede',
                    borderLeftColor: 'white', borderRightColor: 'white', backgroundColor: "white"
                }}>
                    <Text style={{ fontSize: 18, lineHeight: 60 * s, marginLeft: 30 * s }} onPress={() => Actions.mima()}>密码重置</Text>
                    <Icon name="chevron-right" size={20} color="#aaa" style={{ marginLeft: 300, marginTop: 19 }} />
                </View>
                <TouchableOpacity
                    style={{
                        width: '50%',
                        height: 60 * s,
                        backgroundColor: '#37376F',
                        marginTop: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 15 * s,
                        marginLeft: '25%'
                    }}
                    onPress={this.outlogin}>
                    <Text style={{ color: '#ffffff', fontSize: 18 }}>退出登录</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}


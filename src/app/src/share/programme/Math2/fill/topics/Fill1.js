import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Fill1 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '【答案】xye^y',
                content4: '【解析】',
                content5: "df(x,y)=ye^ydx+x(1+y)e^ydy=d(xye^y),所以f(x,y)=xye^y+C,由f(0,0)=0得C=0,所以f(x,y)=xye^y"
            }]
        }
    }
    _renderHeader = section => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.header}</Text>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={styles.content}>
                <Text style={[{ color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content1}</Text>
                <Text style={[{ marginTop: 5 * s, color: 'red' }, styles.contentText]}>&emsp;&emsp;{section.content2}</Text>
                <Text style={[{ marginTop: 5 * s }, styles.contentText]}>&emsp;&emsp;{section.content3}</Text>
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
    };
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '85%', margin: '7.5%', borderColor: '#37376F', borderWidth: 1, padding: '2%' }}>
                        <Text style={{ fontSize: 16 * s }}>{`1、设函数f(x,y)具有一阶连续的偏导数，且已知df(x,y)=ye^ydx+x(1+y)e^ydy,f(0,0)=0,则f(x,y)=_______`}</Text>
                    </View>
                </View>
                <Accordion
                    sections={this.state.todo}
                    activeSections={this.state.activeSections}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                />
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        width: '20%',
        height: 50 * s,
        backgroundColor: '#37376F',
        borderBottomWidth: 1 * s,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10 * s,
        marginLeft: '40%'
    },
    headerText: {
        fontSize: 16,
        color: '#fff'
    },
    content: {
        backgroundColor: '#ffffff',
        padding: 10 * s
    },
    contentText: {
        fontSize: 16
    }
})
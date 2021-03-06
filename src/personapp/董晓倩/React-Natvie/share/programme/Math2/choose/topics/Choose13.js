import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Accordion } from '@ant-design/react-native';

const { width } = Dimensions.get('window');
const s = width / 460;

export default class Choose2 extends Component {
    constructor() {
        super();
        this.state = {
            activeSections: [],
            todo: [{
                header: '参考答案',
                content1: '【答案】D',
                content2: '【解析】',
                content3: "拉格朗日中值定理，如果函数f(x)满足（1）在闭区间[a,b]上连续，（2）在开区间(a,b)内可导，那么在（a，b）内至少有一点m(a<m<b),使得等式f（b）-f(a)f'(m)(b-a),成立"
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
                        <Text style={{ fontSize: 16 * s }}>{`13、设f(x)处处可导，则（   ）`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(A) 当lim(x->负无穷)f(x)=负无穷，必有lim(x->负无穷)f'(x)=负无穷`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(B) 当lim(x->负无穷)f'(x)=负无穷，必有lim(x->负无穷)f(x)=负无穷`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(C) 当lim(x->正无穷)f(x)=正无穷，必有lim(x->正无穷)f'(x)=正无穷`}</Text>
                        <Text style={{ fontSize: 16 * s }}>{`(D) 当lim(x->正无穷)f'(x)=负无穷，必有lim(x->负无穷)f(x)=正无穷`}</Text>
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
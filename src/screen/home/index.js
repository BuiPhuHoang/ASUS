import React, { Component } from 'react'
import { Text, View, TextInput,Image } from 'react-native'
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textSearch: ''
        }
    }
    render() {
        return (
            <View styly={{flex:1}}>
                <TextInput placeholder='Search'
                    style={{borderBottomColor:'yellow'}}
                    onChangeText={(text) => { this.setState({ textSearch: text }) }}
                />
            </View>
        )
    }
}
const data = [
    {
        name: 'Bùi Phú Hoàng',
        age: 18,
        adress: 'vân từ'
    },
    {
        name: 'Bùi Đức Quang',
        age: 19,
        adress: 'yên hòa'
    },
    {
        name: 'Bùi Đức Thịnh',
        age:16,
        adress: 'Phú Xuyên'
    },
    {
        name:'Bùi Minh Đức',
        age: 20,
        adress: ' thôn chung'
    },
    {
        name: 'Bùi Cao Khôi',
        age: 20,
        adress: 'Âu Cơ'
    },
    {
        name: 'Bùi Cao Kỳ',
        age: 25,
        adress : 'Vân từ'
    }
]
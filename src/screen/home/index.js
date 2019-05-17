import React, { Component } from 'react'
import { Text, View, TextInput, Image, FlatList } from 'react-native'
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textSearch: '',
            Search: ''
        }
    }
    render() {
        const { textSearch } = this.state;
        return (
            <View styly={{ flex: 1 }}>
                <TextInput placeholder='Search'
                    style={{ borderBottomColor: 'yellow', borderWidth: 1 }}
                    onChangeText={(text) => { this.setState({ textSearch: text }) }}
                />

                <FlatList
                    data={textSearch !== '' ? data.filter(user => user.name.toLowerCase().includes(textSearch.toLowerCase()) || user.adress.includes(textSearch) || `${user.age}`.includes(textSearch)) : data}
                    renderItem={({ item, index }) => (<View style={{ marginHorizontal: 10, borderBottomWidth: 1, borderBottomColor: 'gray', paddingBottom: 5 }}>
                        {index === 0 &&
                            <View style={{ flex: 1, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'gray', paddingBottom: 5 }}>
                                <View style={{ flex: 2 }}>
                                    <Text>{'Họ và Tên'}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text>{'Tuổi'}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text>{'Địa chỉ'}</Text>
                                </View>
                            </View>}
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 2 }}>
                                <Text>{item.name}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text>{item.age}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text>{item.adress}</Text>
                            </View>
                        </View>
                        {/* <View style={{width:'100%',height:1,backgroundColor:'gray'}}/> */}
                    </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        )
    }
}
const data = [
    {
        id: 1,
        name: 'Bùi Phú Hoàng',
        age: 18,
        adress: 'vân từ'
    },
    {
        id: 2,
        name: 'Bùi Đức Quang',
        age: 19,
        adress: 'yên hòa'
    },
    {
        id: 3,
        name: 'Bùi Đức Thịnh',
        age: 16,
        adress: 'Phú Xuyên'
    },
    {
        id: 4,
        name: 'Bùi Minh Đức',
        age: 20,
        adress: ' thôn chung'
    },
    {
        id: 5,
        name: 'Bùi Cao Khôi',
        age: 20,
        adress: 'Âu Cơ'
    },
    {
        id: 6,
        name: 'Bùi Cao Kỳ',
        age: 25,
        adress: 'Vân từ'
    }
]
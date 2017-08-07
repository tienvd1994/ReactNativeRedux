import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput
} from 'react-native';

export default class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Useless Multiline Placeholder',
        };
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.search}>
                    {/* <Image
                        style={{ width: 20, height: 20 }}
                        source={require('./../../images/ic_search_gray.png')}
                    /> */}
                    <View style={{ flex: 1 }}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder='Tìm kiếm khách hàng'
                            placeholderTextColor='#d8d8d8'
                            autoFocus={true}
                        />
                    </View>
                </View>
                <View style={{ marginTop: 5 }}>
                    <View style={styles.filter}>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.5, borderColor: '#d6d7da' }}>
                            <View style={styles.label}>
                                <Text>
                                    Cô huệ
                                </Text>
                                <Text style={{ color: '#a9a9a9' }}>
                                    0987654321
                                </Text>
                            </View>
                            <View style={styles.price}>
                                <Text style={styles.status}>ĐANG GIAO HÀNG</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.filter}>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.5, borderColor: '#d6d7da' }}>
                            <View style={styles.label}>
                                <Text>
                                    Cô huệ
                                </Text>
                                <Text style={{ color: '#a9a9a9', fontSize: 12 }}>
                                    0987654321
                                </Text>
                            </View>
                            <View style={styles.price}>
                                <Text style={styles.status}>ĐANG GIAO HÀNG</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.filter}>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.5, borderColor: '#d6d7da' }}>
                            <View style={styles.label}>
                                <Text>
                                    Cô huệ
                                </Text>
                                <Text style={{ color: '#a9a9a9', fontSize: 12 }}>
                                    0987654321
                                </Text>
                            </View>
                            <View style={styles.price}>
                                <Text style={styles.status}>ĐANG GIAO HÀNG</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.filter}>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.5, borderColor: '#d6d7da' }}>
                            <View style={styles.label}>
                                <Text>
                                    Cô huệ
                                </Text>
                                <Text style={{ color: '#a9a9a9' }}>
                                    0987654321
                                </Text>
                            </View>
                            <View style={styles.price}>
                                <Text style={styles.status}>ĐANG GIAO HÀNG</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    filter: {
        backgroundColor: '#f8f8ff',
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 10,
        flex: 1,
        flexDirection: 'row',

    },
    search: {
        backgroundColor: '#f8f8ff',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 10,
        flex: 1,
        flexDirection: 'row',

    },
    price: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    label: {
        flex: 1,
    },
    status: {
        color: '#0fb80f'
    }
});
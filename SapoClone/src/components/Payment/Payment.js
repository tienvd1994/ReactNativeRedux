import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Image,
    ScrollView,
    Switch,
    ListView,
    Alert,
    AsyncStorage
} from 'react-native';

import { LOGIN_ACCESS_TOKEN } from './../../constants/AsyncStoregeName';

export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switched: true,
        };
    }

    async savePayment(customers, products) {
        let obj = {
            OrderID: 0,
            CustomerID: customers.length === 0 ? 0 : customers[0].CustomerID,
            Products: products
        };

        const login_access_token = await AsyncStorage.getItem(LOGIN_ACCESS_TOKEN);

        fetch('http://192.168.100.200:88/api/Orders', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + login_access_token
            },
            body: JSON.stringify(obj)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    this.props.navigation.navigate('CreateOrder', { resetOrder: true });

                    return;
                }
                else {
                    Alert.alert(
                        responseJson.data,
                        '',
                        [
                            { text: 'OK', onPress: () => { return; } }
                        ],
                        { cancelable: false }
                    )
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { params } = this.props.navigation.state;

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.filter}>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 5, paddingBottom: 5 }}>
                            <Text underlayColor='transparent' style={styles.label}>
                                Khách phải trả
                            </Text>
                            <View style={styles.price}>
                                <Text underlayColor='transparent'>
                                    {params.order.totalPrice} đ
                            </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginLeft: 8, marginTop: 8 }}>
                        <Text style={{ color: '#a9a9a9' }}>
                            Phương thức thanh toán
                        </Text>
                    </View>
                    <View style={styles.filter}>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 5, paddingBottom: 5 }}>
                            <Text underlayColor='transparent' style={styles.label}>
                                Tiền mặt:
                            </Text>
                            <View style={styles.price}>
                                <Text underlayColor='transparent'>
                                    0 đ
                            </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', borderTopWidth: 0.5, borderColor: '#d6d7da', paddingTop: 5, justifyContent: 'center', }}>
                            <Text underlayColor='transparent'>
                                Thêm phương thức thanh toán
                            </Text>
                        </View>
                    </View>
                    <View style={styles.filter}>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 5, paddingBottom: 5 }}>
                            <View style={styles.label}>
                                <Text underlayColor='transparent'>Tiền trả lại</Text>
                            </View>
                            <View style={styles.price}>
                                <Text underlayColor='transparent'>0 đ</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10 }}>
                            <Text underlayColor='transparent' style={styles.label}>
                                In hóa đơn
                            </Text>
                            <View style={styles.price}>
                                <Switch
                                    onValueChange={(value) => this.setState({ switched: value })}
                                    onTintColor="#00ff00"
                                    style={{ marginBottom: 5 }}
                                    thumbTintColor="#0fb80f"
                                    tintColor="#d8d8d8"
                                    value={this.state.switched} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.btnPayment}>
                    <TouchableOpacity style={styles.saveOrder} onPress={() => this.savePayment(params.order.customers, params.order.products)}>
                        <Text style={{ color: 'white' }}>0 đ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    filter: {
        backgroundColor: '#f8f8ff',
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        padding: 10,
    },
    filterImage: {
        width: 16,
        height: 16,
        padding: 5,
        marginRight: 10,
        marginLeft: 5,
    },
    btnPayment: {
        padding: 8,
        backgroundColor: '#d6d6d6',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    price: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    label: {
        flex: 1,
        flexDirection: 'row'
    },
    btnPayment: {
        padding: 8,
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    saveOrder: {
        backgroundColor: '#0fb80f',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5
    }
});
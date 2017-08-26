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
    Alert
} from 'react-native';
import _ from 'lodash';

let products = [];
let customers = [];
let totalPrice = 0;
let totalDiscount = 0;
let totalVAT = 0;

export default class CreateOrder extends Component {
    constructor(props) {
        super(props);
        console.log(products);

        this.state = {
            switched: true,
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 })
        };
    }

    saveOrder(customers, products) {
        if (products.length === 0) {
            Alert.alert(
                'Vui lòng chọn hàng hóa',
                '',
                [
                    { text: 'OK', onPress: () => { return; } }
                ],
                { cancelable: false }
            )

            return;
        }

        if (customers.length === 0) {
            Alert.alert(
                'Vui lòng chọn khách hàng',
                '',
                [
                    { text: 'OK', onPress: () => { return; } }
                ],
                { cancelable: false }
            )

            return;
        }

        this.props.navigation.navigate('Payment', { order: { customers, products, totalPrice } });
    }

    rowRender(rowData) {
        return (
            <View style={{ paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.5, borderColor: '#d6d7da' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text underlayColor='transparent' style={styles.label}>{rowData.ProductName}</Text>
                    <View style={styles.price}>
                        <Text underlayColor='transparent'> CK: 0đ </Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
                    <View style={styles.price}>
                        <Text underlayColor='transparent'> Thuế: 0đ </Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={styles.label}>SL: {rowData.QuantityPerUnit}</Text>
                    <Text style={styles.label}>Đơn giá: {rowData.UnitPrice} đ</Text>
                    <View style={styles.price}>
                        <Text underlayColor='transparent'> 0đ </Text>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;

        if (params !== undefined) {
            if (params.product !== undefined) {
                var productFilter = _.filter(products, function (item) {
                    return item.ProductID === params.product.ProductID;
                });

                if (productFilter.length === 0) {
                    products = products.concat(params.product);
                }
            }

            if (params.customer !== undefined) {
                customers = [];
                customers = customers.concat(params.customer);
            }

            if (products.length > 0) {
                totalPrice = _.reduce(products, function (sum, item) {
                    return sum + item.UnitPrice;
                }, 0);
            }

            if (params.resetOrder) {
                products = [];
                customers = [];
                totalPrice = 0;
                totalDiscount = 0;
                totalVAT = 0;
            }
        }

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.filter}>
                        <TouchableOpacity underlayColor='transparent' style={{ flex: 1, flexDirection: 'row', paddingTop: 5, paddingBottom: 5, borderWidth: 0.5, borderColor: '#d6d7da', marginBottom: 10 }} onPress={() => navigate('ListProduct')}>
                            <Image
                                style={styles.filterImage}
                                source={require('./../../images/icon_customer_search.png')}
                            />
                            <Text>Tìm kiếm sản phẩm</Text>
                        </TouchableOpacity>
                        <View>
                            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', paddingTop: 5, paddingBottom: 5, borderWidth: 0.5, borderColor: '#d6d7da' }} onPress={() => navigate('ListCustomer')}>
                                <View underlayColor='transparent' style={{ flex: 1, flexDirection: 'row' }} >
                                    <Image
                                        style={styles.filterImage}
                                        source={require('./../../images/icon_customer_search.png')}
                                    />
                                    <Text>{customers.length === 0 ? 'Khách vãng lai' : customers[0].ContactName}</Text>
                                </View>
                                <View underlayColor='transparent' style={{ flex: 1, flexDirection: 'row' }}>
                                    <Image
                                        style={styles.filterImage}

                                        source={require('./../../images/easy_phone.png')}
                                    />
                                    <Text>{customers.length === 0 ? '' : customers[0].Phone}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {(products.length === 0 ? null :
                        <View style={styles.filter}>
                            <ListView
                                dataSource={this.state.dataSource.cloneWithRows(products)}
                                renderRow={this.rowRender.bind(this)}
                                enableEmptySections={true}
                            />
                        </View>)}
                    <View style={styles.filter}>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.5, borderColor: '#d6d7da' }}>
                            <Text underlayColor='transparent' style={styles.label}>
                                Tổng tiền hàng:
                            </Text>
                            <View style={styles.price}>
                                <Text underlayColor='transparent'>
                                    {totalPrice} đ
                            </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.5, borderColor: '#d6d7da' }}>
                            <Text underlayColor='transparent' style={styles.label}>
                                Thuế:
                            </Text>
                            <View style={styles.price}>
                                <Text underlayColor='transparent'>
                                    {totalVAT} đ
                            </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderColor: '#d6d7da' }}>
                            <Text underlayColor='transparent' style={styles.label}>
                                Chiết khấu:
                            </Text>
                            <View style={styles.price}>
                                <Text underlayColor='transparent'>
                                    {totalDiscount} đ
                            </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.5, borderColor: '#d6d7da' }}>
                            <Text underlayColor='transparent' style={styles.label}>
                                Khách phải trả:
                            </Text>
                            <View style={styles.price}>
                                <Text underlayColor='transparent'>
                                    {totalPrice + totalPrice * totalVAT - totalPrice * totalDiscount} đ
                            </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, marginBottom: 40 }}>
                            <Text underlayColor='transparent' style={styles.label}>
                                Đã bao gồm thuế:
                            </Text>
                            <View style={styles.price}>
                                <Switch
                                    onValueChange={(value) => this.setState({ switched: value })}
                                    onTintColor="#00ff00"
                                    style={{ marginBottom: 10 }}
                                    thumbTintColor="#0fb80f"
                                    tintColor="#d8d8d8"
                                    value={this.state.switched} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.btnPayment}>
                    <TouchableOpacity style={styles.saveOrder} onPress={() => this.saveOrder(customers, products)}>
                        <Text style={{ color: 'white' }}>{totalPrice} đ</Text>
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
        backgroundColor: 'transparent',
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
    saveOrder: {
        backgroundColor: '#0fb80f',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5
    }
});
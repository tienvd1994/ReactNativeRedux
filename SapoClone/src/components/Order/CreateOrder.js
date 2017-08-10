import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
    Image,
    ScrollView,
    Switch
} from 'react-native';

export default class CreateOrder extends Component {
    constructor(props) {
        super(props);
        this.state = { switched: true };
    }

    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
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
                                    <Text>{params === undefined ? `Khách vãng lai` : params.customer.ContactName}</Text>
                                </View>
                                <View underlayColor='transparent' style={{ flex: 1, flexDirection: 'row' }}>
                                    <Image
                                        style={styles.filterImage}
                                        source={require('./../../images/easy_phone.png')}
                                    />
                                    <Text>{params === undefined ? '' : params.customer.Phone}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.filter}>
                        <View style={{ paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.5, borderColor: '#d6d7da' }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Text underlayColor='transparent' style={styles.label}> Mũ bảo hiểm sơn tùng </Text>
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
                                <Text style={styles.label}>SL: 2</Text>
                                <Text style={styles.label}>Đơn giá: 0 đ</Text>
                                <View style={styles.price}>
                                    <Text underlayColor='transparent'> 0đ </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.filter}>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.5, borderColor: '#d6d7da' }}>
                            <Text underlayColor='transparent' style={styles.label}>
                                Tổng tiền hàng:
                            </Text>
                            <View style={styles.price}>
                                <Text underlayColor='transparent'>
                                    300.000 đ
                            </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.5, borderColor: '#d6d7da' }}>
                            <Text underlayColor='transparent' style={styles.label}>
                                Thuế:
                            </Text>
                            <View style={styles.price}>
                                <Text underlayColor='transparent'>
                                    300.000 đ
                            </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderColor: '#d6d7da' }}>
                            <Text underlayColor='transparent' style={styles.label}>
                                Chiết khấu:
                            </Text>
                            <View style={styles.price}>
                                <Text underlayColor='transparent'>
                                    300.000 đ
                            </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10, borderBottomWidth: 0.5, borderColor: '#d6d7da' }}>
                            <Text underlayColor='transparent' style={styles.label}>
                                Khách phải trả:
                            </Text>
                            <View style={styles.price}>
                                <Text underlayColor='transparent'>
                                    300.000 đ
                            </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingTop: 10 }}>
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
                    <Button title="0 đ" color="#0fb80f" onPress={() => console.log('xxx')} />
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
        width: '100%'
    },
    price: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    label: {
        flex: 1,
        flexDirection: 'row'
    }
});
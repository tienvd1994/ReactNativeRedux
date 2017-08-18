import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableHighlight,
    TouchableOpacity,
    Image
} from 'react-native';

export default class Sale extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, backgroundColor: '#f8f8ff' }}>
                <StatusBar backgroundColor="#017a01" />
                <View style={{ flex: 1, alignItems: 'center', borderBottomWidth: 0.5, borderColor: '#d6d7da' }}>
                    <TouchableOpacity underlayColor='transparent' onPress={() => navigate('CreateOrder')}>
                        <Image
                            style={{ width: 50, height: 50, marginTop: 50 }}
                            source={require('./../images/easy_add_sale.png')}
                        />
                        <Text style={{ color: '#0fb80f' }}>Bán Hàng</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', borderBottomWidth: 0.5, borderColor: '#d6d7da' }}>
                    <TouchableOpacity underlayColor='transparent'
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRightWidth: 0.5, borderColor: '#d6d7da' }}
                        onPress={() => navigate('List')}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require('./../images/easy_order.png')}
                        />
                        <Text style={{ color: '#0fb80f' }}>Đơn hàng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity underlayColor='transparent' style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => console.log('xxx')}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require('./../images/easy_delivery.png')}
                        />
                        <Text style={{ color: '#0fb80f' }}>Quản lý giao hàng</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', borderBottomWidth: 0.5, borderColor: '#d6d7da' }}>
                    <TouchableOpacity underlayColor='transparent' style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRightWidth: 0.5, borderColor: '#d6d7da' }} onPress={() => ('xxx')}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require('./../images/easy_delivery_icon.png')}
                        />
                        <Text style={{ color: '#0fb80f' }}>Đối tác vận chuyển</Text>
                    </TouchableOpacity>
                    <TouchableOpacity underlayColor='transparent' style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={() => console.log('xxx')}>
                        <Image
                            style={{ width: 50, height: 50 }}
                            source={require('./../images/easy_order_return.png')}
                        />
                        <Text style={{ color: '#0fb80f' }}>Trả hàng</Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Button,
    Image,
    TouchableHighlight,
    ScrollView,
    AsyncStorage
} from 'react-native';

export default class Dashboard extends Component {
    render() {
        const { navigate } = this.props.navigation;
        const access_token = AsyncStorage.getItem('Login_access_token');
        return (
            <ScrollView style={styles.container}>
                <StatusBar backgroundColor="#017a01" />
                <View style={styles.filter}>
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Text style={{ fontWeight: 'bold', }}>14 Th 7 - 10 Th7</Text>
                        <Text>so với 27 Th 03 - 10 Th7</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <TouchableHighlight underlayColor='transparent'>
                            <Image
                                style={styles.filterImage}
                                source={require('./../images/easy_back1.png')}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='transparent'>
                            <Image
                                style={styles.filterImage}
                                source={require('./../images/easy_next.png')}
                            />
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor='transparent' onPress={() => navigate('Branch')}>
                            <Image
                                style={styles.filterImage}
                                source={require('./../images/ic_location_dashboard.png')}
                            />
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.order} >
                    <View style={{ flex: 1, marginBottom: 10 }}>
                        <Text>Đơn đã hoàn thành</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', borderTopWidth: 0.5, borderColor: '#d6d7da' }}>
                        <View style={{ flex: 1, borderRightWidth: 0.5, borderColor: '#d6d7da', paddingBottom: 5 }}>
                            <Text style={{ color: '#7fff00' }}>0</Text>
                            <Text>Đơn đang giao dịch</Text>
                        </View>
                        <View style={{ flex: 1, paddingLeft: 5, paddingBottom: 5 }}>
                            <Text style={{ color: '#ffd700' }}>0</Text>
                            <Text>Đơn chờ giao</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', borderTopWidth: 0.5, borderColor: '#d6d7da' }}>
                        <View style={{ flex: 1, borderRightWidth: 0.5, borderColor: '#d6d7da', paddingBottom: 5 }}>
                            <Text style={{ color: '#00bfff' }}>0</Text>
                            <Text>Đơn trả hàng</Text>
                        </View>
                        <View style={{ flex: 1, paddingLeft: 5, paddingBottom: 5 }}>
                            <Text style={{ color: '#ff4500' }}>0</Text>
                            <Text>Đơn hủy</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.order} >
                    <View style={{ flex: 1, marginBottom: 10 }}>
                        <Text>Doanh thu</Text>
                    </View>
                    <View style={{ flex: 1, marginBottom: 10 }}>
                        <Text style={{ fontSize: 19, fontWeight: 'bold', }}>2.194.293 đ</Text>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Image style={{ width: 12, height: 12, marginTop: 5 }}
                                source={require('./../images/arrow_down.png')}
                            />
                            <Text style={{ color: 'red' }}>88.194.293 đ (-98.4%)</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.order} >
                    <View style={{ flex: 1, marginBottom: 10, flexDirection: 'row', }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text>Hàng bán chạy</Text>
                        </View>
                        <TouchableHighlight style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }} underlayColor='transparent' onPress={() => console.log('xxx')}>
                            <Image
                                style={{ width: 30, height: 30, }}
                                source={require('./../images/bs_ic_more_light.png')}
                            />
                        </TouchableHighlight>
                    </View>
                    <View style={{ flex: 1, marginBottom: 10 }}>
                        <Text>Theo đơn hàng</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    filter: {
        backgroundColor: '#f8f8ff',
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        padding: 10,
        flex: 1,
        flexDirection: 'row',

    },
    filterImage: {
        width: 40,
        height: 40,
    },
    order: {
        backgroundColor: '#f8f8ff',
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1,

    },
});
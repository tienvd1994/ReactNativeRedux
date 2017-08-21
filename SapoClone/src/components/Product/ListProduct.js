import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
    ListView,
    RefreshControl,
    AsyncStorage
} from 'react-native';

import { LOGIN_ACCESS_TOKEN } from './../../constants/AsyncStoregeName';

let resultArray = [];

export default class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtSearch: "",
            isLoading: true,
            refreshing: false,
            currentPage: 1,
            isLoadingTail: false,
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 }),
        };
    }

    async  componentDidMount() {
        const login_access_token = await AsyncStorage.getItem(LOGIN_ACCESS_TOKEN);

        return fetch('http://192.168.100.200:88/api/Products?keyword=' + this.state.txtSearch + '&pageIndex=' + this.state.currentPage + '&pageSize=20', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + login_access_token
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                resultArray = responseJson
                this.setState({
                    isLoading: false,
                    dataSource: this.state.dataSource.cloneWithRows(resultArray),
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    choosenProduct(rowData) {
        this.props.navigation.navigate('CreateOrder', { product: rowData });
    }

    async  onTextSearchChange(event) {
        let txtSearch = event.nativeEvent.text;
        this.setState({ txtSearch });
        const login_access_token = await AsyncStorage.getItem(LOGIN_ACCESS_TOKEN);

        return fetch('http://192.168.100.200:88/api/Products?keyword=' + this.state.txtSearch + '&pageIndex=1&pageSize=20', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + login_access_token
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                resultArray = [];
                resultArray = responseJson;
                this.setState({
                    isLoading: false,
                    dataSource: this.state.dataSource.cloneWithRows(resultArray),
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    async  _onRefresh() {
        const login_access_token = await AsyncStorage.getItem(LOGIN_ACCESS_TOKEN);

        fetch('http://192.168.100.200:88/api/Products?keyword=' + this.state.txtSearch + '&pageIndex=1&pageSize=20',
            {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + login_access_token
                }
            })
            .then((response) => response.json())
            .then((responseJson) => {
                resultArray = [];
                resultArray = responseJson
                this.setState({
                    refreshing: false,
                    dataSource: this.state.dataSource.cloneWithRows(resultArray),
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    async _onEndReached() {
        const login_access_token = await AsyncStorage.getItem(LOGIN_ACCESS_TOKEN);

        fetch('http://192.168.100.200:88/api/Products?keyword=' + this.state.txtSearch + '&pageIndex=' + (this.state.currentPage + 1) + '&pageSize=20',
            {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + login_access_token
                }
            })
            .then((response) => response.json())
            .then((responseJson) => {
                resultArray = resultArray.concat(responseJson)
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(resultArray),
                    currentPage: this.state.currentPage + 1,
                    isLoadingTail: false,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    renderRow(rowData) {
        return (
            <TouchableOpacity style={styles.filter} onPress={() => this.choosenProduct(rowData)}>
                <View style={styles.productImage}>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={require('./../../images/easy_product.png')}
                    />
                </View>
                <View style={{ flex: 1, paddingTop: 10 }}>
                    <View style={styles.label}>
                        <Text>{rowData.ProductName}</Text>
                        <View style={styles.discount}>
                            <Text>Thuế: 0%</Text>
                        </View>
                    </View>
                    <View style={styles.label}>
                        <View style={styles.discount}>
                            <Text>CK: 0%</Text>
                        </View>
                    </View>
                    <View style={styles.label}>
                        <Text>
                            Có thể bán: {rowData.QuantityPerUnit}
                        </Text>
                        <View style={styles.discount}>
                            <Text>{rowData.UnitPrice} đ</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.search}>
                    <View>
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder='Tìm kiếm khách hàng'
                            placeholderTextColor='#d8d8d8'
                            autoFocus={true}
                            value={this.state.txtSearch}
                            onChange={this.onTextSearchChange.bind(this)}
                        />
                    </View>
                </View>
                <ListView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                        />
                    }
                    onEndReached={this._onEndReached.bind(this)}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
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
        borderBottomWidth: 0.5,
        borderColor: '#d6d7da',
        marginTop: 5,
        flexDirection: 'row'

    },
    search: {
        backgroundColor: '#f8f8ff',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        paddingLeft: 10,
    },
    price: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    label: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10
    },
    status: {
        color: '#0fb80f'
    },
    productImage: {
        width: 70,
        height: 50,
        paddingTop: 20
    },
    discount: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 10
    }
});
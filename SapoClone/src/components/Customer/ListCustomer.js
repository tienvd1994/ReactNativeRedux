import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    ListView,
    ActivityIndicator,
    RefreshControl,
    AsyncStorage
} from 'react-native';

import { LOGIN_ACCESS_TOKEN } from './../../constants/AsyncStoregeName';

let resultArray = [];

export default class ListCustomer extends Component {
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

    async componentDidMount() {
        const login_access_token = await AsyncStorage.getItem(LOGIN_ACCESS_TOKEN);

        return fetch('http://192.168.100.200:88/api/Customers?keyword=' + this.state.txtSearch + '&pageIndex=' + this.state.currentPage + '&pageSize=20',
            {
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
                }, function () {

                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    choosenCustomer(rowData) {
        this.props.navigation.navigate('CreateOrder', { customer: rowData });
    }

    renderRow(rowData) {
        return (
            <TouchableOpacity style={styles.filter} onPress={() => this.choosenCustomer(rowData)}>
                <View style={styles.containerItem}>
                    <View style={styles.label}>
                        <Text>{rowData.ContactName}</Text>
                        <Text style={styles.silver}>{rowData.Phone}</Text>
                    </View>
                    <View style={styles.price}>
                        <Text style={styles.status}>ĐANG GIAO HÀNG</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    async  _onRefresh() {
        const login_access_token = await AsyncStorage.getItem(LOGIN_ACCESS_TOKEN);

        fetch('http://192.168.100.200:88/api/Customers?keyword=' + this.state.txtSearch + '&pageIndex=1&pageSize=20',
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
        if (this.state.isLoadingTail) {
            return;
        }

        this.setState({
            isLoadingTail: true,
        });

        const login_access_token = await AsyncStorage.getItem(LOGIN_ACCESS_TOKEN);

        fetch('http://192.168.100.200:88/api/Customers?keyword=' + this.state.txtSearch + '&pageIndex=' + (this.state.currentPage + 1) + '&pageSize=20',
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

    renderFooter = () => {
        if (!this.state.isLoadingTail) {
            return <View style={styles.scrollSpinner} />;
        }

        return <ActivityIndicator style={styles.scrollSpinner} />;
    }

    onTextSearchChange(event) {
        let txtSearch = event.nativeEvent.text;
        this.setState({ txtSearch });

        return fetch('http://192.168.100.200:88/api/Customers?keyword=' + this.state.txtSearch + '&pageIndex=1&pageSize=20')
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

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loadIcon}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <View style={styles.search}>
                    <View>
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder='Tìm kiếm khách hàng'
                            placeholderTextColor='#d8d8d8'
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
                    automaticallyAdjustContentInsets={false}
                    keyboardDismissMode="on-drag"
                    showsVerticalScrollIndicator={false}
                    enableEmptySections={true}
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
        flexDirection: 'row',

    },
    search: {
        backgroundColor: '#f8f8ff',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        paddingLeft: 10,
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
    },
    // scrollSpinner: {
    //     marginVertical: 20,
    // },
    silver: {
        color: '#a9a9a9'
    },
    loadIcon: {
        flex: 1,
        paddingTop: 20
    },
    containerItem: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        borderColor: '#d6d7da'
    }
});
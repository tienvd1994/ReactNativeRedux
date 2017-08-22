import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    AsyncStorage
} from 'react-native';

import { LOGIN_ACCESS_TOKEN } from './../constants/AsyncStoregeName';
import { DASHBOARD } from './../constants/NavigatorName';

export default class Default extends Component {
    async componentWillMount() {
        const login_access_token = await AsyncStorage.getItem(LOGIN_ACCESS_TOKEN);

        if (login_access_token !== undefined) {
            this.props.navigation.navigate(DASHBOARD);
            return;
        }
        else {
            this.props.navigation.navigate('Login');
            return;
        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#f8f8ff' }}>
                <View style={{ borderWidth: 0.5, borderColor: '#d6d7da', padding: 10 }}>
                    <Text>Phần mềm quản lý bán hàng</Text>
                </View>
            </View>
        )
    }
}
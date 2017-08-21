import React, { Component } from 'react';
import {
    Text,
    Button,
    View,
    TextInput,
    AsyncStorage
} from 'react-native';

import { LOGIN_ACCESS_TOKEN } from './../../constants/AsyncStoregeName';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    async componentWillMount() {
        const login_access_token = await AsyncStorage.getItem(LOGIN_ACCESS_TOKEN);

        if (login_access_token !== undefined) {
            this.props.navigation.navigate('Dashboard');
            return;
        }
    }

    async _onValueChange(item, selectedValue) {
        try {
            await AsyncStorage.setItem(item, selectedValue);
        } catch (error) {
            console.log('AsyncStorage error: ' + error.message);
        }
    }

    _onLogin() {
        if (this.state.username === '' || this.state.password === '') {
            return;
        }

        fetch('http://192.168.100.200:88/Token', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: `grant_type=password&username=${this.state.username}&password=${this.state.password}`
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this._onValueChange(LOGIN_ACCESS_TOKEN, responseJson.access_token);
                this.props.navigation.navigate('Dashboard');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <View>
                <View>
                    <Text>Đăng nhập</Text>
                </View>
                <View>
                    <TextInput
                        underlineColorAndroid='transparent'
                        placeholder='Tên đăng nhập'
                        value={this.state.username}
                        onChangeText={(value) => this.setState({ username: value })}
                    />
                    <TextInput
                        underlineColorAndroid='transparent'
                        placeholder='Mật khẩu'
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={(value) => this.setState({ password: value })}
                    />
                </View>
                <View>
                    <Button onPress={this._onLogin.bind(this)} title="Đăng nhập" />
                </View>
            </View>
        )
    }
}

export default Login;
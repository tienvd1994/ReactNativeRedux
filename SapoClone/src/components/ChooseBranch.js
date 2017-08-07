import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class ChooseBranch extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#f8f8ff' }}>
                <View style={{ borderWidth: 0.5, borderColor: '#d6d7da', padding: 10 }}>
                    <Text>Chi nhánh Hà Đông.</Text>
                </View>
            </View>
        )
    }
}
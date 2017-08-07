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
    TextInput,
    Picker
} from 'react-native';

export default class AddCustomer extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.filter}>
                    <View style={styles.wrapperControl}>
                        <Text style={styles.labelControl}>Tên khách hàng</Text>
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder='Nhập tên khách hàng'
                            placeholderTextColor='red'
                        />
                    </View>
                    <View style={styles.wrapperControl}>
                        <Text style={styles.labelControl}>Mã khách hàng</Text>
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder='Nhập mã khách hàng'
                            placeholderTextColor='#a9a9a9'
                        />
                    </View>
                    <View style={styles.wrapperControl}>
                        <Text style={styles.labelControl}>Nhóm khách hàng</Text>
                        <Picker
                            selectedValue={''}
                            style={{ borderWidth: 0.5, borderColor: '#d6d7da' }}
                            mode='dropdown'
                            onValueChange={(itemValue, itemIndex) => console.log(itemValue)}>
                            <Picker.Item label="" value="" />
                            <Picker.Item label="Vip" value="vip" />
                            <Picker.Item label="Bán buôn" value="banbuon" />
                            <Picker.Item label="Bán lẻ" value="banle" />
                        </Picker>
                    </View>
                    <View style={styles.wrapperControl}>
                        <Text style={styles.labelControl}>Mã số thuế</Text>
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder='Nhập mã số thuế'
                            placeholderTextColor='#a9a9a9'
                            keyboardType='numeric'
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.labelControl}>Thẻ</Text>
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder='Nhập thẻ'
                            placeholderTextColor='#a9a9a9'
                        />
                    </View>
                </View>
                <View style={{ marginLeft: 8, marginTop: 8 }}>
                    <Text style={{ color: '#a9a9a9' }}>THONG TIN LIEN HE</Text>
                </View>
                <View style={styles.filter}>
                    <View style={styles.wrapperControl}>
                        <Text style={styles.labelControl}>Điện thoại</Text>
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder='Nhập số điện thoại'
                            placeholderTextColor='red'
                            keyboardType='numeric'
                        />
                    </View>
                    <View style={styles.wrapperControl}>
                        <Text style={styles.labelControl}>Fax</Text>
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder='Nhập số fax'
                            placeholderTextColor='#a9a9a9'
                            keyboardType='numeric'
                        />
                    </View>
                    <View style={styles.wrapperControl}>
                        <Text style={styles.labelControl}>Website</Text>
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder='Nhập website'
                            placeholderTextColor='#a9a9a9'
                        />
                    </View>
                    <View style={styles.wrapperControl}>
                        <Text style={styles.labelControl}>Email</Text>
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder='Nhập email'
                            placeholderTextColor='#a9a9a9'
                        />
                    </View>
                    <View style={styles.wrapperControl}>
                        <Text style={styles.labelControl}>Địa điểm</Text>
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder='Nhập địa điểm'
                            placeholderTextColor='red'
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.labelControl}>Địa chỉ</Text>
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder='Nhập địa chỉ'
                            placeholderTextColor='red'
                        />
                    </View>
                </View>
                <View style={{ marginLeft: 8, marginTop: 8 }}>
                    <Text style={{ color: '#a9a9a9' }}>CHINH SACH</Text>
                </View>
                <View style={styles.filter}>
                    <View style={styles.wrapperControl}>
                        <Text style={styles.labelControl}>Người phụ trách</Text>
                        <Picker
                            selectedValue={''}
                            style={{ borderWidth: 0.5, borderColor: '#d6d7da' }}
                            mode='dropdown'
                            onValueChange={(itemValue, itemIndex) => console.log(itemValue)}>
                            <Picker.Item label="Chọn người phụ trách" value="" />
                            <Picker.Item label="Vip" value="vip" />
                            <Picker.Item label="Bán buôn" value="banbuon" />
                            <Picker.Item label="Bán lẻ" value="banle" />
                        </Picker>
                    </View>
                    <View style={styles.wrapperControl}>
                        <Text style={styles.labelControl}>Giá mặc định</Text>
                        <Picker
                            selectedValue={''}
                            style={{ borderWidth: 0.5, borderColor: '#d6d7da' }}
                            mode='dropdown'
                            onValueChange={(itemValue, itemIndex) => console.log(itemValue)}>
                            <Picker.Item label="Chọn giá mặc định" value="" />
                            <Picker.Item label="Giá bán lẻ" value="vip" />
                            <Picker.Item label="Bán nhập" value="banbuon" />
                            <Picker.Item label="Giá bán buôn" value="banle" />
                        </Picker>
                    </View>
                    <View style={styles.wrapperControl}>
                        <Text style={styles.labelControl}>Thuế mặc định</Text>
                        <Picker
                            selectedValue={''}
                            style={{ borderWidth: 0.5, borderColor: '#d6d7da' }}
                            mode='dropdown'
                            onValueChange={(itemValue, itemIndex) => console.log(itemValue)}>
                            <Picker.Item label="Chọn thuế mặc định" value="" />
                            <Picker.Item label="Thuế nhập hàng" value="vip" />
                            <Picker.Item label="Không áp dụng thuế" value="banbuon" />
                            <Picker.Item label="Thuế bán hàng" value="banle" />
                        </Picker>
                    </View>
                    <View style={styles.wrapperControl}>
                        <Text style={styles.labelControl}>Chiết khấu</Text>
                        <TextInput
                            keyboardType='numeric'
                            underlineColorAndroid='transparent'
                            placeholder='0'
                            placeholderTextColor='#a9a9a9'
                        />
                    </View>
                    <View style={styles.wrapperControl}>
                        <Text style={styles.labelControl}>Kỳ hạn thanh toán</Text>
                        <Picker
                            selectedValue={''}
                            style={{ borderWidth: 0.5, borderColor: '#d6d7da' }}
                            mode='dropdown'
                            onValueChange={(itemValue, itemIndex) => console.log(itemValue)}>
                            <Picker.Item label="Chọn kỳ hạn thanh toán" value="" />
                            <Picker.Item label="Thanh toán trong 1 tháng" value="vip" />
                            <Picker.Item label="Thanh toán trong 1 tuần" value="banbuon" />
                            <Picker.Item label="Thanh toán ngay" value="banle" />
                        </Picker>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.labelControl}>Phương thức thanh toán</Text>
                        <Picker
                            selectedValue={''}
                            style={{ borderWidth: 0.5, borderColor: '#d6d7da' }}
                            mode='dropdown'
                            onValueChange={(itemValue, itemIndex) => console.log(itemValue)}>
                            <Picker.Item label="Chọn phương thức thanh toán" value="" />
                            <Picker.Item label="Thanh toán bằng điểm" value="vip" />
                            <Picker.Item label="COD" value="banbuon" />
                            <Picker.Item label="Chuyển khoản" value="banle" />
                            <Picker.Item label="Tiền mặt" value="banle" />
                        </Picker>
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
    wrapperControl: {
        flex: 1,
        borderBottomWidth: 0.5,
        borderColor: '#d6d7da'
    },
    labelControl: {
        color: '#0fb80f',
        fontSize: 10,
        marginTop: 5
    }
});
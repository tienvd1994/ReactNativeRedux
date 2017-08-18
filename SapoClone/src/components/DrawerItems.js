import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

export default class DrawerItems extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={{ position: 'relative' }}>
          <Image
            style={{ height: 150 }}
            source={require('./../images/tran-xuyen-sang-phong-ngu.jpg')}
          />
          <View style={{ paddingLeft: 15, paddingTop: 5, paddingBottom: 5, position: 'absolute', backgroundColor: '#0fb80f', width: '100%', bottom: 0, opacity: 0.5 }}>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Nguyễn Văn A</Text>
            <Text style={{ color: '#fff' }}>nguyenvana@gmail.com</Text>
          </View>
        </View>
        <View style={{ borderBottomWidth: 2, borderColor: '#d6d7da', paddingBottom: 20, paddingLeft: 10 }}>
          <TouchableOpacity style={styles.menu_item} onPress={() => navigate('Dashboard')}>
            <Image
              style={styles.menu_image}
              source={require('./../images/ic_home.png')}
            />
            <Text>Tổng quan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu_item} onPress={() => navigate('Sale')}>
            <Image
              style={styles.menu_image}
              source={require('./../images/ic_shopping.png')}
            />
            <Text>Bán hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu_item} onPress={() => navigate('Sale')}>
            <Image
              style={styles.menu_image}
              source={require('./../images/ic_cubes.png')}
            />
            <Text>Hàng hóa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu_item} onPress={() => navigate('Sale')}>
            <Image
              style={styles.menu_image}
              source={require('./../images/ic_customers.png')}
            />
            <Text>Khách hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu_item} onPress={() => navigate('ListCustomer')}>
            <Image
              style={styles.menu_image}
              source={require('./../images/ic_report_chart.png')}
            />
            <Text>Báo cáo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu_item} onPress={() => navigate('Sale')}>
            <Image
              style={styles.menu_image}
              source={require('./../images/icon_contact.png')}
            />
            <Text>Tài khoản</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingBottom: 20, paddingLeft: 10, paddingTop: 10 }}>
          <Text>Khác</Text>
          <TouchableOpacity style={styles.menu_item} onPress={() => navigate('Dashboard')}>
            <Image
              style={styles.menu_image}
              source={require('./../images/ic_add_account.png')}
            />
            <Text>Thêm tài khoản</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu_item} onPress={() => navigate('Sale')}>
            <Image
              style={styles.menu_image}
              source={require('./../images/exchange.png')}
            />
            <Text>Chuyển kho</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu_item} onPress={() => navigate('Sale')}>
            <Image
              style={styles.menu_image}
              source={require('./../images/ic_settings.png')}
            />
            <Text>Cài đặt</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu_item} onPress={() => navigate('Sale')}>
            <Image
              style={styles.menu_image}
              source={require('./../images/ic_logout.png')}
            />
            <Text>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  menu_item: {
    flexDirection: 'row',
    marginTop: 20,
  },
  menu_image: {
    width: 20,
    height: 20,
    marginRight: 25,
    tintColor: '#a9a9a9',
  }
});
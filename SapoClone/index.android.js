/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
  ScrollView
} from 'react-native';

import { StackNavigator, DrawerNavigator } from 'react-navigation';
import DrawerItems from './src/components/DrawerItems';
import Dashboard from './src/components/Dashboard';
import ChooseBranch from './src/components/ChooseBranch';
import Sale from './src/components/Sale';
import CreateOrder from './src/components/Order/CreateOrder';
import ListCustomer from './src/components/Customer/ListCustomer';
import AddCustomer from './src/components/Customer/AddCustomer';
import ListProduct from './src/components/Product/ListProduct';
import Payment from './src/components/Payment/Payment';
import List from './src/components/Order/List';

import CheckBox from 'react-native-check-box';
import Login from './src/components/Account/Login';

const SapoCloneStack = StackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      title: 'Sapo',
      headerTitleStyle: { color: '#fff' },
      headerLeft: <TouchableHighlight underlayColor='transparent' onPress={() => navigation.navigate('DrawerOpen')}>
        <Image
          style={{ width: 20, height: 20, marginLeft: 20 }}
          source={require('./src/images/icmenu.png')}
        />
      </TouchableHighlight>,
      headerStyle: {
        backgroundColor: '#0fb80f',
      },
    })
  },
  Branch: {
    screen: ChooseBranch,
    navigationOptions: ({ navigation }) => ({
      title: `Chọn chi nhánh`,
      headerTitleStyle: {},
      headerRight: <TouchableHighlight underlayColor='transparent' onPress={() => navigation.goBack()}>
        <Image
          style={{ width: 40, height: 40 }}
          source={require('./src/images/okay.png')}
        />
      </TouchableHighlight>,
      headerStyle: {
        backgroundColor: '#0fb80f',
      },

      // Color header include: arrow button left and text.
      headerTintColor: 'white',
    })
  },

  Sale: {
    screen: Sale,
    navigationOptions: ({ navigation }) => ({
      title: 'Bán hàng',
      headerTitleStyle: { color: '#fff', textAlign: 'center', alignSelf: 'center' },
      headerLeft: <TouchableHighlight underlayColor='transparent' onPress={() => navigation.navigate('DrawerOpen')}>
        <Image
          style={{ width: 20, height: 20, marginLeft: 20 }}
          source={require('./src/images/icmenu.png')}
        />
      </TouchableHighlight>,
      headerStyle: {
        backgroundColor: '#0fb80f',
      },
    })
  },
  // CreateOrder: {
  //   screen: CreateOrder,
  //   navigationOptions: ({ navigation }) => ({
  //     title: `Thêm mới đơn hàng`,
  //     headerTitleStyle: {},
  //     headerRight: <TouchableHighlight underlayColor='transparent' onPress={() => navigation.navigate('ListCustomer')}>
  //       <Image
  //         style={{ width: 40, height: 40 }}
  //         source={require('./src/images/easy_action_setting.png')}
  //       />
  //     </TouchableHighlight>,
  //     headerStyle: {
  //       backgroundColor: '#0fb80f',
  //     },

  //     // Color header include: arrow button left and text.
  //     headerTintColor: 'white',
  //   })
  // },
  CreateOrder: {
    screen: CreateOrder,
    navigationOptions: ({ navigation }) => ({
      header: (
        <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: 'transparent', backgroundColor: '#0fb80f', paddingTop: 5, paddingBottom: 5 }}>
          <TouchableHighlight underlayColor='transparent' onPress={() => navigation.goBack()} style={{ marginLeft: 15, marginRight: 15 }}>
            <Image
              style={{ width: 25, height: 25, tintColor: 'white' }}
              source={require('./src/images/back-icon.png')}
            />
          </TouchableHighlight>
          <View>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Thêm mới đơn hàng</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableHighlight underlayColor='transparent' onPress={() => navigation.navigate('ListCustomer')}>
              <Image
                style={{ width: 40, height: 40 }}
                source={require('./src/images/easy_scan.png')}
              />
            </TouchableHighlight>
            <TouchableHighlight underlayColor='transparent' onPress={() => navigation.navigate('ListCustomer')}>
              <Image
                style={{ width: 40, height: 40 }}
                source={require('./src/images/easy_voice.png')}
              />
            </TouchableHighlight>
            <TouchableHighlight underlayColor='transparent' onPress={() => navigation.navigate('ListCustomer')}>
              <Image
                style={{ width: 40, height: 40 }}
                source={require('./src/images/easy_action_setting.png')}
              />
            </TouchableHighlight>
          </View>
        </View>
      ),
      // Color header include: arrow button left and text.
      headerTintColor: 'white',
    })
  },
  ListCustomer: {
    screen: ListCustomer,
    navigationOptions: ({ navigation }) => ({
      title: `Danh sách khách hàng`,
      headerTitleStyle: {},
      headerRight: <TouchableHighlight underlayColor='transparent' onPress={() => navigation.navigate('AddCustomer')}>
        <Image
          style={{ width: 40, height: 40 }}
          source={require('./src/images/easy_add_new.png')}
        />
      </TouchableHighlight>,
      headerStyle: {
        backgroundColor: '#0fb80f',
      },

      // Color header include: arrow button left and text.
      headerTintColor: 'white',
    })
  },

  AddCustomer: {
    screen: AddCustomer
  },
  Payment: {
    screen: Payment,
    navigationOptions: ({ navigation }) => ({
      title: `Thanh toán`,
      headerTitleStyle: {},
      headerRight: '',
      headerStyle: {
        backgroundColor: '#0fb80f',
      },

      // Color header include: arrow button left and text.
      headerTintColor: 'white',
    })
  },
  ListProduct: {
    screen: ListProduct,
    navigationOptions: ({ navigation }) => ({
      title: `Danh sách hàng hóa`,
      headerTitleStyle: {},
      headerRight: '',
      headerStyle: {
        backgroundColor: '#0fb80f',
      },

      // Color header include: arrow button left and text.
      headerTintColor: 'white',
    })
  },
  List: {
    screen: List,
    navigationOptions: ({ navigation }) => ({
      title: `Đơn hàng`,
      headerTitleStyle: {},
      headerRight: '',
      headerStyle: {
        backgroundColor: '#0fb80f',
      },

      // Color header include: arrow button left and text.
      headerTintColor: 'white',
    })
  },
});

const SapoCloneDrawer = DrawerNavigator({
  Login: {
    screen: Login
  },
  Dashboard: {
    screen: SapoCloneStack,
  },
}, {
    // drawerWidth: 200,
    // drawerPosition: 'right',
    contentComponent: props => <ScrollView><DrawerItems {...props} /></ScrollView>
  });

AppRegistry.registerComponent('SapoClone', () => SapoCloneDrawer);

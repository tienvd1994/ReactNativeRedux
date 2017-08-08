import { StackNavigator } from 'react-navigation';

import Dashboard from './../../components/Dashboard';
import ChooseBranch from './../../components/ChooseBranch';
import Sale from './../../components/Sale';
import CreateOrder from './../../components/Order/CreateOrder';
import ListCustomer from './../../components/Customer/ListCustomer';
import AddCustomer from './../../components/Customer/AddCustomer';
import ListProduct from './../../components/Product/ListProduct';

// StackNavigator(RouteConfigs, StackNavigatorConfig)
const routeConfigs = {
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
    CreateOrder: {
        screen: CreateOrder,
        navigationOptions: ({ navigation }) => ({
            title: `Thêm mới đơn hàng`,
            headerTitleStyle: {},
            headerRight: <TouchableHighlight underlayColor='transparent' onPress={() => navigation.navigate('ListCustomer')}>
                <Image
                    style={{ width: 40, height: 40 }}
                    source={require('./src/images/easy_action_setting.png')}
                />
            </TouchableHighlight>,
            headerStyle: {
                backgroundColor: '#0fb80f',
            },

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
        screen: AddCustomer,
        navigationOptions: ({ navigation }) => ({
            title: `Thêm mới đơn hàng`,
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
}

const stackNavigatorConfig = {};

export const Stack = StackNavigator(routeConfigs, stackNavigatorConfig);
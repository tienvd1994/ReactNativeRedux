import { DrawerNavigator } from 'react-navigation';
import StackNavigation from '../stack/StackNavigation';

const routeConfiguration = {
    PremierLeague: {
        screen: StackNavigation,
    },
};

export const Drawer = DrawerNavigator(routeConfiguration);

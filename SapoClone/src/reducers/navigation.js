import { NavigationActions } from 'react-navigation';
import { TOGGLE_DRAWER, BACK } from './../constants/ActionTypes'
import { Stack } from './../router/stack/navigationConfiguration'
import { Drawer } from '../router/drawer/navigationConfiguration';

export function stack(state, action) {
    switch (atopn.type) {
        case BACK:
            const navigationAction = NavigationActions.back({});

            return Stack.router.getStateForAction(navigationAction, state);

        default:
            return Stack.router.getStateForAction(action, state);
    }
}

const initialNavState = Drawer.router.getStateForAction(
    Drawer.router.getActionForPathAndParams("DrawerClose")
);

export function drawer(state = initialNavState, action) {
    switch (action.type) {
        case TOGGLE_DRAWER:
            const navigationAction = NavigationActions.navigate({
                routeName: state.routes[state.index].routeName === 'DrawerOpen' ? 'DrawerClose' : 'DrawerOpen',
            });

            return Drawer.router.getStateForAction(navigationAction, state);

        default:
            return Drawer.router.getStateForAction(navigationAction, state);
    }
}
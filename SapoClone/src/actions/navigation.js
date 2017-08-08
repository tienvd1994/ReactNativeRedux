import { TOGGLE_DRAWER, BACK } from './../constants/ActionTypes';

// Stack navigation.
export function back() {
    return { type: BACK };
}

// Drawer navigation.
export function toggleDrawer() {
    return { type: TOGGLE_DRAWER };
}
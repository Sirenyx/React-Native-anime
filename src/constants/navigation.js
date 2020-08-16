import React from 'react';
import { black, white } from '@constants/colors';
import CustomSwitch from '@components/CustomSwitch';

export const defaultNavigationOptions = (isLightTheme) => ({
    headerStyle: {
        backgroundColor: isLightTheme ? black : white,
    },
    headerTintColor: isLightTheme ? white : black,
    headerRight: () => <CustomSwitch />
});
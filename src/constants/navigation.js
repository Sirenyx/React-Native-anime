import React from 'react';
import { black, white, lightYellow } from '@constants/colors';
import CustomSwitch from '@components/CustomSwitch';

export const defaultNavigationOptions = (isLightTheme) => ({
    headerStyle: {
        backgroundColor: isLightTheme ? black : lightYellow,
    },
    headerTintColor: isLightTheme ? white : black,
    headerRight: () => <CustomSwitch />
});
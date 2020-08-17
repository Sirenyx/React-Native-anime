import React, { useContext } from 'react';
import { Switch } from 'react-native';
import { white, violet, pink } from '@constants/colors';
import ThemeContext from '@context/themeContext';

import styles from './style';

function CustomSwitch(){
    const { toggleTheme, isLightTheme } = useContext(ThemeContext);
    return(
        <Switch
            style={styles.switch}
            trackColor={{false: violet, true: pink}}
            thumbColor={white}
            onValueChange={toggleTheme}
            value={isLightTheme}
        />
    );
}

export default CustomSwitch;
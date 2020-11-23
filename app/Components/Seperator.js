import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../config/colors';

const Seperator = () => {
    return (
        <View style={styles.seperator} />
    );
}

const styles = StyleSheet.create({
    seperator: {
        backgroundColor: colors.grey,
        height: 1,
        width: "100%",
    }
})

export default Seperator;
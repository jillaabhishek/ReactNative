import React from 'react';
import {View, Text, 
    SafeAreaView,
    StyleSheet,
    useColorScheme} from 'react-native';


function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={isDarkMode ?  styles.whiteText: styles.darkText}> Hello World! </Text>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      height: 600,
      alignItems: 'center',
      //flex: 1
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#FFFF00'
    }
})

export default AppPro
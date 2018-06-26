import React, {Component} from 'react';
import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';
import {
    StyleSheet,
    Image,
    NativeAppEventEmitter,
    Platform,
    Alert,
    Linking,
    View,
    AppRegistry,
    BackAndroid,
    Dimensions,
    BackHandler,
    PixelRatio,
    DeviceEventEmitter
} from "react-native";
import {connect} from 'react-redux';
import Login from '../pages/Login';
class Router extends Component {
    renderNavigator(){
        return StackNavigator(
            {
                Login: { screen: Login },
            },
            {
                initialRouteName: 'Login', // 默认显示界面
                navigationOptions: {
                    gesturesEnabled: false,
                    // headerStyle: {
                    //     // elevation: 0,
                    //     height: scaleSize(98),
                    // },
                    // headerTitleStyle: {
                    //     fontSize: scaleSize(36),
                    // },
                },
            });
    }
    render(){
        const AppNavigator = this.renderNavigator();
        return (
            <AppNavigator/>
        )
    }
}
function mapStateToProps(state) {
    return {};
}
export default connect(mapStateToProps)(Router);


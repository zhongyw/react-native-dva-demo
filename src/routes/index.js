import React, {Component} from 'react';
import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';

import {connect} from 'react-redux';
import Login from '../pages/Login';
import Home from '../pages/Home';
class Router extends Component {
    renderNavigator(){
        return StackNavigator(
            {
                Login: { screen: Login },
                Home: { screen: Home }
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


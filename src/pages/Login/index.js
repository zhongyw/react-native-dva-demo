import React, {Component, PureComponent} from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Button
} from "react-native";

import {connect} from "react-redux";

class Login extends Component {
    static navigationOptions = {
        header: null
    };
    doLogin = (username, password)=>{

    }
    render(){
        return (
            <View>

                <View>
                    <TextInput/>
                </View>
                <View>
                    <TextInput/>
                </View>
                <TouchableOpacity style={{alignItems: 'center'}}>
                    <Text>登录</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        app: state.app
    }
}
export default connect(mapStateToProps)(Login);
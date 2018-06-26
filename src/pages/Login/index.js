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
        const { dispatch } = this.props;
        /**
         * 在组件中dispatch action
         * 一定要写namespace
         */
        dispatch({
            type: `app/login`,
            payload: {
                data: {
                    username: username,
                    password: password,
                },
                callback: (result)=>{
                    if(!result.status){
                        return;
                    }

                }
            }
        })
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
                <TouchableOpacity onPress={()=>{
                    this.doLogin('zyw', '1111')
                    this.props.navigation.navigate('Home')
                }} style={{alignItems: 'center'}}>
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
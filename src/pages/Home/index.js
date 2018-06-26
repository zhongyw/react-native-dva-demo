import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';


class Home extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }


    render() {
        return (
            <View>
                <Text>Home</Text>
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(Home);

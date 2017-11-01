import React from "react";
import {StyleSheet, View, Image} from "react-native";
import {Actions} from "react-native-router-flux";
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Form,
    Item,
    Input,
    Label
} from "native-base"

export default class LoginPageComponent extends React.Component {

    state = {
        username: '',
        password: ''
    };

    _handleLogin = () => {
        this.props.tokenAttempt(this.state);
    }

    _handleSignup = () => {
        Actions.push('signup')
    }

    render() {
        return (
            <View style={styles.loginbg}>
                <Image source={require('../images/logo-small.png')} style={styles.spacing1}/>
                <Form>
                    <Item regular style={styles.spacing}>
                        <Input
                            name="username"
                            onChangeText={username => this.setState({username: username.toLowerCase()})}
                            value={this.state.username}
                            placeholder='username'
                            style={styles.inputs}
                        />
                    </Item>
                    <Item regular style={styles.spacing}>
                        <Input
                            name="password"
                            onChangeText={password => this.setState({password: password.toLowerCase()})}
                            value={this.state.password}
                            placeholder='password'
                            style={styles.inputs}
                            secureTextEntry={true}

                        />
                    </Item>
                    <Button dark onPress={this._handleLogin} style={styles.spacing}>
                        <Text style={styles.buttonText}>
                            LOGIN
                        </Text>
                        <Icon name='md-arrow-forward' style={styles.icon}/>
                    </Button>
                    <Text style={styles.prompt}>
                        Don't have an account yet?
                    </Text>
                    <Button light onPress={this._handleSignup} style={styles.spacing}>
                        <Text style={styles.buttonTextTwo}>
                            CLICK HERE TO SIGNUP
                        </Text>
                    </Button>
                </Form>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginbg: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#c90000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    spacing: {
        flexDirection: 'row',
        width: 300,
        marginBottom: 25,
    },
    spacing1: {
        marginBottom: 30,
        marginTop: 30,
    },
    inputs: {
        backgroundColor: 'white'
    },
    prompt: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 30,
        marginBottom: 10,
        color: 'white'
    },
    buttonTextTwo: {
        textAlign: 'center',
        letterSpacing: 4
    }
});


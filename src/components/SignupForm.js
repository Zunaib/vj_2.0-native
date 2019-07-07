import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

import startSignUp from '../screens/startSignUp/startSignUp';

import Input from '../components/UI/DefaultInput/DefaultInput';

import validate from '../utility/validation';

import { connect } from 'react-redux';
import { } from '../store/actions/index'

class SignUp extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        controls: {
            username: {
                value: "",
                valid: false,
                validationRules: {
                    required: true,
                    maxLength: 15,
                    minLength: 5,
                },
                touched: false
            },
            email: {
                value: "",
                valid: false,
                validationRules: {
                    isEmail: true
                },
                touched: false
            },
            password: {
                value: "",
                valid: false,
                validationRules: {
                    minLength: 6
                },
                touched: false
            }
        }
    }


    signupHandler = () => {
        startSignUp();
    }

    updateInputState = (key, value) => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    [key]: {
                        ...prevState.controls[key],
                        value: value,
                        valid: validate(
                            value,
                            prevState.controls[key].validationRules,
                        ),
                        touched: true
                    },
                }
            };
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Input style={styles.inputBox}
                    placeholder="Username"
                    placeholderTextColor="#ffffff"
                    selectionColor="#fff"
                    keyboardType="default"
                    value={this.state.controls.username.value}
                    valid={this.state.controls.username.valid}
                    touched={this.state.controls.username.touched}
                    onChangeText={(val) => this.updateInputState("username", val)}
                />
                <Input style={styles.inputBox}
                    placeholder="Email"
                    placeholderTextColor="#ffffff"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    value={this.state.controls.email.value}
                    valid={this.state.controls.email.valid}
                    touched={this.state.controls.email.touched}
                    onChangeText={val => this.updateInputState("email", val)}
                />
                <Input style={styles.inputBox}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                    value={this.state.controls.password.value}
                    valid={this.state.controls.password.valid}
                    touched={this.state.controls.password.touched}
                    onChangeText={(val) => this.updateInputState("password", val)}
                />
                <TouchableOpacity style={styles.button} onPress={this.signupHandler}
                    disabled={
                        !this.state.controls.email.valid ||
                        !this.state.controls.username.valid ||
                        !this.state.controls.password.valid
                    }
                >
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputBox: {
        width: 300,
        backgroundColor: '#BA68C8',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10
    },
    button: {
        width: 200,
        backgroundColor: '#6A1B9A',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }

});

const mapDispatchToProps = dispatch => {
    return {
        onSignUp: (signUpData) => dispatch(trysignup(signUpData))
    }
}


export default connect(null, mapDispatchToProps)(SignUp);
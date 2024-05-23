import React, { useState } from 'react';
import { Image, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Input, Icon } from 'react-native-elements';

export default function Login() {
    const [email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [SenhaVisivel, setSenhaVisivel] = useState(false);
    const [emailError, setEmailErro] = useState('');
    const [SenhaError, setSenhaErro] = useState('');

    const validarEmail = (email : string) => {
        if (!email.includes('@')) {
            setEmailErro('O email deve conter @');
        } else {
            setEmailErro('');
        }
    };

    const validaSenha = (Senha: string) => {
        if (Senha.length < 10) {
            setSenhaErro('A senha deve ter pelo menos 10 caracteres');
        } else {
            setSenhaErro('');
        }
    };

    const handleEmailChange = (value:string) => {
        setEmail(value);
        validarEmail(value);
    };

    const handleSenhaChange = (value:string) => {
        if (value.length <= 10) {
            setSenha(value);
            validaSenha(value);
        }
    };

    const toggleSenhaVisibility = () => {
        setSenhaVisivel(!SenhaVisivel);
    };

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.header}>
                    <Image style={styles.logo} source={require('../assets/images/Sesi.jpg')} />
                </View>
                <View style={styles.body}>
                    <Input 
                        style={styles.input} 
                        placeholder="Email" 
                        value={email}
                        onChangeText={handleEmailChange}
                        leftIcon={<Icon name="email" type="material" />} 
                        errorMessage={emailError}
                        containerStyle={emailError ? styles.errorInputContainer : null}
                    />
                    <Input 
                        style={styles.input} 
                        placeholder="Senha" 
                        value={Senha}
                        onChangeText={handleSenhaChange}
                        secureTextEntry={!SenhaVisivel}
                        leftIcon={<Icon name="lock" type="material" />}
                        rightIcon={
                            <Icon 
                                name={SenhaVisivel ? "visibility-off" : "visibility"} 
                                type="material" 
                                onPress={toggleSenhaVisibility} 
                            />
                        }
                        errorMessage={SenhaError}
                        containerStyle={SenhaError ? styles.errorInputContainer : null}
                        maxLength={10}
                    />
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Cadastre-se</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dcdcdc'
    },
    main: {
        width: 300,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    body: {
        alignItems: 'center',
        marginBottom: 20,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    logo: {
        width: 150,
        height: 50,
        resizeMode: 'contain',
    },
    input: {
        width: '100%',
        marginBottom: 20,
    },
    button: {
        padding: 10,
        backgroundColor: '#007BFF',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    errorInputContainer: {
        borderColor: 'red',
    },
});
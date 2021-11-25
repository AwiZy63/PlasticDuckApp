import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Footer from '../components/Footer'
import { Input, Center, NativeBaseProvider, extendTheme, FormControl, Stack, TextArea, Button } from "native-base"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import * as Joi from 'react-native-joi'

const { width } = Dimensions.get('window');

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);
    /* Errors */
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const formSchema = Joi.object().keys({
        username: Joi.string().min(3).max(24).required(),
        password: Joi.string().min(6).required(),
    })

    const theme = extendTheme({
        colors: {
            // Add new color
            primary: {
                50: '#FFC213',
                100: '#FFC213',
                200: '#FFC213',
                300: '#FFC213',
                400: '#FFC213',
                500: '#FFC213',
                600: '#FFC213',
                700: '#FFC213',
                800: '#FFC213',
                900: '#FFC213',
            },
            // Redefinig only one shade, rest of the color will remain same.
            amber: {
                400: '#FFC213',
            },
        },
        config: {
            // Changing initialColorMode to 'dark'
            initialColorMode: 'light',
        },
    });

    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsSubmitting(true);

        const strongPassword = strongRegex.test(password);

        if (!username) {
            return (
                setIsSubmitting(false),
                setUsernameError(true)
            )   
        } else {
            setUsernameError(false)
        }
            if (strongPassword) {
                const data = {
                    username: username,
                    password: password
                }
                
                const validation = Joi.validate(data, formSchema);
                
                validation.error && validation.error.message.match('username') ? setUsernameError(true) : setUsernameError(false)
                validation.error && validation.error.message.match('^password') ? setPasswordError(true) : setPasswordError(false)
                
                if (!validation.error) {
                    console.log("OK");
                    setIsSubmitting(false)
                } else {
                    console.log("Veuillez remplir les champs requis");
                    setIsSubmitting(false)
                }
            } else {
                setPasswordError(true)
                console.log("Le mot de passe n'est pas sécurisé");
                setIsSubmitting(false)
        }

    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }


    const formItem = ({
        isRequired: isRequired,
        inputLabel: inputLabel,
        inputType: inputType,
        inputPlaceholder: inputPlaceholder,
        inputErrorMessage: inputErrorMessage,
        errorType: errorType,
        getterState: getterState,
        setterState: setterState,
        isPasswordField: isPasswordField
    }) => {
        return (
            <FormControl style={styles.formController} isRequired={isRequired} isInvalid={errorType}>
                <FormControl.Label
                    _text={{ fontFamily: 'Agency FB', fontSize: width * 0.05, color: 'white' }}
                    style={styles.inputLabel}>{inputLabel}</FormControl.Label>
                <Input
                    type={isPasswordField ? showPassword ? "text" : "password" : inputType}
                    value={getterState}
                    focusBorderColor={"#FFC213"}
                    variant="underlined"
                    placeholder={inputPlaceholder}
                    style={styles.formInput}
                    placeholderTextColor={'rgba(150, 150, 150, 0.5)'}
                    color={'white'}
                    bgColor={'#2C2C2C'}
                    onChangeText={(event) => { setterState(event) }}
                    _light={{ borderColor: 'transparent' }}
                    _dark={{ borderColor: 'transparent' }}
                    InputRightElement={isPasswordField ?
                        <Button style={styles.showButton} rounded="none" h="full" onPress={handleShowPassword}>
                            {showPassword ? <FontAwesomeIcon icon={faEyeSlash} color={'white'} size={width * 0.04} /> : <FontAwesomeIcon icon={faEye} color={'white'} size={width * 0.04} />}
                        </Button>
                        : null
                    }
                />
                {isPasswordField ?
                    <FormControl.HelperText>
                        Rappel : Votre mot de passe contient au minimum 6 caractères, 1 majuscule et 1 chiffre.
                    </FormControl.HelperText>
                    : null}
                <FormControl.ErrorMessage>{inputErrorMessage}</FormControl.ErrorMessage>
            </FormControl>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NativeBaseProvider theme={theme}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.imageContainer}>
                        <Image resizeMode={"center"} source={require('../assets/plasticduck/logo_big.png')} style={styles.image} />
                    </View>
                    <View style={styles.formContainer}>

                        {formItem({
                            isRequired: true,
                            inputLabel: "Nom d'utilisateur",
                            inputType: "text",
                            inputPlaceholder: "Entrez ici votre nom d'utilisateur",
                            inputErrorMessage: "Veuillez entrer un nom d'utilisateur valide.",
                            errorType: usernameError,
                            getterState: username,
                            setterState: setUsername
                        })}

                        {formItem({
                            isRequired: true,
                            inputLabel: "Mot de passe",
                            inputType: "password",
                            inputPlaceholder: "Entrez ici votre mot de passe",
                            inputErrorMessage: "Veuillez renseigner un mot de passe valide.",
                            errorType: passwordError,
                            getterState: password,
                            setterState: setPassword,
                            isPasswordField: true
                        })}


                    </View>
                </ScrollView>
                <Button
                    _text={{ fontFamily: 'Agency FB Bold', fontSize: width * 0.03 }}
                    style={styles.signupButton}
                    onPress={() => navigation.navigate('Register')}
                >Pas encore inscrit ? Cliquez ici.</Button>
                <Button
                    _text={{ fontFamily: 'Agency FB Bold', fontSize: width * 0.05 }}
                    style={styles.submitButton}
                    isLoading={isSubmitting}
                    spinnerPlacement="end"
                    isLoadingText="CONNEXION EN COURS..."
                    onPressIn={(event) => handleSubmit(event)}>
                    SE CONNECTER
                </Button>
                <Footer />
            </NativeBaseProvider>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        height: width * 0.5
    },
    image: {
        width: width * 0.4,
        height: width * 0.5
    },
    formContainer: {
        flex: 1,
        alignItems: 'center'
    },
    formController: {
        width: width * 0.9,
        marginTop: width * 0.02,
        marginBottom: width * 0.005
    },
    formInput: {
        width: width * 0.9,
        height: width * 0.09,
        fontFamily: 'Agency FB',
        fontSize: width * 0.04,
        borderRadius: 2,
        borderBottomWidth: width * 0.005,
    },
    inputLabel: {
        fontFamily: 'Agency FB'
    },
    submitButton: {
        backgroundColor: '#BC8E0B',
        borderRadius: 0
    },
    signupButton: {
        width: width * 0.5,
        alignSelf: 'center',
        backgroundColor: 'transparent',
        marginBottom: width * 0.02
    },
    showButton: {
        width: width * 0.1,
        backgroundColor: '#BC8E0B'
    }
})
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, View, TextInput, SafeAreaView, Alert } from "react-native";
import Footer from '../components/Footer'

import { Input, Center, NativeBaseProvider, extendTheme, FormControl, Stack, TextArea, Button } from "native-base"
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

export default function ContactScreen() {
    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [request, setRequest] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false)
    /* Errors */
    const [lastnameError, setLastnameError] = useState(false)
    const [firstnameError, setFirstnameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [requestError, setRequestError] = useState(false)

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

    const separator = (title) => {
        return (
            <View style={styles.separatorContainer}>
                <View style={styles.separatorBanner}>
                    <Text style={styles.separatorText}>{title}</Text>
                    <View style={styles.rightTriangle}></View>
                </View>
            </View>
        )
    }

    const sendRequest = () => {
        console.log([
            lastname,
            firstname,
            email,
            phone ? phone : null,
            request
        ])
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsSubmitting(true);

        !lastname || !String(lastname) ? (setLastnameError(true), console.log("Veuillez renseigner votre nom")) : setLastnameError(false)
        !firstname || !String(firstname) ? (setFirstnameError(true), console.log("Veuillez renseigner votre prenom")) : setFirstnameError(false)
        !email || !String(email) ? (setEmailError(true), console.log("Veuillez renseigner votre email")) : setEmailError(false)
        !request || !String(request) ? (setRequestError(true), console.log("Veuillez renseigner votre telephone")) : setRequestError(false)
        phone && !Number(phone) ? (setPhoneError(true), console.log("Veuillez renseigner votre telephone")) : setPhoneError(false)



        if ((lastname) && (firstname) && (email) && (request)) {
            if (phone && !Number(phone)) {
                console.log("Veuillez remplir les champs requis");
                setIsSubmitting(false)
            } else {
                sendRequest()
                setIsSubmitting(false)
            }
        } else {
            console.log("Veuillez remplir les champs requis");
            setIsSubmitting(false)
        }
    };


    const formItem = ({
        isRequired: isRequired,
        inputLabel: inputLabel,
        inputType: inputType,
        inputPlaceholder: inputPlaceholder,
        inputErrorMessage: inputErrorMessage,
        errorType: errorType,
        getterState: getterState,
        setterState: setterState
    }) => {
        return (
            <FormControl style={styles.formController} isRequired={isRequired} isInvalid={errorType}>
                <FormControl.Label
                    _text={{ fontFamily: 'Agency FB', fontSize: width * 0.05, color: 'white' }}
                    style={styles.inputLabel}>{inputLabel}</FormControl.Label>
                <Input
                    type={inputType}
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
                />
                <FormControl.ErrorMessage>{inputErrorMessage}</FormControl.ErrorMessage>
            </FormControl>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NativeBaseProvider theme={theme}>
                <ScrollView>
                    {separator("QUELLE EST VOTRE DEMANDE ?")}

                    <View style={styles.contactContainer}>

                        {formItem({
                            isRequired: true,
                            inputLabel: "Nom",
                            inputType: "text",
                            inputPlaceholder: "Entrez ici votre nom",
                            inputErrorMessage: "Veuillez renseigner un nom valide.",
                            errorType: lastnameError,
                            getterState: lastname,
                            setterState: setLastname
                        })}
                        {formItem({
                            isRequired: true,
                            isInvalid: false,
                            inputLabel: "Prénom",
                            inputType: "text",
                            inputPlaceholder: "Entrez ici votre prénom",
                            inputErrorMessage: "Veuillez renseigner un prénom valide.",
                            errorType: firstnameError,
                            getterState: firstname,
                            setterState: setFirstname
                        })}
                        {formItem({
                            isRequired: true,
                            inputLabel: "Email",
                            inputType: "email",
                            inputPlaceholder: "Entrez ici votre email",
                            inputErrorMessage: "Veuillez renseigner un email valide.",
                            errorType: emailError,
                            getterState: email,
                            setterState: setEmail
                        })}
                        {formItem({
                            isRequired: false,
                            inputLabel: "Téléphone",
                            inputType: "number",
                            inputPlaceholder: "Entrez ici votre numéro de téléphone (facultatif)",
                            inputErrorMessage: "Veuillez renseigner un numéro de téléphone valide.",
                            errorType: phoneError,
                            getterState: phone,
                            setterState: setPhone
                        })}


                        <FormControl style={styles.formController} isRequired={true} isInvalid={requestError}>
                            <FormControl.Label
                                _text={{ fontFamily: 'Agency FB', fontSize: width * 0.05, color: 'white' }}
                                style={styles.inputLabel}>Demande</FormControl.Label>
                            <TextArea
                                h={20}
                                style={styles.formTextArea}
                                value={request}
                                variant="underlined"
                                placeholder="Entrez ici votre demande"
                                placeholderTextColor={'rgba(150, 150, 150, 0.5)'}
                                color={'white'}
                                bgColor={'#2C2C2C'}
                                _light={{ borderColor: 'transparent' }}
                                onChangeText={(event) => { setRequest(event) }}
                                w={{
                                    base: "90%",
                                    md: "25%",
                                }}
                            />
                            <FormControl.ErrorMessage>Veuillez renseignez votre demande.</FormControl.ErrorMessage>
                        </FormControl>

                    </View>
                </ScrollView>
                <Button
                    _text={{ fontFamily: 'Agency FB Bold', fontSize: width * 0.05 }}
                    style={styles.submitButton}
                    isLoading={isSubmitting}
                    spinnerPlacement="end"
                    isLoadingText="ENVOI EN COURS..."
                    onPressIn={(event) => handleSubmit(event)}>
                    ENVOYER
                </Button>
                <Footer />
            </NativeBaseProvider>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    separatorContainer: {
        height: width * 0.06,
        position: 'relative',
        marginTop: width * 0.05,
    },
    separatorBanner: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: 0
    },
    separatorText: {
        fontFamily: 'Agency FB',
        paddingHorizontal: 10,
        backgroundColor: '#BC8E0B',
        color: '#FFFFFF',
        fontSize: width * 0.05,
        flexShrink: 1
    },
    rightTriangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: width * 0.045,
        borderTopWidth: width * 0.061,
        borderRightColor: 'transparent',
        borderTopColor: '#BC8E0B',
        position: 'absolute',
        transform: [
            { translateX: (width * 0.044) }
        ],
        position: 'absolute',
        right: 0
    },
    contactContainer: {
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
    formTextArea: {
        width: width * 0.9,
        height: width * 0.4,
        fontFamily: 'Agency FB',
        fontSize: width * 0.04,
        borderRadius: 2,
        borderBottomWidth: width * 0.006,
    },
    submitButton: {
        backgroundColor: '#BC8E0B',
        borderRadius: 0
    }
})
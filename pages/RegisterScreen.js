import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Footer from '../components/Footer'
import { Input, Center, NativeBaseProvider, extendTheme, FormControl, Stack, TextArea, Button, Select, CheckIcon } from "native-base"
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import * as Joi from 'react-native-joi'

const { width } = Dimensions.get('window');

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState(new Date(Date.now()));
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);
    /* Errors */
    const [usernameError, setUsernameError] = useState('');
    const [lastnameError, setLastnameError] = useState('');
    const [firstnameError, setFirstnameError] = useState('');
    const [genderError, setGenderError] = useState('');
    const [birthdateError, setBirthdateError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const maxDate = new Date(Date.now())
    const maxDateFormatted = `${maxDate.getMonth() + 1}/${maxDate.getDate()}/${maxDate.getFullYear() - 13}`

    const formSchema = Joi.object().keys({
        username: Joi.string().min(3).max(24).required(),
        lastname: Joi.string().min(3).required(),
        firstname: Joi.string().min(3).required(),
        gender: Joi.string().valid(['male', 'female', 'other', 'unspecified']).insensitive(),
        birthdate: Joi.date().max(maxDateFormatted).iso(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        confirmPassword: Joi.any().valid(Joi.ref('password')).required()
    })

    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})");


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setBirthdate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

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
            initialColorMode: 'dark',
        },
    });

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsSubmitting(true);

        const strongPassword = strongRegex.test(password);

        if (strongPassword) {

            const data = {
                username: username,
                lastname: lastname,
                firstname: firstname,
                gender: gender,
                birthdate: birthdate,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            }

            const validation = Joi.validate(data, formSchema);

            validation.error && validation.error.message.match('username') ? setUsernameError(true) : setUsernameError(false)
            validation.error && validation.error.message.match('lastname') ? setLastnameError(true) : setLastnameError(false)
            validation.error && validation.error.message.match('firstname') ? setFirstnameError(true) : setFirstnameError(false)
            validation.error && validation.error.message.match('gender') ? setGenderError(true) : setGenderError(false)
            validation.error && validation.error.message.match('birthdate') ? setBirthdateError(true) : setBirthdateError(false)
            validation.error && validation.error.message.match('email') ? setEmailError(true) : setEmailError(false)
            validation.error && validation.error.message.match('^password') ? setPasswordError(true) : setPasswordError(false)
            validation.error && validation.error.message.match('confirmPassword') ? setConfirmPasswordError(true) : setConfirmPasswordError(false)

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


    const formItem = ({
        isRequired: isRequired,
        inputLabel: inputLabel,
        inputType: inputType,
        inputPlaceholder: inputPlaceholder,
        inputErrorMessage: inputErrorMessage,
        errorType: errorType,
        getterState: getterState,
        setterState: setterState,
        isDisabled: isDisabled,
        isPasswordField: isPasswordField
    }) => {
        const formattedBirthdate = `${birthdate.getDate()}/${birthdate.getMonth() + 1}/${birthdate.getFullYear()}`
        return (
            <FormControl style={styles.formController} isRequired={isRequired} isInvalid={errorType}>
                <FormControl.Label
                    _text={{ fontFamily: 'Agency FB', fontSize: width * 0.05, color: 'white' }}
                    style={styles.inputLabel}>{inputLabel}</FormControl.Label>
                <Input
                    isDisabled={isDisabled}
                    type={isPasswordField ? showPassword ? "text" : "password" : inputType}
                    value={getterState === birthdate ? formattedBirthdate : getterState}
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
                {isPasswordField && isPasswordField === 'password' ?
                    <FormControl.HelperText>
                        Votre mot de passe doit contenir au minimum 6 caractères, 1 majuscule et 1 chiffre.
                    </FormControl.HelperText>
                    : isPasswordField && isPasswordField === 'confirmPassword' ?
                    <FormControl.HelperText>
                        Répétez votre mot de passe ci-dessus.
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
                            setterState: setUsername,
                            isDisabled: false
                        })}

                        {formItem({
                            isRequired: true,
                            inputLabel: "Nom",
                            inputType: "text",
                            inputPlaceholder: "Entrez ici votre nom",
                            inputErrorMessage: "Veuillez entrer un nom valide.",
                            errorType: lastnameError,
                            getterState: lastname,
                            setterState: setLastname,
                            isDisabled: false
                        })}

                        {formItem({
                            isRequired: true,
                            inputLabel: "Prénom",
                            inputType: "text",
                            inputPlaceholder: "Entrez ici votre prénom",
                            inputErrorMessage: "Veuillez entrer un prénom valide.",
                            errorType: firstnameError,
                            getterState: firstname,
                            setterState: setFirstname,
                            isDisabled: false
                        })}

                        <FormControl style={styles.formController} isRequired={true} isInvalid={genderError}>
                            <FormControl.Label
                                _text={{ fontFamily: 'Agency FB', fontSize: width * 0.05, color: 'white' }}
                                style={styles.inputLabel}>Civilité</FormControl.Label>
                            <Select
                                style={styles.formInput}
                                variant="underlined"
                                accessibilityLabel="Séléctionnez ici votre genre"
                                placeholder="Séléctionnez ici votre genre"
                                bgColor={'#2C2C2C'}
                                placeholderTextColor={'rgba(150, 150, 150, 0.5)'}
                                onChangeText={(event) => { setterState(event) }}
                                _light={{ borderBottomColor: 'transparent' }}
                                _dark={{ borderBottomColor: 'transparent' }}
                                color={'white'}
                                onValueChange={(value) => setGender(value)}
                                _actionSheetContent={{ backgroundColor: '#141414' }}
                                _selectedItem={{
                                    bg: "#BC8E0B",
                                    endIcon: <CheckIcon size={5} />
                                }}
                            >
                                <Select.Item _text={{ fontFamily: 'Agency FB', fontSize: width * 0.06 }} label="Homme" value="male" />
                                <Select.Item _text={{ fontFamily: 'Agency FB', fontSize: width * 0.06 }} label="Femme" value="female" />
                                <Select.Item _text={{ fontFamily: 'Agency FB', fontSize: width * 0.06 }} label="Autre" value="other" />
                                <Select.Item _text={{ fontFamily: 'Agency FB', fontSize: width * 0.06 }} label="Non specifié" value="unspecified" />
                            </Select>
                            <FormControl.ErrorMessage>Veuillez entrer un genre valide.</FormControl.ErrorMessage>
                        </FormControl>

                        {formItem({
                            isRequired: true,
                            inputLabel: "Date de naissance",
                            inputType: "date",
                            inputPlaceholder: "Entrez ici votre date de naissance",
                            inputErrorMessage: "Veuillez entrer une date de naissance valide.",
                            errorType: birthdateError,
                            getterState: birthdate,
                            setterState: setBirthdate,
                            isDisabled: true
                        })}
                        <Button
                            _text={{ fontFamily: 'Agency FB Bold', fontSize: width * 0.03 }}
                            style={styles.birthdateButton}
                            onPress={showDatepicker}>SÉLÉCTIONNER UNE DATE</Button>

                        {formItem({
                            isRequired: true,
                            inputLabel: "Email",
                            inputType: "email",
                            inputPlaceholder: "Entrez ici votre email",
                            inputErrorMessage: "Veuillez entrer un email valide.",
                            errorType: emailError,
                            getterState: email,
                            setterState: setEmail,
                            isDisabled: false
                        })}

                        {formItem({
                            isRequired: true,
                            inputLabel: "Mot de passe",
                            inputType: "password",
                            inputPlaceholder: "Entrez ici votre mot de passe",
                            inputErrorMessage: "Veuillez entrer un mot de passe valide.",
                            errorType: passwordError,
                            getterState: password,
                            setterState: setPassword,
                            isDisabled: false,
                            isPasswordField: 'password'
                        })}

                        {formItem({
                            isRequired: true,
                            inputLabel: "Confirmation",
                            inputType: "password",
                            inputPlaceholder: "Confirmez ici votre mot de passe",
                            inputErrorMessage: "Les mots de passe ne correspondent pas.",
                            errorType: confirmPasswordError,
                            getterState: confirmPassword,
                            setterState: setConfirmPassword,
                            isDisabled: false,
                            isPasswordField: 'confirmPassword'
                        })}


                    </View>
                </ScrollView>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={birthdate}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}
                <Button
                    _text={{ fontFamily: 'Agency FB Bold', fontSize: width * 0.03 }}
                    style={styles.signupButton}
                    onPress={() => navigation.navigate('Login')}
                >Déjà inscrit ? Connectez vous ici.</Button>
                <Button
                    _text={{ fontFamily: 'Agency FB Bold', fontSize: width * 0.05 }}
                    style={styles.submitButton}
                    isLoading={isSubmitting}
                    spinnerPlacement="end"
                    isLoadingText="INSCRIPTION EN COURS..."
                    onPressIn={(event) => handleSubmit(event)}>
                    S'INSCRIRE
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
        marginBottom: width * 0.02,
        marginTop: width * 0.02
    },
    birthdateButton: {
        backgroundColor: '#BC8E0B',
        alignSelf: 'flex-start',
        marginLeft: width * 0.05,
        borderRadius: 2
    },
    showButton: {
        width: width * 0.1,
        backgroundColor: '#BC8E0B'
    }
})
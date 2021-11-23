import React, { Component, useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
import AnimatedSplash from 'react-native-animated-splash-screen'
import App from './App'

export default function Loading() {
    const [isLoaded, setLoaded] = useState(false)
    const { width } = Dimensions.get('window');
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 2000)
    }, [])
    return (
        <AnimatedSplash
            translucent={true}
            isLoaded={isLoaded}
            logoImage={require("./assets/plasticduck/splash.png")}
            backgroundColor={"#000000"}
            logoWidth={width}
        >
            <App />
        </AnimatedSplash>
    );
}

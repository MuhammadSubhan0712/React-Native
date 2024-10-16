import { Link } from 'expo-router'; 
import React from 'react';
import { View, Text, Animated } from 'react-native';
import { useEffect, useRef } from 'react';

const Home = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;  // Initial opacity value

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, 
      duration: 5000, // Animation duration
      useNativeDriver: true, 
    }).start();
  }, [fadeAnim]);

  return (
    <>
      <View style={styles.container}>
        <Animated.Text style={[styles.heading, { opacity: fadeAnim }]}>
          👋 Welcome to the React Native World with Subhan 😊 
        </Animated.Text>
        
        <View style={styles.navContainer}>
        <Link href={""} style={styles.link}>
            🏠 Home
          </Link>
          <Link href={"about"} style={styles.link}>
            📝 About
          </Link>
          <Link href={"services"} style={styles.link}>
            💼 Services
          </Link>
          <Link href={"contact"} style={styles.link}>
            ✉️ Contact
          </Link>
        </View>
      </View>    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    color: 'cyan',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  navContainer: {
    alignItems: 'center',
  },
  link: {
    fontSize: 22,
    color: '#00BFFF',
    marginVertical: 10,
    textAlign: 'center',
  }
});

export default Home;

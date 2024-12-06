import { View, Image, Text, StyleSheet, Pressable, ImageBackground, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { colors } from '../constants/Colors';
import { Link } from 'expo-router';

export default function Index() {
  const [fontsLoaded] = useFonts({
    'MyCustomFont': require('../assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.gray} />
      </View>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image 
          source={require('../assets/images/logo.png')} 
          style={styles.logo}/>
        <Link href="../(public)/login" asChild>
          <Pressable 
            style={({ pressed }) => [
              styles.button, 
              pressed && styles.buttonPressed 
            ]}
          >
            <Text style={styles.buttonText}>INICIAR</Text>
          </Pressable>
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    backgroundColor: '#ffffff00',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  logo: {
    width: 450,
    height: 400,
    marginBottom: 2,
  },
  button: {
    backgroundColor: colors.gray,
    width: 200,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 6 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 4, 
    elevation: 8, 
  },
  buttonText: {
    color: colors.white,
    fontSize: 32, 
    fontFamily: 'MyCustomFont',
    textShadowColor: '#0000', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  buttonPressed: {
    backgroundColor: colors.lightGray, 
  }
});
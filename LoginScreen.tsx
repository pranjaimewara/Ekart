import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import commonStyles from '../styles/commonStyles';
import CustomButton from '../components/CustomButton';
import loginScreenStyles from '../styles/loginScreenStyles';
import LinearGradient from 'react-native-linear-gradient';
import {useResponsive} from 'react-native-responsive-hook';

interface Props {
  navigation: any;
}
const function1 = () => {
  const array = [10,20,30,50,11,14,56,100, 99,88];
let target = 56;
let result = 0;
for ( let i = 0; i<array.length ; i++ ) {
  if (array[i] === target) {
    result = i;
    break;
  }
}
console.log(result, 'Result = ');
console.log(array[6], 'Element = ');
}
const LoginScreen: React.FC<Props> = ({navigation}) => {
  const {isPortrait, hp, wp, rf} = useResponsive(); // useResponsive is used to take the values using Device
  // which gives Orientation (true, hp, wp & rf
  // are functions which will be called inside the loginScreenStyles sheet and
  // finally stored in variable name styles which is used as an object to style the components)
  

  const styles = loginScreenStyles(isPortrait, hp, wp, rf);

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <LinearGradient
        colors={['#146eb1', 'white']}
        style={styles.statusBarGradient}
      />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <View style={styles.main}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../../Src/assets/Images/newamazon.png')}
              resizeMode="contain"
              style={styles.amazonImage}
            />
            <Text style={styles.headingText}>Sign in to your account</Text>
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.contentText}>View your wish list</Text>
            <Text style={styles.contentText}>
              Find & reorder past purchases
            </Text>
            <Text style={styles.contentText}>Track your purchases</Text>
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton
              title="Already a customer? Sign in"
              onPress={() => function1}
              gradientColors={['#febe64', '#ffa60c']}
              gradientStyle={styles.signInGradient}
              buttonStyle={styles.signInButton}
            />
            <CustomButton
              title="New to Amazon.in? Create an account"
              onPress={() => navigation.navigate('CreateAccount')}
              gradientColors={['#f4f4f3', '#d2d2d2']}
              gradientStyle={styles.createAccountGradient}
              buttonStyle={styles.createAccountButton}
            />
            <CustomButton
              title="Skip sign in"
              onPress={() => navigation.navigate('HomeScreen')}
              gradientColors={['#f4f4f3', '#d2d2d2']}
              gradientStyle={styles.skipSignInGradient}
              buttonStyle={styles.skipSignInButton}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useResponsive} from 'react-native-responsive-hook';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import RemoteNotification from './RemoteNotification';
import LocalNotification from './LocalNotification';

interface Props {
  navigation: any;
}
const HomeScreen: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    GoogleSignin.configure({});
  }, []);

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userinfo', userInfo);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
      } else {
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      Alert.alert('logout successfully')
      console.log('You have been logged out from google');
    } catch (error) {
      console.error(error);
    }
  };

  const {isPortrait, hp, wp, rf} = useResponsive();
  // const styles = loginScreenStyles(isPortrait, hp, wp, rf);
  const countRef = useRef(0);
  const [count, setCount] = useState(0); // Dummy state for triggering re-renders
  // const [selected, setSelected] = useState<string>('');
  const selectedBtn = useRef<string | null>(null);

  const handleIncreasePress = () => {
    countRef.current += 1;
    selectedBtn.current = 'increase';
    setCount(countRef.current);
    // setSelected('increase');
  };

  // const handleDecreasePress = () => {
  //   if (countRef.current <= 0) {
  //     setCount(countRef.current);
  //   } else {
  //     countRef.current -= 1;
  //     setCount(countRef.current);
  //   }
  // };
  //             OR

  const handleDecreasePress = () => {
    if (countRef.current <= 0) return; // here, return will stop the function of checking the countRef.
    selectedBtn.current = 'decrease';
    countRef.current -= 1;
    setCount(countRef.current);
    // setSelected('decrease');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity
        style={{
          width: wp('4%'),
          marginRight: wp(80),
        }}
        onPress={() => navigation.goBack()}>
        <FontAwesome name="angle-left" size={25} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleIncreasePress}
        style={[
          styles.Btn,
          selectedBtn.current === 'increase' && styles.increaseToggle,
        ]}>
        <Text style={{color: 'black'}}>Increase the count</Text>
      </TouchableOpacity>

      <Text>{count}</Text>
      <TouchableOpacity
        onPress={handleDecreasePress}
        style={[
          styles.Btn,
          selectedBtn.current === 'decrease' && styles.increaseToggle,
        ]}>
        <Text style={{color: 'black'}}>Decrease the count</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={googleLogin} style={styles.loginButton}>
        <View style={{marginLeft: 5}}>
          <Text style={{color: '#222222', fontWeight: '400', fontSize: 18}}>
            Login with Google
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={signOut} style={styles.loginButton}>
        <View style={{marginLeft: 5}}>
          <Text style={{color: '#222222', fontWeight: '400', fontSize: 18}}>
            Sign out from google
          </Text>
        </View>
      </TouchableOpacity>

      <RemoteNotification />
          <Text> Push Notification!! </Text>
          <Button title={'Click Here'} onPress={LocalNotification} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'Yellow',
    alignItems: 'center',
  },
  Btn: {
    borderRadius: 10,
    overflow: 'hidden',
    width: 250,
    height: 50,
    padding: 1,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
  increaseToggle: {
    borderColor: 'red',
  },
  decreaseToggle: {
    borderColor: 'green',
  },
  loginButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '50%',
    height: 48,
    borderRadius: 10,
  },
});

import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface Props {
  navigation: any;
}

const ScreenSplash: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 3000);
  }, []);
  return (
    <SafeAreaView style={styles.safeArea}>
      <Image
        source={require('../../Src/assets/Images/amazon.png')}
        style={styles.amazonImage}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

export default ScreenSplash;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  amazonImage: {
    height: hp('50%'), // 70% of height device screen
    width: wp('50%'), // 80% of width device screen
  },
});

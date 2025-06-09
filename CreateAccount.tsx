import React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import commonStyles from '../styles/commonStyles';
import CustomButton from '../components/CustomButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface Props {
  navigation: any;
}
const CreateAccount: React.FC<Props> = ({navigation}) => {
  return (
    // Using View in place of SafeArea because it creates gap after
    // we use statusbar view separately.

    <View style={commonStyles.safeArea}>
      {/* Status Bar Background View (Works on iOS) */}
      <View style={[styles.statusBarBackground]} />
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <ScrollView
        scrollEnabled={true}
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <View style={styles.main}>
          <View style={styles.logoContainer}>
            <TouchableOpacity style={{width: wp('4%'),
            //  backgroundColor: 'blue', 
            marginLeft: wp('4%')
          }}
            onPress={() => navigation.goBack()}>
              <FontAwesome name="angle-left" size={25} color="black" />
            </TouchableOpacity>
            <Image
              style={styles.amazonImage}
              resizeMode="contain"
              source={require('../../Src/assets/Images/amazonLogo.png')}
            />
            <Text style={styles.logoText}>.in</Text>
          </View>
          <View style={styles.container1}>
            <Text style={styles.heading}>Create account</Text>
            <View style={styles.mainInputContainer}>
              <Text style={styles.numberText}>Mobile number</Text>
              <View style={styles.numberInputContainer}>
                <View
                  style={{
                    width: wp('30%'),
                    borderWidth: 1,
                    height: hp('5.5%'),
                    borderRadius: 5,
                    borderColor: '#454545',
                  }}></View>
                <TextInput
                  style={{
                    width: wp('47%'),
                    borderWidth: 1,
                    height: hp('5.5%'),
                    borderRadius: 5,
                    borderColor: '#454545',
                  }}></TextInput>
              </View>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>First and last name</Text>
                <TextInput
                  style={{
                    width: wp('83%'),
                    borderWidth: 1,
                    height: hp('5.5%'),
                    borderRadius: 5,
                    borderColor: '#454545',
                    marginTop: hp('1%'),
                    color: 'black',
                  }}></TextInput>
                <Text
                  style={{
                    color: '#555555',
                    lineHeight: hp('2.5%'),
                    marginTop: hp('1.5%'),
                    textAlign: 'left',
                    fontSize:
                      Platform.OS === 'android' ? wp('3.5%') : wp('3.1%'),
                    // alignSelf:'flex-start'
                    // marginLeft: wp('5%')
                  }}>
                  To verify your number, we will send you a text message with a
                  temporary code. Message and data rates may apply.
                </Text>
                <CustomButton
                  title="Verify mobile number"
                  onPress={() => Alert.alert('Hello')}
                  gradientColors={['#e0bb1a', '#e0bb1a']}
                  buttonStyle={{
                    width: wp('83%'),
                    height: hp('6%'),
                    borderRadius: 50,
                    borderWidth: 0,
                    marginTop: hp('0.5%'),
                  }}
                  gradientStyle={{
                    width: wp('83%'),
                    height: hp('6%'),
                    borderRadius: 50,
                    borderWidth: 0,
                    marginTop: hp('0.5%'),
                  }}
                />
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  borderColor: '#c6c6c6',
                  width: wp('83%'),
                  marginTop: hp('2%'),
                  height: hp('7%'),
                  //   backgroundColor: 'yellow',
                  justifyContent: 'center',
                  //   paddingLeft : wp('3%')
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                  }}>
                  Already a customer?
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: '#0a4075',
                    }}>
                    Sign in instead
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.conditionPolicyContainer}>
              <TouchableOpacity>
                <Text style={{color: '#0a4075'}}> Conditions of Use </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{color: '#0a4075'}}> Privacy Notice </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{color: '#0a4075'}}> Help </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footer}>
              <Text style={{color: '#525252', fontSize: wp('3%')}}>
                © 1996-2025, Amazon.com, Inc. or its affiliates
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default CreateAccount;

const styles = StyleSheet.create({
  statusBarBackground: {
    backgroundColor: 'black',
    height: Platform.OS === 'ios' ? hp('6%') : hp('0%'),
  },
  main: {
    // flex: 1,
    backgroundColor: '#c7c6ca',
    alignItems: 'center',
    paddingBottom: hp('1%'),
    // backgroundColor: 'red',
  },
  container1: {
    // backgroundColor: 'yellow',
    width: wp('100%'),
    height: hp('65%'),
    backgroundColor: '#d6d2d3',
    alignItems: 'center',
    borderTopWidth: 0,
    borderTopColor: 'gray',
    marginTop: hp('0%')
  },
  heading: {
    color: 'black',
    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
    fontSize: wp('4.5%'),
    alignSelf: 'flex-start',
    marginLeft: 15,
    marginTop: 10,
  },
  numberText: {
    color: 'black',
    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
    fontSize: wp('4%'),
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 20,
  },
  nameText: {
    color: 'black',
    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
    fontSize: wp('4%'),
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginTop: 15,
  },
  numberInputContainer: {
    flexDirection: 'row',
    gap: 20,
    // width: wp('100%'),
    marginTop: hp('1%'),
    // paddingHorizontal: wp('10%'),
    // backgroundColor:'yellow'
    // alignItems:'center'
  },
  nameContainer: {
    // flexDirection: 'row',
    // gap: 20,
    width: wp('83%'),
    marginTop: hp('0.5%'),
    // paddingHorizontal: wp('10%'),
    alignItems: 'center',
    // backgroundColor: 'yellow',
    height: hp('27%'),
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.OS === 'android'? hp('5%') : hp('0%'),
    width: wp('100%'),
    // backgroundColor: 'green',
    gap: 80
  },
  logoText: {
    color: 'black',
    position: 'absolute',
    right: Platform.OS === 'ios' ? wp('34.5%') : wp('33%'),
    top: hp('2%'),
  },
  amazonImage: {
    width: wp('40%'),
    height: hp('7%'),
    // backgroundColor: 'pink',
    // marginRight: wp('1%')
  },
  container2: {
    width: wp('100%'),
    // height: hp('60%'),
    marginTop: hp('0.5%'),
    backgroundColor: '#d6d2d3',
    // backgroundColor:'red',
    height: hp('30%'),
  },
  mainInputContainer: {
    width: wp('94%'),
    height: Platform.OS === 'android'? hp('52%') : hp('50%'),
    backgroundColor: '#e3e3e3',
    marginTop: hp('1.5%'),
    borderWidth: 1.5,
    borderColor: '#c6c6c6',
    borderRadius: 10,
    alignItems: 'center',
  },
  conditionPolicyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hp('5%'),
    alignItems: 'center',
  },
  footer: {alignItems: 'center', marginTop: hp('1%')},
});

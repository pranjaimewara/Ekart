import { StyleSheet, Platform } from 'react-native';

const loginScreenStyles = (isPortrait: boolean, hp: any, wp: any, rf: any) =>
  StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: '#fdf4f4',
      alignItems: 'center',
    },
    imgContainer: {
      alignItems: 'center',
      width: '100%',
      height:
        Platform.OS === 'ios'
          ? isPortrait
            ? hp(28)
            : hp(49)
          : isPortrait
          ? hp(35)
          : hp(47),
      paddingTop:
        Platform.OS === 'ios'
          ? isPortrait
            ? hp('0%')
            : hp(0)
          : isPortrait
          ? hp('5%')
          : hp(0),
    },
    amazonImage: {
      height: isPortrait ? hp(10) : hp(17),
      width: isPortrait ? wp(60) : wp(30),
      marginTop: isPortrait ? hp(10) : hp(11),
    },
    headingText: {
        color: 'black',
        fontWeight: '500',
        fontSize: rf(20),
        // position: 'absolute',
        marginTop:
          Platform.OS === 'ios'
            ? isPortrait
              ? hp(5)
              : hp(12) // iOS: Adjust height
            : isPortrait
            ? hp(5)
            : hp(10),
        // backgroundColor: 'green'
    },
    statusBarGradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: isPortrait ? hp(5) : hp(10),
      zIndex: 1,
    },
    contentContainer: {
        gap: 10,
        // backgroundColor: 'yellow',
        marginRight:
          Platform.OS === 'ios'
            ? isPortrait
              ? wp(24)
              : wp(50)
            : isPortrait
            ? wp(26)
            : wp(62),
        marginTop:
          Platform.OS === 'ios'
            ? isPortrait
              ? hp(2)
              : hp('0%')
            : isPortrait
            ? hp(0)
            : hp(0),
    },
    contentText: {
      color: '#474747',
      fontSize: isPortrait ? wp(4.2) : wp(2),
    },
    buttonContainer: {
      flex: 1,
      marginTop: 25,
      width: '100%',
      alignItems: 'center',
      paddingBottom: hp(13),
      paddingHorizontal: isPortrait ? wp(5) : wp(3),
    },
    signInGradient: {
      height: isPortrait ? hp(4.5) : hp(10.324),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
    },
    signInButton: {
      height: isPortrait ? hp(5) : hp(11),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      marginTop: hp(2),
      marginBottom: isPortrait ? hp(0.5) : hp(3),
      borderWidth: 1,
      borderColor: '#d69804',
    },
    createAccountGradient: {
      height: isPortrait ? hp(4.5) : hp(10),
    },
    createAccountButton: {
      height: isPortrait ? hp(5) : hp(10.324),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      marginTop: hp('0.5%'),
      marginBottom: isPortrait ? hp(0.5) : hp(3),
      borderWidth: 1,
      borderColor: '#bababa',
    },
    skipSignInGradient: {
      height: isPortrait ? hp(4.5) : hp(10.324),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
    },
    skipSignInButton: {
      height: isPortrait ? hp(5) : hp(11),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      marginTop: hp('0.5%'),
      borderWidth: 1,
      borderColor: '#bababa',
    },
  });

export default loginScreenStyles;

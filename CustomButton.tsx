import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  title: string;
  onPress: () => void;
  gradientColors: string[];
  buttonStyle?: ViewStyle; // Custom styling for the button
  gradientStyle?: ViewStyle; // Custom styling for the gradient
  textStyle?: TextStyle; // Custom styling for the text
}

const CustomButton: React.FC<Props> = ({
  title,
  onPress,
  gradientColors,
  buttonStyle,
  gradientStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, buttonStyle]}
      activeOpacity={0.7}>
      <LinearGradient
        colors={gradientColors || ['#e7c872', 'white']}
        // start={{x: 0.5, y: 0}}
        // end={{x: 0, y: 0}}
        style={[styles.gradient, gradientStyle]}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: hp('5%'),
    borderWidth: wp('0.2%'),
    borderRadius: 5,
    // backgroundColor: 'green'
  },
  gradient: {
    width: '100%',
    height: hp('4.8%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    color: 'black',
    fontSize: wp('3.6%'),
  },
});

export default CustomButton;

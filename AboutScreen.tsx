import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Button } from 'react-native';







const AboutScreen = () => {
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
  return (
    <View>
      <Text>AboutScreen</Text>
      <Button  title='Press'  onPress={function1}/>
    </View>
  )
}

export default AboutScreen;

const styles = StyleSheet.create({})
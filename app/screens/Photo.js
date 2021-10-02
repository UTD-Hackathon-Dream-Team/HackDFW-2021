import * as React from 'react';
import { 
  View, 
  Image,
  Text,
  StyleSheet,
  Dimensions, } from 'react-native';

  const styles = StyleSheet.create({
    selectImage: {
      width: 120,
      height: 120,
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
  });

function Photo() {
    return (
      <View>
        <View>
        <Text>Login Screen</Text>
        <Image
          style = {styles.selectImage}
          source={require('../TestImages/Honey.png')}
        />     
        <Image
          style = {styles.selectImage}
          source={require('../TestImages/tang.jpg')}
        />    
        <Image
          style = {styles.selectImage}
          source={require('../TestImages/Honey.png')}
        />  
         <Image
          style = {styles.selectImage}
          source={require('../TestImages/tang.jpg')}
        /> 
        </View>
      </View>
      
      
    );
}
export default Photo;
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const BottomTab = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={require('../../assets/Buttons/Chat_Button.png')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../../assets/Buttons/Photo_Button.png')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../../assets/Buttons/Profile_Button_Transparent.png')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../../assets/Buttons/Companions_Button.png')} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../../assets/Buttons/Logout_Button.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: '100%',
    bottom: '0%',
    zIndex: 999,
    backgroundColor: '#6237CF',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
  },

  icon: {
    width: 50,
    height: 50,
  },
});

export default BottomTab;

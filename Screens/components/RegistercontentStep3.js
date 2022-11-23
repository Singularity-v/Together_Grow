import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Image, View, StyleSheet, TouchableOpacity, TextInput, Text, ScrollView } from "react-native";
import { RadioButton } from 'react-native-paper';

const Registercontent03 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = React.useState('first');
  const navigation = useNavigation();
  return (
    <ScrollView style={{ content: "center",  }}>
      <View style={styles.container}>
        <View style={{ width: 278, }}>
            <Image
                source={require('../image/register_3.png')}
                style={{ width: "100%", height:70, marginTop: 10}}
                resizeMode="center"
            />
          <Text style={styles.textstyle}>帳號</Text>
          <View style={styles.sectionStyle}>

            <Image
              source={require('../image/user.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              underlineColorAndroid="transparent"
            />
          </View>
          <Text style={styles.textstyle}>暱稱</Text>
          <View style={styles.sectionStyle}>

            <Image
              source={require('../image/nickname.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={{ flex: 1 }}

              underlineColorAndroid="transparent"
            />
          </View>
          <Text style={styles.textstyle}>性別</Text>
          <RadioButton.Group 
            onValueChange={newValue => setValue(newValue)} 
            value={value} 
          >
            <View style={{ flex: 1, flexDirection: 'row', marginTop:8}}>
              <View style={styles.radioBox}>
                <RadioButton value="男性" uncheckedColor="#CDE49C" color="#F6CA2C"/>
                <Text style={styles.radioText}>男性</Text>
              </View>
              <View style={styles.radioBox}>
                <RadioButton value="女性" uncheckedColor="#CDE49C" color="#F6CA2C"/>
                <Text style={styles.radioText}>女性</Text>
              </View>
            </View>
          </RadioButton.Group>
          <Text style={styles.textstyle}>生日</Text>
          <View style={styles.sectionStyle}>

            <Image
              source={require('../image/passwordicon.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              underlineColorAndroid="transparent"
            />
          </View>
          <Text style={styles.textstyle}>興趣</Text>
          <View style={styles.sectionStyle}>

            <Image
              source={require('../image/passwordicon.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              underlineColorAndroid="transparent"
            />
          </View>
          <Text style={styles.textstyle}>健康狀態（Ex：糖尿病）</Text>
          <View style={styles.sectionStyle}>

            <Image
              source={require('../image/passwordicon.png')}
              style={styles.imageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              underlineColorAndroid="transparent"
            />
          </View>



        <View style={styles.sectionStyle2}>

          <TouchableOpacity onPress={() => navigation.push('Tabs')}>
            <View style={styles.nextBtn}>
              <Text style={styles.nextBtnText}> 確認選擇 </Text>
            </View>
          </TouchableOpacity>

        </View>
        </View>
        <Image
          source={require('../image/Signin-Bottom-Bear.png')}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionStyle4: { //第三方登入
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionStyle3: {//or
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:10,
    marginTop:20,
  },
  sectionStyle2: { 
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 10,
  },
  sectionStyle: { //inter box
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDE49C',
    borderColor: '#000',
    height: 48,
    borderRadius: 15,
    marginTop: 10,
  },
  imageStyle: {
    // padding: 10,
    margin: 12,
    height: 24,
    width: 24,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  imageStyle2: {
    padding: 10,
    margin: 5,
    height: 48,
    width: 132,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  yellowlineleft: {
    // marginLeft:30,
  },
  yellowlineRight: {
    // marginRight:30,
  },
  textstyle: {
    fontSize: 16,
    color: "#62935F",
    fontWeight: "bold",
    marginTop:15,
  },
  textstyle3: {
    // marginLeft: 190,
    marginTop: 10,
    fontSize: 14,
    color: "#705A31",
  },
  textstyle4: {
    fontSize: 16,
    color: "#705A31",
  },
  textstyle5: {
    // marginRight: 210,
    marginTop: 10,
    fontSize: 16,
    color: "#62935F",
    fontWeight: "bold",
  },
  nextBtnText: {
    paddingRight:40,
    paddingLeft:40,
    paddingBottom:15,
    paddingTop:15,
    backgroundColor:"#62935F",

    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    borderRadius:20,
    marginTop:20,
  },
  radioBox: {
    flex: 1, 
    flexDirection: 'row', 
    backgroundColor:"Black" ,  
    alignItems: 'center'
  },
  radioText: {
    fontSize: 16,
    color: "#62935F",
    fontWeight: "bold",
  }
});
export default Registercontent03;
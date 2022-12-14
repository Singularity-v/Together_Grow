import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Image, View, StyleSheet, TouchableOpacity, TextInput, Text, ScrollView } from "react-native";
import { RadioButton } from 'react-native-paper';
// import DateTimePicker from '@react-native-community/datetimepicker';

const Registercontent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = React.useState('first');
  const navigation = useNavigation();
  // const [date, setDate] = useState(new Date());
  // const [mode, setMode] = useState('date');
  // const [show, setShow] = useState(false);
  // const [text, setText] = useState('Empty');

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === 'ios');
  //   setDate(currentDate);

  //   let tempDate = new Date(currentDate);
  //   let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
  //   setText(fDate)

  //   console.log(fDate)
  // }

  return (
    <ScrollView style={{ content: "center",  }}>
      <View style={styles.container}>
        <View style={{ width: 278}}>
          <Image
              source={require('../image/register_1.png')}
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
          <Text style={styles.textstyle}>密碼</Text>
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
          <Text style={styles.textstyle}>確認密碼</Text>
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

          <TouchableOpacity onPress={() => navigation.push('Register02')}>
            <View style={styles.nextBtn}>
              <Text style={styles.nextBtnText}> 下一步 </Text>
            </View>
          </TouchableOpacity>

        </View>
        <View style={styles.sectionStyle3}>
          <Image
            source={require('../image/shortyellow.png')}
            style={styles.yellowlineleft}
          />
          <Text style={styles.textstyle4}> or </Text>
          <Image
            source={require('../image/shortyellow.png')}
            style={styles.yellowlineRight}
          />
        </View>
        <View style={styles.sectionStyle4}>
          <Image
            source={require('../image/Google.png')}
          />
          <Image
            source={require('../image/Facebook.png')}
          />
          <Image
            source={require('../image/Twitter.png')}
          />
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
    justifyContent: "space-between",
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
  sectionStyle2: {  //下一步
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
});
export default Registercontent;
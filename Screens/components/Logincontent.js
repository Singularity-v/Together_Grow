import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Image, View, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Text,ScrollView, } from "react-native";
function Logincontent () {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
    return(
      <ScrollView style={{content: "center",marginTop:45,}}>
        
      <View style={styles.container}>
      <Text style={styles.textstyle2}>帳號/暱稱</Text>
      
        <View style={styles.sectionStyle}>
          
          <Image
            source={require('../image/user.png')} 
            style={styles.imageStyle}
          />
          <TextInput
            style={{flex: 1}}
            
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
            style={{flex: 1}}
            
            underlineColorAndroid="transparent"
          />
        </View>
        <Text style={styles.textstyle3}>忘記密碼?</Text>
      </View>
      <View style={styles.sectionStyle2}>
      <TouchableOpacity onPress={() => navigation.push('Register')}>
        <Image
            source={require('../image/signin.png')}
            style={styles.imageStyle2}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Tabs')}>
          <Image
          source={require('../image/login.png')}
          style={styles.imageStyle2}
        />
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
      <Image
        source={require('../image/Login-Bottom-Rabbit.png')} style={styles.imageStyle3}
      />
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin:45
  },
  sectionStyle4: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 14,
  },
  sectionStyle3: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 15,
    margin: 10,
  },
  sectionStyle2: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    margin: 10,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDE49C',
    borderColor: '#000',
    height: 48,
    width:278,
    borderRadius: 15,
    margin: 10,
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
  imageStyle3: {
    
    marginTop:43,
    
  },
  yellowlineleft: {
    marginLeft:30,
  },
  yellowlineRight: {
    marginRight:30,
  },
  textstyle:{
    marginRight:240,
    marginTop:10,
    fontSize:16,
    color:"#62935F",
    fontWeight:"bold",
  },
  textstyle2:{
    marginRight:200,
    marginTop:10,
    fontSize:16,
    color:"#62935F",
    fontWeight:"bold",
  },
  textstyle3:{
    marginLeft:190,
    marginTop:10,
    fontSize:14,
    color:"#705A31",
  },
  textstyle4:{
    fontSize:16,
    color:"#705A31",
  },
  });
export default Logincontent;
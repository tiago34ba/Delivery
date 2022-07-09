
import React from 'react'

import {
  View, 
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput, 
  TouchableWithoutFeedback
} from 'react-native';

import * as Animatabe from 'react-native-animatable'
export default welcome = () => {
  return (
    <View style={styles.container}>
    
    <View style= {styles.containerLogo}>
      <Animatabe.Image
        animation="flipInY"
        source={require('../../assets/logo.png')}
        style={{ width: '100%' }}
        resizeMode="contain" 
      />
    </View>

    <Animatabe.View animation= 'fadeInUp' style={styles.containerForm}>
    <Text style ={styles.title}> Bem Vindo ao Ssait Delivery</Text>
    <Text style ={styles.text}> faça seu Login</Text>
    <View style={styles.form} >
                    <TextInput style={styles.inputEmail} placeholder='Email'
                    autoCompleteType= 'email' autoCapitalize='none'
                    placeholderTextColor='#000' />
                    <TextInput style={styles.inputPassword} placeholder='Senha'
                    autoCompleteType='password' autoCapitalize='none' autoCorrect={true}
                    placeholderTextColor='#000' />
                     <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>Acessar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('createuser')} >
                        <Text style={styles.ButtonCreate} >Ainda não possui uma conta!</Text>
                    </TouchableOpacity>
                </View>
    </Animatabe.View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#38A69D',
    justifyContent:'center'    
  },
  containerLogo:{
    flex:2,
    backgroundColor:'#38A69D',
    justifyContent:'center',
    alignItems:'center'
  },
  containerForm: {
    flex:1, 
    backgroundColor:'#FAF0E6',
    borderTopRightRadius: 25,
    borderTopLeftRadius:25,
    paddingStart:'5%',
    paddingEnd:'5%'
  },
  title:{
      fontSize: 24,
      fontWeight: 'bold',
      margin: 28,
      marginBottom: 12
  },
  text:{
    color:'#a1a1a1'
  },
  button:{
    position:'absolute',
    backgroundColor:'#38a69d',
    borderRadius:50,
    paddingVertical:5,
    width:'60%',
    alignSelf:'center',
    bottom:'-50%',
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{
    fontSize:18,
    color:'#FFF',
    fontWeight:'bold'
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
},
inputEmail: {
    backgroundColor: '#FFF',
    width: 250,
    height: 35,
    borderRadius: 10,
    padding: 10, 
    fontWeight:'bold'      
},
inputPassword: {
    backgroundColor: '#FFF',
    marginTop: 13,
    width: 250,
    height: 35,
    borderRadius: 5,
    padding: 10,
    fontWeight:'bold'
}
}) 

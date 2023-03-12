import { View, Text, Image, ScrollView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import {List, TextInput} from 'react-native-paper'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Cities, Departments } from '../cities'

export type User = {
// id: number,
    firstName:string,
    lastName:string,
    phoneNumber:string,
    department:string,
    city:string,
    neighborhood: string,
    email:string,
    idCardNumber:string,
    dateOfExpedition:Date,
    dateOfBirth: Date,
    password:string,
    confirmPassword:string,
    // state:string,
    // idCardFile?: File | string[],

}
export type ArticleDDBB= {
  id: number,
  title:string,
  body:string,
  date:Date,
}
const FormRegister = () => {
  const [isPersonalDataClicked, setIsPersonalDataClicked] = useState<boolean>(false)
  const [onSubmit, setOnSubmit] = useState<boolean>(false)
  const [sqlData, setSqlData] = useState([])
   const [user, setUser] = useState<User>({
        firstName:"",
        lastName:"",
        phoneNumber:"",
        department:"",
        city:"",
        neighborhood:"", 
        email:"",
        idCardNumber:"",
        dateOfExpedition: new Date(),
        dateOfBirth: new Date(),
        password:"",
        confirmPassword:"",
        // idCardFile: undefined,
        // Address
        // phone number
    })
const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) =>{
const {name, value} = e.currentTarget 
  setUser({...user, [name]:value})
}
const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
      // Here firebase function will be called
    setOnSubmit(!onSubmit)
  }
  
  useEffect(() => {
    fetch('http://192.168.1.4:3000/get',{ method: 'GET'}).
    then(res=>res.json()).
    then(res => setSqlData(res))
      // setSqlData(res.map(item=> setSqlData(item)))
    }, [])
    console.log(sqlData[0])
    return (
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>

    <View   
    
    className='flex w-full items-center h-screen mt-4 '>
      
        <Text className=' text-gray-500 font-bold text-center  w-[80%] text-3xl'>¡AFILIATE CON NOSOTROS!</Text>
      {/* <View className='border-2 h-30 bg-green-500 border-sky-500 flex w-full items-center justify-center '> */}
        <Image
       source ={require('../LOGO-LITIS-removebg.png')}
      alt='Register form bg'
      className='  h-12 w-12  '
      />
      {/* </View> */}
        {/* {console.log(sqlData)} */}
        <ScrollView className='w-full space-y-4 h-screen mx-6'>

      <View className='mx-6 '
      >
           <TextInput
      label="firstName"
      //  name='firstName'
      secureTextEntry
      onChangeText={(value:string)=>setUser({...user, firstName:value})}
      // right={<TextInput.Icon icon="eye" />}
      className=' '
      />
      </View>
      <View className='mx-6 '>
           <TextInput
      label="LastName"
      //  name='firstName'
      secureTextEntry
      onChangeText={(value:string)=>setUser({...user, lastName:value})}
      // right={<TextInput.Icon icon="eye" />}
      className='w-full'
      />
      </View>
      <View className='mx-6 '>
        <TextInput
          label="Barrio"
          //  name='neighborhood'
          secureTextEntry
          onChangeText={(value:string)=>setUser({...user, neighborhood:value})}
          // right={<TextInput.Icon icon="eye" />}
          className='w-full'
        />
      </View>
      <View className='mx-6 '>
        <TextInput
          label="Numero de telefono"
          //  name='phoneNumber'
          keyboardType='decimal-pad'
          secureTextEntry
          onChangeText={(value:string)=>setUser({...user, phoneNumber:value})}
          // right={<TextInput.Icon icon="eye" />}
          className='w-full rounded-full'
        />
      </View>
      <View className='mx-6 pt-0 '>
      <List.Section title="Departamento">
        <ScrollView>
      <List.Accordion
        title="Seleccione Departamento"
        left={props => <List.Icon {...props} icon="earth" />}>
        {Departments.map(department => (

          <List.Item title={`${department.Department}`}   />
          ))}
      </List.Accordion>
        </ScrollView>
      </List.Section>
      </View>

      <View className='mx-6 '>
      <List.Section title="Ciudad">
        <ScrollView>
      <List.Accordion
        title="Seleccione su ciudad"
        left={props => <List.Icon {...props} icon="earth" />}>
        {Cities.map(city => (
          
          <List.Item title={`${city.city}`}   />
          ))}
      </List.Accordion>
        </ScrollView>
      </List.Section>
      </View>
        </ScrollView>
      {/* <View className='border-2 w-full h-[45%]'>
        {sqlData.map(
          articles=> Object.values(articles).map((item:any) =>(
            
            <Text>{item}</Text>
            )))}

      </View>
      <>
  {console.log(user.firstName.length)}    
      </> */}
       
    </View>
            </TouchableWithoutFeedback>
  )
}

export default FormRegister
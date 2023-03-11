import { View, Text, Image } from 'react-native'
import {TextInput} from 'react-native-paper'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

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
    <View   className='flex w-full items-center h-[40%] mt-4 '>
      
        <Text className=' text-gray-500 font-bold text-center  w-[80%] text-3xl'>¡AFILIATE CON NOSOTROS!</Text>
      {/* <View className='border-2 h-30 bg-green-500 border-sky-500 flex w-full items-center justify-center '> */}
        <Image
       source ={require('../LOGO-LITIS-removebg.png')}
      alt='Register form bg'
      className='  h-[40%] w-[40%]  '
      />
      {/* </View> */}
        {/* {console.log(sqlData)} */}

           <TextInput
      label="firstName"
      //  name='firstName'
      secureTextEntry
      onChangeText={(value:string)=>setUser({...user, firstName:value})}
      // right={<TextInput.Icon icon="eye" />}
      className='w-full'

    />
      <View className='border-2 w-full h-[45%]'>
        {sqlData.map(
          articles=> Object.values(articles).map((item:any) =>(

          <Text>{item}</Text>
          )))}

      </View>
  {console.log(user.firstName.length)}    
       
    </View>
  )
}

export default FormRegister
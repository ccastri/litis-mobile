import { View, Text, SafeAreaView, Image} from 'react-native'
import React from 'react'

const Header = () => {
  return (
 <SafeAreaView className='mx-4 h-[80px] w-[full] flex flex-row  space-x-2 justify-between  items-center' >
      

      <Image 
      className='h-full w-[50px]    '
      source ={require('../LOGO-LITIS-removebg.png')}
      />
      
      {/* <StatusBar style="auto" /> */}

      <Text className='font-bold text-3xl'>Litis SAS</Text>
    </SafeAreaView>
  )
}

export default Header
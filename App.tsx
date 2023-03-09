import { StatusBar } from 'expo-status-bar';
import { Image,  Text, View, SafeAreaView } from 'react-native';
// import images from './assets';
export default function App() {
  return (
    <SafeAreaView className='w-full h-full' >
      <Text>Hello litis</Text>
      <Image 
      className='flex h-50 w-[80%] mx-auto mt-20 justify-center py-16  '
      source ={require('./LOGO-LITIS-removebg.png')}
      />
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}



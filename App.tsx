import { StatusBar } from 'expo-status-bar';
import { Image,  Text, View, SafeAreaView } from 'react-native';
import FormRegister from './components/FormRegister';
import Header from './components/Header';
// import images from './assets';
export default function App() {
  return (
    <SafeAreaView className=' bg-sky-200 opacity-70 h-screen'>
   <Header/>
  <FormRegister/>
  </SafeAreaView>
  );
}



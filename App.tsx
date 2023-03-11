import { StatusBar } from 'expo-status-bar';
import { Image,  Text, View, SafeAreaView, AppRegistry } from 'react-native';
import FormRegister from './components/FormRegister';
import Header from './components/Header';
import {Provider as PaperProvider} from 'react-native-paper'
// import images from './assets';
export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView className=' bg-sky-200 opacity-70 h-screen'>
        <Header/>
        <FormRegister/>
      </SafeAreaView>
    </PaperProvider>
  );
}
// AppRegistry.registerComponent(appName, () => App);



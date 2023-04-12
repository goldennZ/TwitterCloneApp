import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';
import { TimeLine } from './src/screens/TimeLine';

export default function App() {
  return (
    <SafeAreaView style={{paddingTop: 30}}>
      <StatusBar style="auto" />
      <TimeLine/>
    </SafeAreaView>
  );
}

import { View, Text } from 'react-native';
import { Image } from 'expo-image';

export function Header() {
  return (
    <View className="flex flex-row items-center justify-between px-5 mt-6 pb-3 border-b-[1px] border-[#BDC5CD]">
      <View className="bg-black rounded-full w-8 h-8"></View>
      <Image
        source={require('./twitter_logo.png')}
        style={{
          height: 22,
          width: 27,
        }}
      />
      <Image
        source={require('./feature_stroke.png')}
        style={{
          height: 21,
          width: 22,
        }}
      />
    </View>
  );
}

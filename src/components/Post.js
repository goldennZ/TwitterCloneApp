import { View, Text } from "react-native";

export function Post() {
  return (
    <View className="flex flex-row pl-5 border-b-[1px] border-[#BDC5CD] pb-2">
      <View className="bg-black rounded-full w-14 h-14 mt-8"></View>
      <View className="pl-2">
        <Text className="pt-2">Kieron Dotson and Zack John liked</Text>
        <Text className="text-base font-bold">Martha Craig @craig_love ·12h</Text>
        <Text className="text-base w-[300px]">
          UXR/UX: You can only bring one item to a remote island to assist 
          your research of native use of tools and usability. What do you bring? 
          #TellMeAboutYou
        </Text>
      </View>
    </View>
  )
}
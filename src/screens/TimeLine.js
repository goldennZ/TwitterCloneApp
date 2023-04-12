import { ScrollView, View } from "react-native";
import { Header } from "../components/Header";
import { Post } from "../components/Post";

export function TimeLine() {
  return (
    <View>
      <Header/>
      <ScrollView>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </ScrollView>
    </View>
  )
}
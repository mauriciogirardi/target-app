import { Button } from "@/components/Button"
import { router } from "expo-router"
import { Text, View } from "react-native"

export default function InProgress() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>In progress</Text>
      <Button title="Voltar" onPress={() => router.back()}/>
    </View>
  )
}

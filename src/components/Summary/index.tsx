import { ColorValue, Text, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'

export type SummaryProps = {
  label: string
  value: string
  icon?: {
    name:  keyof typeof MaterialIcons.glyphMap
    color: ColorValue
  }
  isLeft?: boolean
}

export function Summary({ label, value, icon, isLeft = false }: SummaryProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.header, isLeft && { justifyContent: 'flex-end' }]}>
        <MaterialIcons size={16} color={icon.color} name={icon.name} />
        <Text style={styles.label}>{label}</Text>
      </View>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}
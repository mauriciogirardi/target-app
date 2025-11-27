import { Text, TextInput, TextInputProps, View } from "react-native"
import { styles } from "./styles"
import { colors } from "@/theme"

type InputProps = TextInputProps & {
  label: string
}

export function Input({label, ...props}: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        style={styles.input} 
        placeholderTextColor={colors.gray[400]}
        {...props}
      />
    </View>
  )
}
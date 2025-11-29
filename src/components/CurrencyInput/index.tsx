import { Text, View } from "react-native"
import Input, { CurrencyInputProps as CurrencyInputLibProps } from "react-native-currency-input"
import { styles } from "./styles"
import { colors } from "@/theme"

type CurrencyInputProps = CurrencyInputLibProps & {
  label: string
}

export function CurrencyInput({label, ...props}: CurrencyInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Input 
        style={styles.input} 
        placeholderTextColor={colors.gray[400]}
        delimiter="."
        separator=","
        minValue={0}
        {...props}
      />
    </View>
  )
}
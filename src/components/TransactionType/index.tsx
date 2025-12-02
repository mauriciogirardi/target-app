import { View } from "react-native";
import { styles } from "./styles";
import { Option } from "./option";
import { TransactionTypes } from "@/utils/TransactionTypes";
import { colors } from "@/theme";

type TransactionTypeProps = {
  selected: TransactionTypes
  onChange: (type: TransactionTypes) => void
}

export function TransactionType({ onChange, selected }: TransactionTypeProps) {
  return (
    <View style={styles.container}>
      <Option 
        icon="arrow-upward" 
        onPress={() => onChange(TransactionTypes.Input)} 
        isSelected={selected === TransactionTypes.Input} 
        selectedColor={colors.blue[500]} 
        title="Guardar"
      />
      <Option 
        icon="arrow-downward" 
        onPress={() => onChange(TransactionTypes.Output)} 
        isSelected={selected === TransactionTypes.Output} 
        selectedColor={colors.red[400]} 
        title="Resgatar"
      />
    </View>
  )
}
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from "./styles";

export type TargetData = {
  id?: string
  name: string
  percentage: string
  current: string
  target: string
}

type TargetProps = TouchableOpacityProps & {
  data: TargetData
}

export function Target({ data, ...props}: TargetProps) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {data.name} 
        </Text>

        <Text style={styles.status}>
          {data.percentage} • {data.current} de {data.target}
        </Text>
      </View>

      <MaterialIcons name="chevron-right" size={20}/>
    </TouchableOpacity>
  )
}
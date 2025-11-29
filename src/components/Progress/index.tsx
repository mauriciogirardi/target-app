import { Text, View } from "react-native";
import { styles } from "./styles";

type SavedData = {
  current: string
  target: string
  percentage: number
}

type ProgressProps = {
  data: SavedData
}

export function Progress({ data }: Readonly<ProgressProps>) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Valor guardado
      </Text>

      <View style={styles.status}>
        <Text style={styles.value}>
          {data.current}

          <Text style={styles.target}> de {data.target}</Text>
        </Text>
        <Text style={styles.percentage}>{data.percentage.toFixed(0)}%</Text>
      </View>

      <View style={styles.progress}>
        <View style={[styles.currentProgress, {width: `${data.percentage}%`}]}/>
      </View>
    </View>
  )
}
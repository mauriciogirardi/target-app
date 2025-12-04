import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./styles"
import { colors } from "@/theme/colors"
import { Text, View } from "react-native"
import { Separator } from "../Separator"
import { Summary, SummaryProps } from "../Summary"

export type HomeHeaderData = {
  total: string
  input: SummaryProps
  output: SummaryProps
}

type HomeHeaderProps = {
  data: HomeHeaderData
}

export function HomeHeader({data}: HomeHeaderProps) {
  return (
    <LinearGradient colors={[colors.blue[500], colors.blue[800]]} style={styles.container}>
      <View>
        <Text style={styles.label}>Total que você possui</Text>
        <Text style={styles.total}>{data.total}</Text>
      </View>

      <Separator color={colors.blue[400]}/>

      <View style={styles.summary}>
        <Summary {...data.input} icon={{color: colors.green[500], name: 'arrow-upward'}}/>
        <Summary {...data.output} icon={{color: colors.red[400], name: 'arrow-downward'}} isRight />
      </View>
    </LinearGradient>
  )
}
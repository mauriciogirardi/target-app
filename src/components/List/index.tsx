import { FlatList, FlatListProps, StyleProp, Text, View, ViewStyle } from "react-native";
import { styles } from "./styles";
import { Separator } from "../Separator";
import { colors } from "@/theme";

type ListProps<T> = FlatListProps<T> & {
  title: string
  emptyMessage?: string
  containerStyle?: StyleProp<ViewStyle>
}

export function List<T>({ title, emptyMessage, containerStyle, ...props}: ListProps<T>) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        ListEmptyComponent={() => <Text style={styles.empty}>{emptyMessage}</Text>}
        ItemSeparatorComponent={() => <Separator color={colors.gray[200]} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        {...props} 
      />
    </View>
  )
}
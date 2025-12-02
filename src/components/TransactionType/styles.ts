import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 42,
    backgroundColor: colors.gray[100],
    overflow: 'hidden',
  },
  option: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 8,
    gap: 8

  },
  title: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: colors.gray[500]
  }
})
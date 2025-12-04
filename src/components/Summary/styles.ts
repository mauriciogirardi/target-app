import { colors, fontFamily } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 5
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  label: {
    color: colors.white,
    fontSize: 12,
    fontFamily: fontFamily.regular
  },
  value: {
    fontFamily: fontFamily.regular,
    fontSize: 18,
    color: colors.white
  },
})
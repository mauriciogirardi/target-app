import { StyleSheet } from "react-native";

import { colors ,fontFamily } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 324,
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    paddingBottom: 32,
    gap: 18,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  label: {
    fontSize: 12,
    color: colors.white,
    fontFamily: fontFamily.regular
  },
  total: {
    fontSize: 32,
    fontFamily: fontFamily.medium,
    color: colors.white
  },
  summary: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 18
  }
})
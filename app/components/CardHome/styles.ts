import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.GRAY_100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.GRAY_200,
    padding: 8,
    marginBottom: 8
  },
  texts: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 8,
    marginLeft: 8,
    marginBottom: 8
  },
  title: {
    ...FONTS.TITLE_MD,
    color: COLORS.GRAY_700,
    marginBottom: 8
  },
  description: {
    ...FONTS.TEXT_SM,
    color: COLORS.GRAY_600
  },
  tag: {
    marginLeft: 29
  },
  monetaryValue: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 12,
    marginBottom: 8
  },
  monetaryValueCipher: {
    ...FONTS.TEXT_XS,
    color: COLORS.GRAY_700,
    marginBottom: 2
  },
  monetaryValueNumber: {
    ...FONTS.TITLE_MD,
    color: COLORS.GRAY_700,
    marginLeft: 4
  }
})
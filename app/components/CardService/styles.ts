import { StyleSheet } from "react-native";
import { FONTS } from "../../utils/fonts";
import { COLORS } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginLeft: 4,
    marginBottom: 20
  },
  content: {
    flexDirection: 'row'
  },
  information: {
    // justifyContent: "space-between",
  },
  informationText: {
    ...FONTS.TITLE_SM,
    color: COLORS.GRAY_700,
    marginBottom: 2
  },
  detailText: {
    ...FONTS.TEXT_XS,
    color: COLORS.GRAY_500,
    width: 179
  },
  informationMoney: {
    flexDirection: 'row'
  },
  informationMoneyCipher: {
    ...FONTS.TEXT_XS,
    color: COLORS.GRAY_700,
    alignSelf: 'flex-end',
    marginBottom: 1
  },
  informationMoneyValue: {
    ...FONTS.TITLE_MD,
    color: COLORS.GRAY_700,
    marginLeft: 4,
  },
  detail: {
    marginLeft: 16
  },
  detailQuantity: {
    ...FONTS.TEXT_XS,
    color: COLORS.GRAY_600,
    alignSelf: 'flex-end'
  },
  detailIcon: {
    alignSelf: "center",
    marginLeft: 16
  }
});
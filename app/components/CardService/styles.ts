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
    flex: 1,
    flexDirection: 'row'
  },
  information: {
    flex: 1
  },
  informationText: {
    ...FONTS.TITLE_SM,
    color: COLORS.GRAY_700,
    marginBottom: 2
  },
  detailText: {
    ...FONTS.TEXT_XS,
    color: COLORS.GRAY_500
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
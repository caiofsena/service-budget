import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  highlight: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.GRAY_200,
    borderRadius: 10,
    backgroundColor: COLORS.GRAY_100
  },
  highlightTitle: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GRAY_200
  },
  highlightTitleIcon: {
    width: 36,
    height: 36,
    backgroundColor: COLORS.PURPLE_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  highlightTitleText: {
    ...FONTS.TITLE_LG,
    marginLeft: 12,
    marginRight: 20,
    borderBottomColor: COLORS.GRAY_700
  },
  highlightData: {
    paddingVertical: 16,
    paddingHorizontal: 20
  },
  highlightDataClient: {
    marginBottom: 9
  },
  highlightDataClientTitle: {
    ...FONTS.TEXT_XS,
    color: COLORS.GRAY_600,
    marginBottom: 4
  },
  highlightDataClientDescription: {
    ...FONTS.TEXT_SM,
    color: COLORS.GRAY_700
  },
  highlightDataDate: {
    flexDirection: 'row'
  },
  highlightDataDateCreated: {
    flex: 1,
    flexDirection: 'column'
  },
  highlightDataDateUpdated: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12
  },
  servicesIncluded: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.GRAY_200,
    borderRadius: 10
  },
  servicesIncludedTitle: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GRAY_200
  },
  servicesIncludedTitleText: {
    ...FONTS.TEXT_XS,
    marginLeft: 8,
    borderBottomColor: COLORS.GRAY_500
  },
  servicesIncludedData: {
    paddingTop: 16,
    paddingHorizontal: 16
  },
  servicesIncludedAddButton: {
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  resume: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.GRAY_200,
    borderRadius: 10,
    backgroundColor: COLORS.GRAY_100
  },
  resumeIcon: {
    paddingTop: 16, 
    paddingLeft: 16
  },
  resumeIconItem: {
    width: 36,
    height: 36,
    backgroundColor: COLORS.PURPLE_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  resumeValue: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 16,
    marginRight: 20
  },
  resumeValueData: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 16
  },
  resumeValueDataSubtotal: {
    flexDirection: 'row',
    marginBottom: 2,
    alignItems: 'center'
  },
  resumeValueDataDiscount: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  resumeValueDataSubtotalTitle: {
    flex: 1,
    ...FONTS.TEXT_SM,
    color: COLORS.GRAY_600,
  },
  resumeValueDataSubtotalDescription: {
    ...FONTS.TITLE_XS,
    color: COLORS.GRAY_600,
    textDecorationLine: 'line-through'
  },
  resumeValueDataDiscountTitle: {
    ...FONTS.TEXT_SM,
    color: COLORS.GRAY_600,
  },
  resumeValueDataDiscountText: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  resumeValueDataDiscountTag: {
    marginLeft: 8
  },
  resumeValueDataDiscountDescription: {
    ...FONTS.TITLE_XS,
    color: COLORS.SUCCESS_DARK
  },
  line: {
    borderWidth: 1,
    borderColor: COLORS.GRAY_200,
    marginVertical: 8
  },
  resumeValueDataTotal: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  resumeValueDataTotalTitle: {
    flex: 1,
    ...FONTS.TITLE_SM,
    color: COLORS.GRAY_700,
  },
  resumeValueDataTotalDescription: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  resumeValueDataTotalDescriptionCipher: {
    ...FONTS.TEXT_XS,
    color: COLORS.GRAY_700,
    marginRight: 4
  },
  resumeValueDataTotalDescriptionMoney: {
    ...FONTS.TITLE_LG,
    color: COLORS.GRAY_700,
    paddingBottom: 2
  },
  buttons: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 34,
    borderTopWidth: 1,
    borderTopColor: COLORS.GRAY_200
  },
  buttonsOnlyIcon: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonCopy: {
    marginLeft: 8
  },
  buttonEdit: {
    marginLeft: 8
  }
})
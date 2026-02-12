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
    padding: 20,
  },
  generalInformation: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.GRAY_200,
    borderRadius: 10
  },
  generalInformationTitle: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GRAY_200
  },
  generalInformationTitleText: {
    ...FONTS.TEXT_XS,
    marginLeft: 8,
    borderBottomColor: COLORS.GRAY_500
  },
  generalInformationData: {
    padding: 16
  },
  generalInformationDataClient: {
    marginTop: 12
  },
  status: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.GRAY_200,
    borderRadius: 10
  },
  statusTitle: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GRAY_200
  },
  statusTitleText: {
    ...FONTS.TEXT_XS,
    marginLeft: 8,
    borderBottomColor: COLORS.GRAY_500
  },
  statusData: {
    padding: 16
  },
  statusDataLine: {
    flexDirection: "row",
    marginBottom: 4
  },
  statusDataItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  statusDataItemTag: {
    marginLeft: 4
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
    padding: 16
  },
  servicesIncludedAddButton: {
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  investiments: {
    borderWidth: 1,
    borderColor: COLORS.GRAY_200,
    borderRadius: 10,
  },
  investimentsTitle: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GRAY_200
  }, 
  investimentsTitleText: {
    ...FONTS.TEXT_XS,
    marginLeft: 8,
    borderBottomColor: COLORS.GRAY_500
  },
  investimentsSubtotal: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingLeft: 20,
    paddingRight: 16,
    marginBottom: 12,
    alignItems: 'center'

  },
  investimentsSubtotalText: {
    ...FONTS.TEXT_SM,
    flex: 1,
    color: COLORS.GRAY_700
  },
  investimentsSubtotalItems: {
    ...FONTS.TEXT_XS,
    color: COLORS.GRAY_600
  },
  investimentsSubtotalCipher: {
    ...FONTS.TEXT_XS,
    color: COLORS.GRAY_700,
    marginLeft: 12
  },
  investimentsSubtotalValue: {
    ...FONTS.TEXT_SM,
    color: COLORS.GRAY_700,
    marginLeft: 4
  },
  investimentsDiscount: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    marginBottom: 16
  },
  investimentsDiscountPercentage: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  investimentsDiscountPercentageText: {
    ...FONTS.TEXT_SM,
    color: COLORS.GRAY_700
  },
  investimentsDiscountPercentageValue: {
    marginLeft: 8
  },
  investimentsDiscountPercentageValueText: {
    ...FONTS.TEXT_MD,
    color: COLORS.GRAY_700
  },
  investimentsDiscountMoneyCipher: {
    ...FONTS.TEXT_XS,
    color: COLORS.DANGER_BASE,
    marginLeft: 16
  },
  investimentsDiscountMoneyValue: {
    ...FONTS.TEXT_SM,
    color: COLORS.DANGER_BASE,
    marginLeft: 4
  },
  investimentsDiscountReduceCipher: {
    ...FONTS.TEXT_XS,
    color: COLORS.DANGER_BASE
  },
  investimentsDiscountReduceValue: {
    ...FONTS.TEXT_SM,
    color: COLORS.DANGER_BASE,
    marginRight: 16
  },
  investimentsTotal: {
    flexDirection: 'row',
    backgroundColor: COLORS.GRAY_100,
    borderTopWidth: 1,
    borderTopColor: COLORS.GRAY_200,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  investimentsTotalText: {
    ...FONTS.TITLE_SM,
    flex: 1,
    color: COLORS.GRAY_700,
    paddingVertical: 27.5
  },
  investimentsTotalResume: {
    flexDirection: 'column'
  },
  investimentsTotalResumeOriginal: {
    ...FONTS.TEXT_XS,
    color: COLORS.GRAY_600,
    alignSelf: 'flex-end',
    textDecorationLine: 'line-through',
    textDecorationColor: COLORS.GRAY_500
  },
  investimentsTotalResumeValueFinal: {
    flexDirection: 'row'
  },
  investimentsTotalResumeValueFinalCipher: {
    ...FONTS.TEXT_XS,
    color: COLORS.GRAY_700,
    paddingRight: 4,
    paddingBottom: 2,
    alignSelf: 'flex-end'
  },
  investimentsTotalResumeValueFinalValue: {
    ...FONTS.TITLE_LG,
    color: COLORS.GRAY_700
  },
  buttons: {
    flexDirection: "row",
    justifyContent: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.GRAY_200
  },
  buttonCancel: {
    marginRight: 12
  }
});
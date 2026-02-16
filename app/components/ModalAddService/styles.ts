import { StyleSheet } from "react-native";
import { FONTS } from "../../utils/fonts";
import { COLORS } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  content: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 24
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 22,
    borderColor: COLORS.GRAY_200,
    borderBottomWidth: 1
  },
  headerTitle: {
    ...FONTS.TITLE_SM,
    flex: 1,
    color: COLORS.GRAY_700,
    marginRight: 16
  },
  service: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 32
  },
  serviceTitle: {
    marginBottom: 12
  },
  serviceDescription: {
    marginBottom: 12
  },
  serviceDescriptionText: {
    textAlignVertical: 'top'
  },
  serviceDetail: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 32
  },
  serviceDetailValue: {
    flex: 1,
    marginRight: 8
  },
  serviceDetailValuePrefix: {
    ...FONTS.TEXT_MD
  },
  serviceDetailQuantity: {
    alignSelf: 'flex-start'
  },
  serviceDetailQuantityText: {
    textAlign: 'center'
  },
  filterTitle: {
    ...FONTS.TEXT_XS,
    color: COLORS.GRAY_500,
    marginBottom: 16
  },
  filterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginLeft: 8
  },
  filterItemTag: {
    marginLeft: 12
  },
  order: {
    paddingHorizontal: 20,
    marginTop: 20,
    paddingBottom: 32,
    borderColor: COLORS.GRAY_200,
    borderBottomWidth: 1
  },
  orderTitle: {
    ...FONTS.TEXT_XS,
    color: COLORS.GRAY_500,
    marginBottom: 16
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center'
   },
   orderItemText: {
    ...FONTS.TEXT_MD,
    color: COLORS.GRAY_600,
    marginLeft: 4
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.GRAY_200,
  },
  buttonApply: {
    marginLeft: 12
  }
});
import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 32,
		marginTop: 16
	},
	summary: {
		paddingVertical: 20,
		paddingHorizontal: 20.5,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: COLORS.GRAY_200
	},
	search: {
		flexDirection: 'row',
		paddingTop: 24,
		paddingHorizontal: 20
	},
	items: {
		flex: 1,
		paddingHorizontal: 20,
		marginTop: 24
	},
	summaryTexts: {
		flex: 1,
		flexDirection: 'column',
	},
	summaryTitle: {
		...FONTS.TITLE_LG,
		color: COLORS.PURPLE_BASE
	},
	summaryDescription: {
		...FONTS.TEXT_SM,
		color: COLORS.GRAY_500,
		marginTop: 2
	},
	summaryButton: {
		marginLeft: 16,
	},
	searchButton: {
		marginLeft: 8
	},
})
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
        padding: 20,
        flexDirection: 'row'
    },
    search: {
        flex: 1,
        padding: 30,
        marginTop: 20
    },
    items: {
        flex: 1,
        padding: 30,
        marginTop: 20
    },
    summaryTexts: {
        flex: 1,
        flexDirection: 'column',
        marginRight: 16, 
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
    summaryNew: {
        backgroundColor: COLORS.PURPLE_BASE,
        flexDirection: 'row',
        padding: 2,
        width: 98,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
})
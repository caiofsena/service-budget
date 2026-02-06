import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.PURPLE_BASE,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 999,
        padding: 12
    },
    text: {
        ...FONTS.TITLE_SM,
        color: COLORS.WHITE
    },
    textWithIcon: {
        marginLeft: 8
    }
})
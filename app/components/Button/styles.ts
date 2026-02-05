import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.PURPLE_BASE,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    text: {
        ...FONTS.TEXT_SM,
        color: COLORS.WHITE,
        marginLeft: 8
    }
})
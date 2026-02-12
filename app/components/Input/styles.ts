import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderColor: COLORS.GRAY_300,
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: COLORS.GRAY_100
    },
    left: {
        marginRight: 8
    },
    right: {
        marginLeft: 8
    },
    text: {
        flex: 1,
        ...FONTS.TEXT_MD,
        color: COLORS.GRAY_500
    }
});
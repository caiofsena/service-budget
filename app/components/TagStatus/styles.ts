import { StyleSheet } from "react-native";
import { FONTS } from "../../utils/fonts";
import { COLORS } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 6,
      paddingVertical: 4
    },
    circle: {
      width: 8,
      height: 8,
      borderRadius: 999,
      marginLeft: 8
    },
    title: {
      ...FONTS.TITLE_XS,
      color: COLORS.SUCCESS_DARK,
      marginHorizontal: 6
    },
});
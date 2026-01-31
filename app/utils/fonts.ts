import { StyleSheet } from "react-native";

const BASE = 'Lato_400Regular';
const SIZE = {
    LG: 18,
    MD: 16,
    SM: 14,
    XS: 12,
};
const lineHeightPercetual = 1.4;


export const FONTS = StyleSheet.create({
    TITLE_LG: {
        fontFamily: BASE,
        fontSize: SIZE.LG,
        lineHeight: SIZE.LG * lineHeightPercetual,
        fontWeight: 'bold'
    },
    TITLE_MD: {
        fontFamily: BASE,
        fontSize: 16,
        lineHeight: SIZE.MD * lineHeightPercetual,
        fontWeight: 'bold'
    },
    TITLE_SM: {
        fontFamily: BASE,
        fontSize: 14,
        lineHeight: SIZE.SM * lineHeightPercetual,
        fontWeight: 'bold'
    },
    TITLE_XS: {
        fontFamily: BASE,
        fontSize: 12,
        lineHeight: SIZE.XS * lineHeightPercetual,
        fontWeight: 'bold'
    },
    TEXT_MD: {
        fontFamily: BASE,
        fontSize: 16,
        lineHeight: SIZE.MD * lineHeightPercetual,
        fontWeight: 'regular'
    },
    TEXT_SM: {
        fontFamily: BASE,
        fontSize: 14,
        lineHeight: SIZE.SM * lineHeightPercetual,
        fontWeight: 'regular'
    },
    TEXT_XS: {
        fontFamily: BASE,
        fontSize: 12,
        lineHeight: SIZE.XS * lineHeightPercetual,
        fontWeight: 'regular'
    },
});
import { Text, View } from "react-native";
import { COLORS } from "../../utils/colors";
import { styles } from "./styles";
import { Status } from "../../utils/constants";

export const TagStatus = ({ status, style, text }: { status: string, style?: any, text?: string }) => {
  let tagBackgroundColor, tagCircleBackgroundColor, tagTitleColor;
  if (status === Status.APPROVED) {
    tagBackgroundColor = COLORS.SUCCESS_LIGHT;
    tagCircleBackgroundColor = COLORS.SUCCESS_BASE;
    tagTitleColor = COLORS.SUCCESS_DARK;
  } else if (status === Status.DRAFT) {
    tagBackgroundColor = COLORS.GRAY_300;
    tagCircleBackgroundColor = COLORS.GRAY_400;
    tagTitleColor = COLORS.GRAY_500;
  } else if (status === Status.REJECTED) {
    tagBackgroundColor = COLORS.DANGER_LIGHT;
    tagCircleBackgroundColor = COLORS.DANGER_BASE;
    tagTitleColor = COLORS.DANGER_DARK;
  } else if (status === Status.SENT) {
    tagBackgroundColor = COLORS.INFO_LIGHT;
    tagCircleBackgroundColor = COLORS.INFO_BASE;
    tagTitleColor = COLORS.INFO_DARK;
  } else {
    tagBackgroundColor = COLORS.PURPLE_BASE;
    tagCircleBackgroundColor = COLORS.GRAY_100;
    tagTitleColor = COLORS.GRAY_200;
  }

  return (
    <View style={[styles.container, { backgroundColor: tagBackgroundColor }, style]}>
      { !text && <View style={[styles.circle, { backgroundColor: tagCircleBackgroundColor }]} /> }
      <Text style={[styles.title, { color: tagTitleColor }]}>{text ?? status}</Text>
    </View>
  );
}
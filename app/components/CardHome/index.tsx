import { Text, View } from "react-native";
import { styles } from "./styles";
import { COLORS } from "../../utils/colors";

type Props = {
  description: string;
  monetaryValue: string;
  status: string;
  title: string;
};

export const CardHome = ({description, monetaryValue, status, title}: Props) => {
  let tagBackgroundColor, tagCircleBackgroundColor, tagTitleColor;

  if (status === 'Aprovado') {
    tagBackgroundColor = COLORS.SUCCESS_LIGHT;
    tagCircleBackgroundColor = COLORS.SUCCESS_BASE;
    tagTitleColor = COLORS.SUCCESS_DARK;
  } else if (status === 'Rascunho') {
    tagBackgroundColor = COLORS.GRAY_300;
    tagCircleBackgroundColor = COLORS.GRAY_400;
    tagTitleColor = COLORS.GRAY_500;
  } else if (status === 'Recusado') {
    tagBackgroundColor = COLORS.DANGER_LIGHT;
    tagCircleBackgroundColor = COLORS.DANGER_BASE;
    tagTitleColor = COLORS.DANGER_DARK;
  } else if (status === 'Enviado') {
    tagBackgroundColor = COLORS.INFO_LIGHT;
    tagCircleBackgroundColor = COLORS.INFO_BASE;
    tagTitleColor = COLORS.INFO_DARK;
  } else {
    tagBackgroundColor = COLORS.PURPLE_BASE;
    tagCircleBackgroundColor = COLORS.GRAY_100;
    tagTitleColor = COLORS.GRAY_200;
  }

  return (
    <View style={styles.container}>
      <View style={styles.texts}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View>
        <View style={[styles.tag, { backgroundColor: tagBackgroundColor }]}>
          <View style={[styles.tagCircle, { backgroundColor: tagCircleBackgroundColor }]} />
          <Text style={[styles.tagTitle, { color: tagTitleColor }]}>{status}</Text>
        </View>
        <View style={styles.monetaryValue}>
          <Text style={styles.monetaryValueCipher}>R$</Text>
          <Text style={styles.monetaryValueNumber}>{monetaryValue}</Text>
        </View>
      </View>
    </View>
  );
} 
import { Text, View } from "react-native";
import { styles } from "./styles";
import { PencilLine } from "lucide-react-native";
import { COLORS } from "../../utils/colors";

type Props = {
  title: string;
  description: string;
  money: string;
  quantity: number;
  showAllTextDescription?: boolean;
  onPressEdit?: () => void;
}

export const CardService = ({ title, description, money, quantity, showAllTextDescription = false, onPressEdit }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.information}>
          <Text style={styles.informationText}>{title}</Text>
          <Text style={styles.detailText} numberOfLines={showAllTextDescription ? 0 : 1}>{description}</Text>
        </View>
        <View style={styles.detail}>
          <View style={styles.informationMoney}>
            <Text style={styles.informationMoneyCipher}>R$</Text>
            <Text style={styles.informationMoneyValue}>{money}</Text>
          </View>
          <Text style={styles.detailQuantity}>Qt: {quantity}</Text>
        </View>
      </View>
      { onPressEdit && 
        <PencilLine 
          style={styles.detailIcon} 
          size={20} 
          color={COLORS.PURPLE_BASE} 
          onPress={onPressEdit}
        />
      }
    </View>
  );
}
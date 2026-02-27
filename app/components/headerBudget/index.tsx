import { Text } from "react-native";
import { styles } from "./styles";
import { ChevronLeft } from "lucide-react-native";
import { COLORS } from "../../utils/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Status } from "../../utils/constants";
import { TagStatus } from "../TagStatus";

export const HeaderBudget = ({status, id}: {status?: Status, id?: string}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ChevronLeft color={COLORS.GRAY_600} onPress={() => navigation.goBack()} />
      <Text style={styles.text}>Orçamento{id ? ` #${id}` : ''}</Text>
      { status && <TagStatus status={status} /> }
    </SafeAreaView>
  );
}
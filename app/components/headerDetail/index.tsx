import { Text } from "react-native";
import { styles } from "./styles";
import { ChevronLeft } from "lucide-react-native";
import { COLORS } from "../../utils/colors";
import { TagStatus } from "../TagStatus";
import { Status } from "../../utils/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export const HeaderDetail = ({status, id}: {status: Status, id: string}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ChevronLeft color={COLORS.GRAY_600} onPress={() => navigation.navigate('Home')} />
      <Text style={styles.text}>Orçamento{` #${id}`}</Text>
      <TagStatus status={status} />
    </SafeAreaView>
  );
}
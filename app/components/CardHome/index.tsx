import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { TagStatus } from "../TagStatus";

type Props = {
  client: string;
  monetaryValue: string;
  status: string;
  title: string;
  onPress: () => void;
};

export const CardHome = ({client, monetaryValue, status, title, onPress}: Props) => {  
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.texts}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{client}</Text>
        </View>
        <View>
          <TagStatus style={styles.tag} status={status} />
          <View style={styles.monetaryValue}>
            <Text style={styles.monetaryValueCipher}>R$</Text>
            <Text style={styles.monetaryValueNumber}>{monetaryValue}</Text>
          </View>
        </View>
    </TouchableOpacity>
  );
} 
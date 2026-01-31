import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { PlusIcon } from 'lucide-react-native';

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.summary}>
                <View style={styles.summaryTexts}>
                    <Text style={styles.summaryTitle}>Orçamentos</Text>
                    <Text style={styles.summaryDescription}>Você tem 1 item em rascunho</Text>
                </View>
                <TouchableOpacity style={styles.summaryNew}>
                    <PlusIcon />
                    <Text>Novo</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.search}></View>
            <View style={styles.items}></View>
        </View>
    );
}
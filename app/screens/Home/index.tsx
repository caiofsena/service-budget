import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { Plus, Search, SlidersHorizontal } from 'lucide-react-native';
import { COLORS } from "../../utils/colors";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { CardHome } from "../../components/CardHome";
import { DATA_SERVICES_ITEMS } from "../../utils/constants";

export const HomeScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.summary}>
				<View style={styles.summaryTexts}>
					<Text style={styles.summaryTitle}>Orçamentos</Text>
					<Text style={styles.summaryDescription}>Você tem 1 item em rascunho</Text>
				</View>
				<View style={styles.summaryButton}>
					<Button icon={<Plus color={COLORS.WHITE} />} label="Novo" />
				</View>
			</View>
			<View style={styles.search}>
				<Input 
					icon={<Search color={COLORS.GRAY_500} size={20} />} 
					placeholder="Título ou cliente" 
					onChangeText={() => {}} 
					value="" 
					width={310} 
				/>
				<View style={styles.searchButton}>
					<Button 
						width={48} 
						height={48} 
						borderColor={COLORS.GRAY_300} 
						color={COLORS.GRAY_100} 
						icon={<SlidersHorizontal color={COLORS.PURPLE_BASE} />}
					/>
				</View>
			</View>
			<View style={styles.items}>
				<FlatList
					data={DATA_SERVICES_ITEMS}
					keyExtractor={item => String(item.title)}
					renderItem={({ item }) => <CardHome {...item} />}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
	);
}
import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { Plus, Search, SlidersHorizontal } from 'lucide-react-native';
import { COLORS } from "../../utils/colors";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { CardHome } from "../../components/CardHome";
import { DATA_SERVICES_ITEMS } from "../../utils/constants";
import { useState } from "react";
import { ModalFilter } from "../../components/ModalFilter";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
	const navigation = useNavigation();
	const [modalFilterVisible, setModalFilterVisible] = useState(false);

	const handleSummaryButtonPress = () => {
		navigation.navigate('Budget');
	}

	const handleDetailButtonPress = () => {
		navigation.navigate('Detail');
	}

	const handleFilterButtonPress = () => {
		setModalFilterVisible(true);
	}

	const handleFilterButtonClose = () => {
		setModalFilterVisible(false);
	}

	return (
		<View style={styles.container}>
			<View style={styles.summary}>
				<View style={styles.summaryTexts}>
					<Text style={styles.summaryTitle}>Orçamentos</Text>
					<Text style={styles.summaryDescription}>Você tem 1 item em rascunho</Text>
				</View>
				<View style={styles.summaryButton}>
					<Button 
						icon={<Plus color={COLORS.WHITE} />} 
						label="Novo" 
						onPress={handleSummaryButtonPress} 
						height={48}
					/>
				</View>
			</View>
			<View style={styles.search}>
				<Input 
					left={<Search color={COLORS.GRAY_500} size={20} />} 
					placeholder="Título ou cliente" 
					value="" 
					height={48}
					width={310} 
					onChangeText={() => {}} 
				/>
				<View style={styles.searchButton}>
					<Button 
						width={48} 
						height={48} 
						borderColor={COLORS.GRAY_300} 
						color={COLORS.GRAY_100} 
						icon={<SlidersHorizontal color={COLORS.PURPLE_BASE} />}
						onPress={handleFilterButtonPress}
					/>
				</View>
			</View>
			<View style={styles.items}>
				<FlatList
					data={DATA_SERVICES_ITEMS}
					keyExtractor={item => String(item.title)}
					renderItem={({ item }) => <CardHome {...item} onPress={handleDetailButtonPress} />}
					showsVerticalScrollIndicator={false}
				/>
			</View>
			<ModalFilter
				animationType="slide"
				transparent
				visible={modalFilterVisible} 
				onRequestClose={handleFilterButtonClose}
			/>
		</View>
	);
}
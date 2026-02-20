import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { Plus, Search, SlidersHorizontal } from 'lucide-react-native';
import { COLORS } from "../../utils/colors";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { CardHome } from "../../components/CardHome";
import { useEffect, useState } from "react";
import { ModalFilter } from "../../components/ModalFilter";
import { useNavigation } from "@react-navigation/native";
import { Budget } from "../../data/models";
import { getAllBudgets } from "../../data/actions";

export const HomeScreen = () => {
	const navigation = useNavigation();
	const [budgets, setBudgets] = useState<Budget[]>([]);
	const [modalFilterVisible, setModalFilterVisible] = useState(false);
	
	const loader = async () => {
		const all = await getAllBudgets();
		if (all) {
			setBudgets(all);
		}
	}

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

	useEffect(() => {
		loader();
	}, [])

	// useEffect(() => {
	// 	loader();
	// 	console.log('EFFECT BUDGETS');
	// }, [budgets])

	return (
		<>
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
					data={budgets}
					keyExtractor={item => String(item.id)}
					renderItem={
						({ item }) => 
							<CardHome 
								title={item.title} 
								client={item.client} 
								status={item.status} 
								onPress={handleDetailButtonPress} 
							/>
					}
					showsVerticalScrollIndicator={false}
					ListEmptyComponent={<View style={{ alignItems: 'center' }}><Text>Sem orçamentos aqui!</Text></View>}
				/>
			</View>
		</View>
		<ModalFilter visible={modalFilterVisible} onDismiss={handleFilterButtonClose} />
		</>
	);
}
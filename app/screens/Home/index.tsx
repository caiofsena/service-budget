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
import { totalValue } from "../../utils/helpers";
import { Order, Status } from "../../utils/constants";

export const HomeScreen = () => {
	const navigation = useNavigation();
	const [budgets, setBudgets] = useState<Budget[]>([]);
	const [filteredBudgets, setFilteredBudgets] = useState<Budget[]>([]);
	const [modalFilterVisible, setModalFilterVisible] = useState(false);
	const [filterTitleOrClient, setFilterTitleOrClient] = useState('');
	const [filterStatus, setFilterStatus] = useState<Status[]>([]);
	const [ordering, setOrdering] = useState<Order>(Order.MOST_RECENT);

	const loader = async () => {
		let all = await getAllBudgets();
		if (all) {
			all = all.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
			setBudgets(all);
			setFilteredBudgets(all);
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

	const qtyDraftBudgets = () => {
		let qty = 0;
		budgets.forEach(item => {
			if (item.status === Status.DRAFT) {
				qty += 1;
			}
		});
		return qty;
	}

	const resetFilters = () => {
		setFilteredBudgets(budgets);
	}

	const filterByTitleOrClient = (text: string) => {
		setFilterTitleOrClient(text);
		if (text) {
			const filtered = 
				filteredBudgets.filter(item => 
					(item.title.toLowerCase().includes(text.toLowerCase()) || 
						item.client.toLowerCase().includes(text.toLowerCase())) 
				);
			setFilteredBudgets(filtered);
		} else {
			resetFilters();
		}
	}

	const handleFilterAndOrder = () => {
		let filtered = filteredBudgets;

		if (filterStatus && filterStatus.length > 0) {
			filtered = filtered.filter(item => filterStatus.find(status => status === item.status));
		} 

		if (ordering) {
			if (ordering === Order.MOST_RECENT) {
				filtered = filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
			}
			if (ordering === Order.OLDEST) {
				filtered = filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
			}
			if (ordering === Order.HIGHEST_VALUE) {
				filtered = filtered.sort((a, b) => Number(b.total) - Number(a.total));
			}
			if (ordering === Order.LOWEST_VALUE) {
				filtered = filtered.sort((a, b) => Number(a.total) - Number(b.total));
			}
		}

		if (filtered) {
			setFilteredBudgets(filtered);
		}

		handleFilterButtonClose();
	}

	const handleResetFilters = () => {
		resetFilters();
		handleFilterButtonClose();
	}

	useEffect(() => {
		loader();
	}, [])

	return (
		<>
		<View style={styles.container}>
			<View style={styles.summary}>
				<View style={styles.summaryTexts}>
					<Text style={styles.summaryTitle}>Orçamentos</Text>
					<Text style={styles.summaryDescription}>Você tem {qtyDraftBudgets()} {qtyDraftBudgets() > 1 ? 'itens' : 'item' } em rascunho</Text>
				</View>
				<View style={styles.summaryButton}>
					<Button 
						icon={<Plus color={COLORS.WHITE} />} 
						label='Novo'
						onPress={handleSummaryButtonPress} 
						height={48}
					/>
				</View>
			</View>
			<View style={styles.search}>
				<Input 
					left={<Search color={COLORS.GRAY_500} size={20} />} 
					placeholder='Título ou cliente'
					value={filterTitleOrClient}
					height={48}
					width={310} 
					onChangeText={filterByTitleOrClient}
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
					data={filteredBudgets}
					keyExtractor={item => String(item.id)}
					renderItem={
						({ item }) => 
							<CardHome 
								key={item.id}
								{...item}
								monetaryValue={item.total ? totalValue(item.total, item.discountPct) : ''}
								onPress={handleDetailButtonPress} 
							/>
					}
					showsVerticalScrollIndicator={false}
					ListEmptyComponent={<View style={{ alignItems: 'center' }}><Text>Sem orçamentos aqui!</Text></View>}
				/>
			</View>
		</View>
		<ModalFilter 
			listFilter={filterStatus}
			order={ordering}
			setListFilter={setFilterStatus}
			setOrder={setOrdering}
			apply={handleFilterAndOrder}
			reset={handleResetFilters}
			visible={modalFilterVisible} 
			onDismiss={handleFilterButtonClose}
		/>
		</>
	);
}
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Budget } from './models';

const store = '@SB:';

export const getAllBudgets = async () => {
  try {
    const budgets = await AsyncStorage.getItem(store+'budgets');
    if (!budgets) {
      await AsyncStorage.setItem(store+'budgets', JSON.stringify([]));
    }
    return budgets ? JSON.parse(budgets) as Budget[] : null;
  } catch (error) {
    console.log('Erro ao recuperar as informações - getAllBudgets: ', error);
  }
}

export const getBudget = async (id: string) => {
  const budgets = await getAllBudgets();
  const filteredBudget = budgets ? budgets.find((item) => item.id === id) : null;
  return filteredBudget;
}

export const saveBudget = async (newBudget: Budget) => {
  try {
    const budgets = await getAllBudgets();
    if (budgets) {
      budgets.push(newBudget);
      const newBudgets = JSON.stringify(budgets);
      await AsyncStorage.setItem(store+'budgets', newBudgets);
    } else {
      throw new Error('Erro ao recuperar as informações - saveBudget');
    }
  } catch (error) {
    console.log('Erro ao salvar as informações - saveBudget: ', error);
  }
}

export const removeBudget = async (id: string) => {
  try {
    const budgets = await getAllBudgets();
    if (budgets) {
      const filteredBudget = budgets ? budgets.find((item) => item.id !== id) : null;
      const newBudgets = JSON.stringify(filteredBudget);
      await AsyncStorage.setItem(store+'budgets', newBudgets);
    } else {
      throw new Error('Erro ao recuperar as informações - removeBudget');
    }
    const filteredBudget = budgets ? budgets.find((item) => item.id !== id) : null;
  } catch (error) {
    console.log('Erro ao remover as informações - removeBudget: ', error);    
  }
  
}
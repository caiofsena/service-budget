import { Alert, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { Check, CreditCard, Percent, Plus, ReceiptText, Store, Tag } from "lucide-react-native";
import { COLORS } from "../../utils/colors";
import { Input } from "../../components/Input";
import { RadioButton } from "../../components/RadioButton";
import { Status } from "../../utils/constants";
import { useState } from "react";
import { TagStatus } from "../../components/TagStatus";
import { CardService } from "../../components/CardService";
import { Button } from "../../components/Button";
import { ModalAddService } from "../../components/ModalAddService";
import { HeaderBudget } from "../../components/headerBudget";
import { Budget, Service } from "../../data/models";
import { useNavigation } from "@react-navigation/native";
import { generateNewId } from "../../utils/helpers";
import { saveBudget } from "../../data/actions";

export const BudgetScreen = () => {
  const navigation = useNavigation();
  const [modalAddServiceVisible, setModalServiceVisible] = useState(false);
  const [ title, setTitle ] = useState('');
  const [ client, setClient ] = useState('');
  const [statusChecked, setsStatusChecked] = useState(Status.DRAFT);
  const [ services, setServices ] = useState<Service[]>([]);
  const [ discountPct, setDiscountPct ] = useState('');

  const save = async () => {
    let newBudget: Budget = {
      id: generateNewId(),
      title,
      client,
      status: statusChecked,
      // items: [],
      createdAt: new Date()
    };
    if (discountPct) {
      newBudget = { ...newBudget, discountPct: discountPct }
    }
    await saveBudget(newBudget);
    Alert.alert('Orçamento registrado!')
    navigation.navigate('Home');
  }
  
  const handleAddServiceButtonPress = () => {
		setModalServiceVisible(true);
	}

	const handleAddServiceButtonClose = () => {
		setModalServiceVisible(false);
	}

  const handleSubmit = () => {
    save();
  }

  const handleCancel = () => {
    navigation.goBack();
  }

  return (
    <>
      <HeaderBudget />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.generalInformation}>
            <View style={styles.generalInformationTitle}>
              <Store size={16} color={COLORS.PURPLE_BASE} />
              <Text style={styles.generalInformationTitleText}>Informações gerais</Text>
            </View>
            <View style={styles.generalInformationData}>
              <Input 
                placeholder="Título" 
                value={title}
                onChangeText={setTitle} 
                height={48}
                />
              <Input 
                style={styles.generalInformationDataClient}
                placeholder="Cliente" 
                value={client}
                height={48}
                onChangeText={setClient} 
              />
            </View>
          </View>
          <View style={styles.status}>
            <View style={styles.statusTitle}>
              <Tag size={16} color={COLORS.PURPLE_BASE} />
              <Text style={styles.statusTitleText}>Status</Text>
            </View>
            <View style={styles.statusData}>
              <View style={styles.statusDataLine}>
                <View style={styles.statusDataItem}>
                  <RadioButton
                    value={statusChecked}
                    validate={Status.DRAFT}
                    onPress={() => setsStatusChecked(Status.DRAFT)}
                  />
                  <TagStatus style={styles.statusDataItemTag} status={Status.DRAFT} />
                </View>
                <View style={styles.statusDataItem}>
                  <RadioButton
                    value={statusChecked}
                    validate={Status.APPROVED}
                    onPress={() => setsStatusChecked(Status.APPROVED)}
                  />
                  <TagStatus style={styles.statusDataItemTag} status={Status.APPROVED} />
                </View>
              </View>
              <View style={styles.statusDataLine}>
                <View style={styles.statusDataItem}>
                  <RadioButton
                    value={statusChecked}
                    validate={Status.SENT}
                    onPress={() => setsStatusChecked(Status.SENT)}
                  />
                  <TagStatus style={styles.statusDataItemTag} status={Status.SENT} />
                </View>
                <View style={styles.statusDataItem}>
                  <RadioButton
                    value={statusChecked}
                    validate={Status.REJECTED}
                    onPress={() => setsStatusChecked(Status.REJECTED)}
                  />
                  <TagStatus style={styles.statusDataItemTag} status={Status.REJECTED} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.servicesIncluded}>
            <View style={styles.servicesIncludedTitle}>
              <ReceiptText size={16} color={COLORS.PURPLE_BASE} />
              <Text style={styles.servicesIncludedTitleText}>Serviços incluídos</Text>
            </View>
            <View style={styles.servicesIncludedData}>
              { services && services.map((item) => {
                return (
                  <CardService 
                    {...item} 
                    onPressEdit={() => {console.log('pressed card service')}}  
                  />
                )
              }) }
            </View>
            <View style={styles.servicesIncludedAddButton}>
              <Button
                label="Adicionar serviço"
                icon={<Plus size={24} color={COLORS.PURPLE_BASE} />}
                color={COLORS.GRAY_100}
                textColor={COLORS.PURPLE_BASE}
                borderColor={COLORS.GRAY_300}
                onPress={handleAddServiceButtonPress}
              />
            </View>
          </View>
          <View style={styles.investiments}>
            <View style={styles.investimentsTitle}>
              <CreditCard size={16} color={COLORS.PURPLE_BASE} />
              <Text style={styles.investimentsTitleText}>Investimento</Text>
            </View>
            <View style={styles.investimentsSubtotal}>
              <Text style={styles.investimentsSubtotalText}>Subtotal</Text>
              <Text style={styles.investimentsSubtotalItems}>8 itens</Text>
              <Text style={styles.investimentsSubtotalCipher}>R$</Text>
              <Text style={styles.investimentsSubtotalValue}>3.847,50</Text>
            </View>
            <View style={styles.investimentsDiscount}>
              <View style={styles.investimentsDiscountPercentage}>
                <Text style={styles.investimentsDiscountPercentageText}>Desconto</Text>
                <Input
                  style={styles.investimentsDiscountPercentageValue}
                  styleText={styles.investimentsDiscountPercentageValueText}
                  height={38}
                  width={94}
                  maxLength={3}
                  value={discountPct}
                  keyboardType="numeric"
                  right={<Percent size={16} />}
                  onChangeText={setDiscountPct}
                />
              </View>
              <Text style={styles.investimentsDiscountReduceCipher}>- R$</Text>
              <Text style={styles.investimentsDiscountReduceValue}>200,00</Text>
            </View>
            <View style={styles.investimentsTotal}>
              <Text style={styles.investimentsTotalText}>Valor total</Text>
              <View style={styles.investimentsTotalResume}>
                <Text style={styles.investimentsTotalResumeOriginal}>R$ 4.050,00</Text>
                <View style={styles.investimentsTotalResumeValueFinal}>
                  <Text style={styles.investimentsTotalResumeValueFinalCipher}>R$</Text>
                  <Text style={styles.investimentsTotalResumeValueFinalValue}>3.847,50</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttons}>
        <Button
          style={styles.buttonCancel}
          label="Cancelar"
          width={95}
          height={48}
          color={COLORS.GRAY_100}
          textColor={COLORS.PURPLE_BASE}
          borderColor={COLORS.GRAY_300}
          onPress={handleCancel}
          />
        <Button 
          label="Salvar"
          width={95}
          height={48}
          icon={<Check color={COLORS.WHITE} />}
          onPress={handleSubmit}
        />
      </View>
      <ModalAddService
        visible={modalAddServiceVisible} 
        onDismiss={handleAddServiceButtonClose}
      />
    </>
  );
}
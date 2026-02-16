import { ScrollView, Text, View } from "react-native";
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

export const BudgetScreen = () => {
  const [statusChecked, setsStatusChecked] = useState(Status.DRAFT);
  const [modalAddServiceVisible, setModalServiceVisible] = useState(false);
  
  const handleAddServiceButtonPress = () => {
		setModalServiceVisible(true);
	}

	const handleAddServiceButtonClose = () => {
		setModalServiceVisible(false);
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
                value="" 
                onChangeText={() => {}} 
                height={48}
                />
              <Input 
                style={styles.generalInformationDataClient}
                placeholder="Cliente" 
                value="" 
                height={48}
                onChangeText={() => {}} 
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
              <CardService 
                title="Design de interfaces" 
                description="Criação de wireframes e protótipos de alta fidelidade" 
                money="3.847,50" 
                quantity={1} 
                onPressEdit={() => {console.log('pressed card service')}} 
              />
              <CardService 
                title="Design de interfaces" 
                description="Criação de wireframes e protótipos de alta fidelidade" 
                money="3.847,50" 
                quantity={1} 
                onPressEdit={() => {console.log('pressed card service')}} 
              />
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
                  keyboardType="numeric"
                  right={<Percent size={16} />}
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
        <View style={styles.buttons}>
          <Button
            style={styles.buttonCancel}
            label="Cancelar"
            width={95}
            height={48}
            color={COLORS.GRAY_100}
            textColor={COLORS.PURPLE_BASE}
            borderColor={COLORS.GRAY_300}
            onPress={() => {console.log('pressed cancel')}}
            />
          <Button 
            label="Salvar"
            width={95}
            height={48}
            icon={<Check color={COLORS.WHITE} />}
            onPress={() => {console.log('pressed save')}}
          />
        </View>
      </ScrollView>
      <ModalAddService
        visible={modalAddServiceVisible} 
        onDismiss={handleAddServiceButtonClose}
      />
    </>
  );
}
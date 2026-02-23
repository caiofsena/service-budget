import { Alert, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { Check, CreditCard, Percent, Plus, ReceiptText, Store, Tag } from "lucide-react-native";
import { COLORS } from "../../utils/colors";
import { Input } from "../../components/Input";
import { RadioButton } from "../../components/RadioButton";
import { Status } from "../../utils/constants";
import { useEffect, useState } from "react";
import { TagStatus } from "../../components/TagStatus";
import { CardService } from "../../components/CardService";
import { Button } from "../../components/Button";
import { ModalAddService } from "../../components/ModalAddService";
import { HeaderBudget } from "../../components/headerBudget";
import { Budget, Service } from "../../data/models";
import { useNavigation } from "@react-navigation/native";
import { generateNewId, totalDiscountValue } from "../../utils/helpers";
import { saveBudget } from "../../data/actions";

export const BudgetScreen = () => {
  const navigation = useNavigation();
  const [modalAddServiceVisible, setModalServiceVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [client, setClient] = useState('');
  const [statusChecked, setsStatusChecked] = useState(Status.DRAFT);
  const [services, setServices] = useState<Service[]>([]);
  const [discountPct, setDiscountPct] = useState('');
  const [total, setTotal] = useState('0');
  const [qty, setQty] = useState('0');
  const [serviceId, setServiceId] = useState('');
  const [serviceTitle, setServiceTitle] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [servicePrice, setServicePrice] = useState('');
  const [serviceQty, setServiceQty] = useState('1');

  const clearServiceFields = () => {
    setServiceId('');
    setServiceTitle('');
    setServiceDescription('');
    setServicePrice('');
    setServiceQty('1');
  }

  const handleServiceAdd = () => {
		setModalServiceVisible(true);
	}

  const handleServiceEdit = (id: string) => {
    const filteredService = services.find(item => item.id === id);
    if (filteredService) {
      setServiceId(filteredService.id);
      setServiceTitle(filteredService.title);
      setServiceDescription(filteredService.description);
      setServicePrice(filteredService.price);
      setServiceQty(filteredService.qty);
      setModalServiceVisible(true);
    }
	}

	const handleServiceClose = () => {
    clearServiceFields();
		setModalServiceVisible(false);
	}

	const handleServiceRemove = (id: string) => {
		const filteredRemoveService = services.filter(item => item.id != id);
    setServices(filteredRemoveService);
    handleServiceClose();
	}
  
	const handleServiceSave = async (id?: string) => {
    let newService: Service;
    if (id) {
      const updatedServices = services.map(item => {
        if (item.id === id) {
          return {
            ...item,
            title: serviceTitle,
            description: serviceDescription,
            price: servicePrice,
            qty: serviceQty    
          } as Service
        }
        return item;
      });
      if (updatedServices) {
        setServices(updatedServices as Service[]);
        Alert.alert('Serviço atualizado!');
      }
    } else {
      newService = {
        id: generateNewId(),
        title: serviceTitle,
        description: serviceDescription,
        price: servicePrice,
        qty: serviceQty
      };
      const updatedServices = [...services, newService] as Service[];
      setServices(updatedServices)
      Alert.alert('Serviço registrado!');
    }
    handleServiceClose();
	}

  const save = async () => {
    let newBudget: Budget = {
      id: generateNewId(),
      title,
      client,
      status: statusChecked,
      items: services,
      total,
      qty,
      createdAt: new Date()
    };
    if (discountPct) {
      newBudget = { ...newBudget, discountPct: discountPct }
    }
    await saveBudget(newBudget);
    Alert.alert('Orçamento registrado!')
    navigation.navigate('Home');
  }

  const handleSubmit = () => {
    save();
  }

  const handleCancel = () => {
    navigation.goBack();
  }

  useEffect(() => {
    let updatedTotal = 0, updatedQty = 0;
    setTotal('0');
    setQty('0');
    services.forEach((item, index) => {
      updatedTotal += Number(item.price) * Number(item.qty); 
      updatedQty += Number(item.qty);      
    })
    setTotal(String(updatedTotal));
    setQty(String(updatedQty));
  }, [services])

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
                    key={item.id}
                    {...item}
                    onPressEdit={() => handleServiceEdit(item.id)}
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
                onPress={handleServiceAdd}
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
              <Text style={styles.investimentsSubtotalItems}>{qty} {`${Number(qty) > 1 ? 'itens' : 'item' }`}</Text>
              <Text style={styles.investimentsSubtotalCipher}>R$</Text>
              <Text style={styles.investimentsSubtotalValue}>{total}</Text>
            </View>
            <View style={styles.investimentsDiscount}>
              <View style={styles.investimentsDiscountPercentage}>
                <Text style={styles.investimentsDiscountPercentageText}>Desconto</Text>
                <Input
                  style={styles.investimentsDiscountPercentageValue}
                  styleText={styles.investimentsDiscountPercentageValueText}
                  height={38}
                  width={94}
                  maxLength={2}
                  value={discountPct}
                  placeholder={'0'}
                  keyboardType='numeric'
                  right={<Percent size={16} />}
                  onChangeText={setDiscountPct}
                  editable={services && services.length > 0 ? true : false}
                />
              </View>
              { Number(discountPct) > 0 &&  <View style={styles.investimentsDiscountReduce}>
                <Text style={styles.investimentsDiscountReduceCipher}>- R$</Text>
                <Text style={styles.investimentsDiscountReduceValue}>{totalDiscountValue(total, discountPct)}</Text>
              </View> }
            </View>
            <View style={styles.investimentsTotal}>
              <Text style={styles.investimentsTotalText}>Valor total</Text>
              <View style={styles.investimentsTotalResume}>
                { Number(discountPct) > 0 && <Text style={styles.investimentsTotalResumeOriginal}>{total}</Text> }
                <View style={styles.investimentsTotalResumeValueFinal}>
                  <Text style={styles.investimentsTotalResumeValueFinalCipher}>R$</Text>
                  <Text style={styles.investimentsTotalResumeValueFinalValue}>{Number(total) - Number(totalDiscountValue(total, discountPct))}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttons}>
        <Button
          style={styles.buttonCancel}
          label='Cancelar'
          width={95}
          height={48}
          color={COLORS.GRAY_100}
          textColor={COLORS.PURPLE_BASE}
          borderColor={COLORS.GRAY_300}
          onPress={handleCancel}
          />
        <Button 
          label='Salvar'
          width={95}
          height={48}
          icon={<Check color={COLORS.WHITE} />}
          onPress={handleSubmit}
        />
      </View>
      <ModalAddService
        id={serviceId}
        title={serviceTitle}
        description={serviceDescription}
        price={servicePrice}
        qty={serviceQty}
        setTitle={setServiceTitle}
        setDescription={setServiceDescription}
        setPrice={setServicePrice}
        setQty={setServiceQty}
        visible={modalAddServiceVisible} 
        onDismiss={handleServiceClose}
        onRemove={handleServiceRemove}
        onSave={handleServiceSave}
      />
    </>
  );
}
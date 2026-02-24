import { Check, X } from "lucide-react-native";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { TagStatus } from "../TagStatus";
import { Order, Status } from "../../utils/constants";
import { useState } from "react";
import { Checkbox } from "../Checkbox";
import { RadioButton } from "../RadioButton";
import { Button } from "../Button";
import { COLORS } from "../../utils/colors";
import { Modal } from "react-native-paper";

type Props = {
  listFilter: Status[];
  order: Order; 
  setListFilter: (filter: Status[]) => void;
  setOrder: (order: Order) => void; 
  visible: boolean; 
  apply: () => void; 
  reset: () => void;
  onDismiss: () => void;
}

export const ModalFilter = (
  { listFilter, order, setListFilter, setOrder, visible, apply, reset, onDismiss }: Props
) => {
  const [isDraftChecked, setDraftChecked] = useState(false);
  const [isSentChecked, setSentChecked] = useState(false);
  const [isApprovedChecked, setApprovedChecked] = useState(false);
  const [isRejectedChecked, setRejectedChecked] = useState(false);
  const [orderChecked, setOrderChecked] = useState(order);

  const updateFilter = (status: Status, isChecked: boolean) => {
    const indexStatus = listFilter.indexOf(status);
    if (isChecked) {
      listFilter.push(status);
    } else {
      if (indexStatus > -1) {
        listFilter.splice(indexStatus, 1);
      }
    }
    setListFilter(listFilter);
  }

  const updateOrder = (order: Order) => {
    setOrderChecked(order);
    setOrder(order);
  }

  const handleReset = () => {
    setDraftChecked(false);
    setSentChecked(false);
    setApprovedChecked(false);
    setRejectedChecked(false);
    setOrderChecked(Order.MOST_RECENT);
    reset();
  } 

  return (
    <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Filtrar e ordenar</Text>
          <X size={24} onPress={onDismiss} />
        </View>
        <View style={styles.filter}>
          <Text style={styles.filterTitle}>Status</Text>
          <View style={styles.filterItem}>
            <Checkbox value={isDraftChecked} onValueChange={(value) => {setDraftChecked(value); updateFilter(Status.DRAFT, value);}} />
            <TagStatus style={styles.filterItemTag} status={Status.DRAFT} />
          </View>
          <View style={styles.filterItem}>
            <Checkbox value={isSentChecked} onValueChange={(value) => {setSentChecked(value); updateFilter(Status.SENT, value);}}/>
            <TagStatus style={styles.filterItemTag} status={Status.SENT} />
          </View>
          <View style={styles.filterItem}>
            <Checkbox value={isApprovedChecked} onValueChange={(value) => { setApprovedChecked(value); updateFilter(Status.APPROVED, value)}}/>
            <TagStatus style={styles.filterItemTag} status={Status.APPROVED} />
          </View>
          <View style={styles.filterItem}>
            <Checkbox value={isRejectedChecked} onValueChange={(value) => {setRejectedChecked(value); updateFilter(Status.REJECTED, value);}}/>
            <TagStatus style={styles.filterItemTag} status={Status.REJECTED} />
          </View>
        </View>
        <View style={styles.order}>
          <Text style={styles.orderTitle}>Ordenação</Text>
          <View style={styles.orderItem}>
            <RadioButton
              value={orderChecked}
              validate={Order.MOST_RECENT}
              onPress={() => updateOrder(Order.MOST_RECENT)}
            />
            <Text style={styles.orderItemText}>Mais recentes</Text>
          </View>
          <View style={styles.orderItem}>
            <RadioButton
              value={orderChecked}
              validate={Order.OLDEST}
              onPress={() => updateOrder(Order.OLDEST)}
            />
            <Text style={styles.orderItemText}>Mais antigo</Text>
          </View>
          <View style={styles.orderItem}>
            <RadioButton
              value={orderChecked}
              validate={Order.HIGHEST_VALUE}
              onPress={() => updateOrder(Order.HIGHEST_VALUE)}
            />
            <Text style={styles.orderItemText}>Maior valor</Text>
          </View>
          <View style={styles.orderItem}>
            <RadioButton
              value={orderChecked}
              validate={Order.LOWEST_VALUE}
              onPress={() => updateOrder(Order.LOWEST_VALUE)}
            />
            <Text style={styles.orderItemText}>Menor valor</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <Button
            label='Resetar filtros'
            onPress={handleReset}
            height={48}
            color={COLORS.GRAY_100}
            textColor={COLORS.PURPLE_BASE}
            borderColor={COLORS.GRAY_300}
          />
          <Button
            icon={<Check color={COLORS.WHITE} />}
            label='Aplicar'
            onPress={apply}
            height={48}
            style={styles.buttonApply}
          />
        </View>
      </View>
    </Modal>
  );
}
import { Check, X } from "lucide-react-native";
import { Modal, ModalProps, Text, View } from "react-native";
import { styles } from "./styles";
import { TagStatus } from "../TagStatus";
import { Order, Status } from "../../utils/constants";
import { useState } from "react";
import { Checkbox } from "../Checkbox";
import { RadioButton } from "../RadioButton";
import { Button } from "../Button";
import { COLORS } from "../../utils/colors";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export const ModalFilter = (props: ModalProps) => {
  const [isDraftChecked, setDraChecked] = useState(false);
  const [isSentChecked, setSentChecked] = useState(false);
  const [isApprovedChecked, setApprovedChecked] = useState(false);
  const [isRejectedChecked, setRejectedChecked] = useState(false);
  const [orderChecked, setOrderChecked] = useState(Order.MOST_RECENT);

  return (
      <SafeAreaView>
        <Modal {...props}>
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Filtrar e ordenar</Text>
                <X size={24} onPress={props.onRequestClose} />
              </View>
              <View style={styles.filter}>
                <Text style={styles.filterTitle}>Status</Text>
                <View style={styles.filterItem}>
                  <Checkbox value={isDraftChecked} onValueChange={setDraChecked} />
                  <TagStatus style={styles.filterItemTag} status={Status.DRAFT} />
                </View>
                <View style={styles.filterItem}>
                  <Checkbox value={isSentChecked} onValueChange={setSentChecked} />
                  <TagStatus style={styles.filterItemTag} status={Status.SENT} />
                </View>
                <View style={styles.filterItem}>
                  <Checkbox value={isApprovedChecked} onValueChange={setApprovedChecked} />
                  <TagStatus style={styles.filterItemTag} status={Status.APPROVED} />
                </View>
                <View style={styles.filterItem}>
                  <Checkbox value={isRejectedChecked} onValueChange={setRejectedChecked} />
                  <TagStatus style={styles.filterItemTag} status={Status.REJECTED} />
                </View>
              </View>
              <View style={styles.order}>
                <Text style={styles.orderTitle}>Ordenação</Text>
                <View style={styles.orderItem}>
                  <RadioButton
                    value={orderChecked}
                    validate={Order.MOST_RECENT}
                    onPress={() => setOrderChecked(Order.MOST_RECENT)}
                  />
                  <Text style={styles.orderItemText}>Mais recentes</Text>
                </View>
                <View style={styles.orderItem}>
                  <RadioButton
                    value={orderChecked}
                    validate={Order.OLDEST}
                    onPress={() => setOrderChecked(Order.OLDEST)}
                  />
                  <Text style={styles.orderItemText}>Mais antigo</Text>
                </View>
                <View style={styles.orderItem}>
                  <RadioButton
                    value={orderChecked}
                    validate={Order.HIGHEST_VALUE}
                    onPress={() => setOrderChecked(Order.HIGHEST_VALUE)}
                  />
                  <Text style={styles.orderItemText}>Maior valor</Text>
                </View>
                <View style={styles.orderItem}>
                  <RadioButton
                    value={orderChecked}
                    validate={Order.LOWEST_VALUE}
                    onPress={() => setOrderChecked(Order.LOWEST_VALUE)}
                  />
                  <Text style={styles.orderItemText}>Menor valor</Text>
                </View>
              </View>
              <View style={styles.buttons}>
                <Button
                  label="Resetar filtros"
                  onPress={() => {console.log('pressed Resetar filtros')}}
                  height={48}
                  color={COLORS.GRAY_100}
                  textColor={COLORS.PURPLE_BASE}
                  borderColor={COLORS.GRAY_300}
                />
                <Button
                  icon={<Check color={COLORS.WHITE} />}
                  label="Aplicar"
                  onPress={() => {console.log('pressed Aplicar')}}
                  height={48}
                  style={styles.buttonApply}
                />
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
  );
}
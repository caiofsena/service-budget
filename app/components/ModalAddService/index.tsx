import { Check, Minus, Plus, Trash, X } from "lucide-react-native";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Button } from "../Button";
import { COLORS } from "../../utils/colors";
import { Input } from "../Input";
import { Modal } from "react-native-paper";

export const ModalAddService = ({ visible, onDismiss }: {visible: boolean, onDismiss: () => void}) => {
  const [serviceQuantity, setServiceQuantity] = useState('1');

  const handleServiceDetailQuantityAdd = () => {
    if (Number(serviceQuantity) < 99) {
      setServiceQuantity(String(Number(serviceQuantity) + 1));
    }
  }

  const handleServiceDetailQuantityRemove = () => {
    if (Number(serviceQuantity) > 1) {
      setServiceQuantity(String(Number(serviceQuantity) - 1));
    }
  }

  return (
    <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Serviço</Text>
          <X size={24} onPress={onDismiss} />
        </View>
        <View style={styles.service}>
          <Input style={styles.serviceTitle} height={48} placeholder="Título"  />
          <Input 
            style={styles.serviceDescription} 
            styleText={styles.serviceDescriptionText} 
            height={120} 
            multiline  
            placeholder="Descrição"
          />
          <View style={styles.serviceDetail}>
            <Input 
              style={styles.serviceDetailValue} 
              height={48} 
              placeholder="0,00" 
              left={<Text style={styles.serviceDetailValuePrefix}>R$</Text>}
            />
            <Input 
              style={styles.serviceDetailQuantity}
              styleText={styles.serviceDetailQuantityText}
              height={46} 
              width={124}
              value={serviceQuantity}
              editable={false}
              left={<Minus color={COLORS.PURPLE_BASE} onPress={handleServiceDetailQuantityRemove} />}
              right={<Plus color={COLORS.PURPLE_BASE} onPress={handleServiceDetailQuantityAdd} />}
            />
          </View>
        </View>            
        <View style={styles.buttons}>
          <Button
            icon={<Trash color={COLORS.DANGER_BASE} />}
            onPress={() => {console.log('pressed deletar')}}
            height={48}
            color={COLORS.GRAY_100}
            textColor={COLORS.PURPLE_BASE}
            borderColor={COLORS.GRAY_300}
          />
          <Button
            icon={<Check color={COLORS.WHITE} />}
            label="Salvar"
            onPress={() => {console.log('pressed salvar')}}
            height={48}
            style={styles.buttonApply}
          />
        </View>
      </View>
    </Modal>
  );
}
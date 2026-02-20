import { Check, Minus, Plus, Trash, X } from "lucide-react-native";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Button } from "../Button";
import { COLORS } from "../../utils/colors";
import { Input } from "../Input";
import { Modal } from "react-native-paper";

type Props = {
  title: string
  description: string;
  price: string;
  qty: string;
  visible: boolean;
  setTitle: (text: string) => void;
  setDescription: (text: string) => void;
  setPrice: (text: string) => void;
  setQty: (text: string) => void;
  onDismiss: () => void;
  onRemove: () => void;
  onSave: () => void;
}

export const ModalAddService = (
  { title, description, price, qty, visible, setTitle, setDescription, setPrice, setQty, onDismiss, onRemove, onSave }: Props
) => {
  const handleServiceDetailQuantityAdd = () => {
    if (Number(qty) < 99) {
      setQty(String(Number(qty) + 1));
    }
  }

  const handleServiceDetailQuantityRemove = () => {
    if (Number(qty) > 1) {
      setQty(String(Number(qty) - 1));
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
          <Input 
            style={styles.serviceTitle} 
            height={48} 
            placeholder="Título" 
            value={title}  
            onChangeText={setTitle}
          />
          <Input 
            style={styles.serviceDescription} 
            styleText={styles.serviceDescriptionText} 
            height={120} 
            multiline  
            placeholder="Descrição"
            value={description}  
            onChangeText={setDescription}
          />
          <View style={styles.serviceDetail}>
            <Input 
              style={styles.serviceDetailValue} 
              height={48} 
              placeholder="0,00" 
              left={<Text style={styles.serviceDetailValuePrefix}>R$</Text>}
              value={price}  
              onChangeText={setPrice}
            />
            <Input 
              style={styles.serviceDetailQuantity}
              styleText={styles.serviceDetailQuantityText}
              height={46} 
              width={124}
              editable={false}
              left={<Minus color={COLORS.PURPLE_BASE} onPress={handleServiceDetailQuantityRemove} />}
              right={<Plus color={COLORS.PURPLE_BASE} onPress={handleServiceDetailQuantityAdd} />}
              value={qty}  
              onChangeText={setQty}
            />
          </View>
        </View>            
        <View style={styles.buttons}>
          <Button
            icon={<Trash color={COLORS.DANGER_BASE} />}
            height={48}
            color={COLORS.GRAY_100}
            textColor={COLORS.PURPLE_BASE}
            borderColor={COLORS.GRAY_300}
            onPress={onRemove}
          />
          <Button
            style={styles.buttonApply}
            icon={<Check color={COLORS.WHITE} />}
            label="Salvar"
            height={48}
            onPress={onSave}
          />
        </View>
      </View>
    </Modal>
  );
}
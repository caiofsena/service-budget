import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { Copy, CreditCard, Edit, ReceiptText, Send, Store, Trash } from "lucide-react-native";
import { COLORS } from "../../utils/colors";
import { CardService } from "../../components/CardService";
import { TagStatus } from "../../components/TagStatus";
import { Status } from "../../utils/constants";
import { Button } from "../../components/Button";

export const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.highlight}>
            <View style={styles.highlightTitle}>
              <View style={styles.highlightTitleIcon}>
                <Store size={20} color={COLORS.PURPLE_BASE} />
              </View>
              <Text style={styles.highlightTitleText}>Desenvolvimento de aplicativo de loja online</Text>
            </View>
            <View style={styles.highlightData}>
              <View style={styles.highlightDataClient}>
                <Text style={styles.highlightDataClientTitle}>Cliente</Text>
                <Text style={styles.highlightDataClientDescription}>Soluções Tecnológicas Beta</Text>
              </View>
              <View style={styles.highlightDataDate}>
                <View style={styles.highlightDataDateCreated}>
                  <Text style={styles.highlightDataClientTitle}>Criado em</Text>
                  <Text style={styles.highlightDataClientDescription}>22/08/2024</Text>
                </View>
                <View style={styles.highlightDataDateUpdated}>
                  <Text style={styles.highlightDataClientTitle}>Atualizado em</Text>
                  <Text style={styles.highlightDataClientDescription}>25/08/2024</Text>
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
                showAllTextDescription
              />
              <CardService 
                title="Design de interfaces" 
                description="Criação de wireframes e protótipos de alta fidelidade" 
                money="3.847,50" 
                quantity={1}
                showAllTextDescription
              />
            </View>
          </View>
          <View style={styles.resume}>
            <View style={styles.resumeIcon}>
              <View style={styles.resumeIconItem}>
                <CreditCard size={20} color={COLORS.PURPLE_BASE} />
              </View>
            </View>
            <View style={styles.resumeValue}>
              <View style={styles.resumeValueData}>
                <View style={styles.resumeValueDataSubtotal}>
                  <Text style={styles.resumeValueDataSubtotalTitle}>Subtotal</Text>
                  <Text style={styles.resumeValueDataSubtotalDescription}>R$ 4.050,00</Text>
                </View>
                <View style={styles.resumeValueDataDiscount}>
                  <View style={styles.resumeValueDataDiscountText}>
                    <Text style={styles.resumeValueDataDiscountTitle}>Desconto</Text>
                    <TagStatus style={styles.resumeValueDataDiscountTag} status={Status.APPROVED} text="5% off" />
                  </View>
                  <Text style={styles.resumeValueDataDiscountDescription}>- R$ 200,00</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.resumeValueDataTotal}>
                  <Text style={styles.resumeValueDataTotalTitle}>Investimento total</Text>
                  <View style={styles.resumeValueDataTotalDescription}>
                    <Text style={styles.resumeValueDataTotalDescriptionCipher}>R$</Text>
                    <Text style={styles.resumeValueDataTotalDescriptionMoney}>4.050,00</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttons}>
        <View style={styles.buttonsOnlyIcon}>
          <Button
            icon={<Trash color={COLORS.DANGER_BASE} />}
            onPress={() => {console.log('pressed deletar')}}
            height={48}
            width={48}
            color={COLORS.GRAY_100}
            textColor={COLORS.PURPLE_BASE}
            borderColor={COLORS.GRAY_300}
          />
          <Button
            icon={<Copy color={COLORS.PURPLE_BASE} />}
            onPress={() => {console.log('pressed salvar')}}
            height={48}
            width={48}
            color={COLORS.GRAY_100}
            textColor={COLORS.PURPLE_BASE}
            borderColor={COLORS.GRAY_300}
            style={styles.buttonCopy}
          />
          <Button
            icon={<Edit color={COLORS.PURPLE_BASE} />}
            onPress={() => {console.log('pressed salvar')}}
            height={48}
            width={48}
            color={COLORS.GRAY_100}
            textColor={COLORS.PURPLE_BASE}
            borderColor={COLORS.GRAY_300}
            style={styles.buttonEdit}
          />
        </View>
        <Button
          icon={<Send color={COLORS.WHITE} />}
          label="Compartilhar"
          onPress={() => {console.log('pressed salvar')}}
          height={48}
          width={146}
        />
      </View>
    </View>
  );
}
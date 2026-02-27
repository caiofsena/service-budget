import { Alert, ScrollView, Share, Text, View } from "react-native";
import { styles } from "./styles";
import { Copy, CreditCard, PencilLine, ReceiptText, Send, Store, Trash } from "lucide-react-native";
import { COLORS } from "../../utils/colors";
import { CardService } from "../../components/CardService";
import { TagStatus } from "../../components/TagStatus";
import { Status } from "../../utils/constants";
import { Button } from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderDetail } from "../../components/headerDetail";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getBudget, removeBudget, saveBudget } from "../../data/actions";
import { Budget } from "../../data/models";
import { dateFormat, generateNewId, moneyFormat, totalDiscountValue } from "../../utils/helpers";

export const DetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const id = route?.params?.id;
  const [data, setData] = useState<Budget>();

  const handleCopy = async () => {
    if (data) {
      await saveBudget({ ...data, id: generateNewId(), createdAt: new Date(), updatedAt: new Date() });
      Alert.alert('Orçamento duplicado!');
      navigation.navigate('Home');
    }
  }

  const handleRemove = async () => {
    Alert.alert(
      'Aviso', 
      'Deseja excluir o orçamento?', 
      [
        { text: 'Não' }, 
        { 
          text: 'Sim', 
          onPress: async () => {
            await removeBudget(id);
            Alert.alert('Orçamento removido!');
            navigation.navigate('Home');
          }
        }
      ]
    );
  }

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Orçamento ${data?.title} no valor de R$ ${data?.total}`
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  const handleEdit = () => {
    navigation.navigate('Budget', {id: data?.id});
  }

  const loader = async () => {
    if (id) {
      const budget = await getBudget(id);
      if (budget) {
        setData(budget);
      }
    }
  };

  useEffect(() => {
    loader();
  }, []);

  if (!data) {
    return null;
  }

  return (
    <>
      <HeaderDetail status={data.status} id={data.id} />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.content}>
            <View style={styles.highlight}>
              <View style={styles.highlightTitle}>
                <View style={styles.highlightTitleIcon}>
                  <Store size={20} color={COLORS.PURPLE_BASE} />
                </View>
                <Text style={styles.highlightTitleText}>{data.title}</Text>
              </View>
              <View style={styles.highlightData}>
                <View style={styles.highlightDataClient}>
                  <Text style={styles.highlightDataClientTitle}>Cliente</Text>
                  <Text style={styles.highlightDataClientDescription}>{data.client}</Text>
                </View>
                <View style={styles.highlightDataDate}>
                  { data.createdAt && <View style={styles.highlightDataDateCreated}>
                    <Text style={styles.highlightDataClientTitle}>Criado em</Text>
                    <Text style={styles.highlightDataClientDescription}>{dateFormat(data.createdAt)}</Text>
                  </View> }
                  { data.updatedAt && <View style={styles.highlightDataDateUpdated}>
                    <Text style={styles.highlightDataClientTitle}>Atualizado em</Text>
                    <Text style={styles.highlightDataClientDescription}>{dateFormat(data.updatedAt)}</Text>
                  </View> }
                </View>
              </View>
            </View>
            <View style={styles.servicesIncluded}>
              <View style={styles.servicesIncludedTitle}>
                <ReceiptText size={16} color={COLORS.PURPLE_BASE} />
                <Text style={styles.servicesIncludedTitleText}>Serviços incluídos</Text>
              </View>
              <View style={styles.servicesIncludedData}>
                { data.items && data.items.map(item => {
                  return(
                    <CardService 
                      key={item.id}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      qty={item.qty} 
                      showAllTextDescription
                    />
                  )
                })}
              </View>
            </View>
            { data.total &&
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
                      <Text style={data.discountPct ? styles.resumeValueDataSubtotalDescription : styles.resumeValueDataSubtotalDescriptionNormal}>R$ {moneyFormat(data.total)}</Text>
                    </View>
                    <View style={styles.resumeValueDataDiscount}>
                      <View style={styles.resumeValueDataDiscountText}>
                        <Text style={styles.resumeValueDataDiscountTitle}>Desconto</Text>
                        { data.discountPct && <TagStatus style={styles.resumeValueDataDiscountTag} status={Status.APPROVED} text={`${data.discountPct}% off`} /> }
                      </View>
                      <Text style={styles.resumeValueDataDiscountDescription}>{data.discountPct ? '-' : ''} R$ {moneyFormat(totalDiscountValue(data.total, data.discountPct))}</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.resumeValueDataTotal}>
                      <Text style={styles.resumeValueDataTotalTitle}>Investimento total</Text>
                      <View style={styles.resumeValueDataTotalDescription}>
                        <Text style={styles.resumeValueDataTotalDescriptionCipher}>R$</Text>
                        <Text style={styles.resumeValueDataTotalDescriptionMoney}>{moneyFormat(String(Number(data.total) - Number(totalDiscountValue(data.total, data.discountPct))))}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View> 
            }
          </View>
        </ScrollView>
        <View style={styles.buttons}>
          <View style={styles.buttonsOnlyIcon}>
            <Button
              icon={<Trash color={COLORS.DANGER_BASE} />}
              onPress={handleRemove}
              height={48}
              width={48}
              color={COLORS.GRAY_100}
              textColor={COLORS.PURPLE_BASE}
              borderColor={COLORS.GRAY_300}
            />
            <Button
              icon={<Copy color={COLORS.PURPLE_BASE} />}
              onPress={handleCopy}
              height={48}
              width={48}
              color={COLORS.GRAY_100}
              textColor={COLORS.PURPLE_BASE}
              borderColor={COLORS.GRAY_300}
              style={styles.buttonCopy}
            />
            <Button
              icon={<PencilLine color={COLORS.PURPLE_BASE} />}
              onPress={handleEdit}
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
            onPress={handleShare}
            height={48}
            width={146}
          />
        </View>
      </SafeAreaView>
    </>
  );
}
import { RadioButton as PaperRadioButton, RadioButtonProps }  from "react-native-paper";
import { COLORS } from "../../utils/colors";

type Props = RadioButtonProps & {
  validate: string;
};

export const RadioButton = ({ value, validate, onPress }: Props) => {
  return (
    <PaperRadioButton
      value={value}
      status={value === validate ? 'checked' : 'unchecked'}
      onPress={onPress}
      color={COLORS.PURPLE_BASE}
    />
  );
}
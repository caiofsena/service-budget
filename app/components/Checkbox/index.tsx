import ExpoCheckbox, { CheckboxProps } from "expo-checkbox";
import { styles } from "./styles";
import { COLORS } from "../../utils/colors";

export const Checkbox = ({value, onValueChange}: CheckboxProps) => {
  return (
    <ExpoCheckbox
      style={styles.container}
      value={value}
      onValueChange={onValueChange}
      color={value ? COLORS.PURPLE_BASE : undefined}
    />
  );
}
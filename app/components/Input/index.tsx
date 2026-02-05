import { TextInput, TextInputProps, View } from "react-native";
import { styles } from "./styles";

type Props = TextInputProps & {
	height?: number;
	icon?: any;
	width?: number;
};

export const Input = ({height, icon, onChangeText, placeholder, value, width }: Props) => {
	return (
		<View style={[styles.container, {width: width || 200, height: height || 48}]}>
			{icon && 
				<View style={styles.icon}>
					{icon}
				</View>
			}
			<TextInput
				style={[styles.text, {height: height || 48}]}
				onChangeText={onChangeText}
				value={value}
				placeholder={placeholder}
			/>
		</View>
	);
}
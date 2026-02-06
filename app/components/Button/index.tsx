import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { View } from "lucide-react-native";

type Props = {
	borderColor?: string;
	color?: string;
	textColor?: string;
	height?: number;
	icon?: any;
	label?: string;
	width?: number;
	onPress: () => void,
	style?: any;
};

export const Button = ({ borderColor, color, textColor, height, icon, label, width, onPress, style}: Props) => {
	return (
		<TouchableOpacity 
			style={
				[
					styles.container, 
					borderColor && {borderColor: borderColor, borderWidth: 1}, 
					color && {backgroundColor: color},
					{width: width || null, height: height || null},
					style
				]
			}
			onPress={onPress}>
			{icon && icon}
			{label && <Text style={[styles.text, textColor && {color: textColor}, icon && styles.textWithIcon]}>{label}</Text>}
		</TouchableOpacity>
	);
}
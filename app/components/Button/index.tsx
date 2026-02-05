import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
	borderColor?: string;
	color?: string;
	height?: number;
	icon?: any;
	label?: string;
	width?: number;
};

export const Button = ({ borderColor, color, height, icon, label, width}: Props) => {
	return (
		<TouchableOpacity 
			style={
				[
					styles.container, 
					borderColor && {borderColor: borderColor, borderWidth: 1}, 
					color && {backgroundColor: color},
					{width: width || 98, height: height || null}
				]
			}>
			{icon && icon}
			{label && <Text style={styles.text}>{label}</Text>}
		</TouchableOpacity>
	);
}
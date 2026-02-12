import { StyleProp, TextInput, TextInputProps, TextStyle, View } from "react-native";
import { styles } from "./styles";

type Props = TextInputProps & {
	height?: number;
	left?: any;
	right?: any;
	width?: number;
	styleText?: StyleProp<TextStyle>;
};

export const Input = ({height, left, right, width, style, styleText, ...props }: Props) => {
	return (
		<View style={[styles.container, {width: width || null, height: height || null}, style]}>
			{left && 
				<View style={styles.left}>
					{left}
				</View>
			}
			<TextInput
				{...props}
				style={[styles.text, {height: height || 48}, styleText]}
			/>
			{right && 
				<View style={styles.right}>
					{right}
				</View>
			}
		</View>
	);
}
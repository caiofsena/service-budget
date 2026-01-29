import { StyleSheet, Text, View } from "react-native";

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        marginTop: 20,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center'
    }
})
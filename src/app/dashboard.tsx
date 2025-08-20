import { StyleSheet, View, Text } from "react-native"
import { Button } from "./components/Button"
import { useRouter } from "expo-router"

export default function App() {

    const router = useRouter()

    return(
       <View style={styles.container}>
        <Text style={styles.title}>Dashboard</Text>
       <Button onPress={() => router.back } title="Voltar"/>
       </ View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32
    },
    title: {
        fontSize:24,
        fontWeight: 'bold',
        marginBottom:24
    }
})
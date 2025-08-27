import { Text, View } from "react-native"
import { Button } from "./components/Button"
import { Input } from "./components/Input"
import { styles } from "./styles"
import { useState } from "react"
import { useRouter } from "expo-router"

export default function App() {
    const [name, setName] = useState('')

    const router = useRouter()

    return(
       <View style={styles.container}>
        <Text style={styles.title}>Olá, {name}</Text>
        <Input onChangeText={setName} placeholder="Digite o Nome" />
       <Button onPress={() => {
        if(name.trim() !== '') {
            router.push('/dashboard')
        } else {
            alert("Digite o Nome")
        }
        
       }}
        title="Dashboard"/>
       
       
       
       </ View>
    )
}
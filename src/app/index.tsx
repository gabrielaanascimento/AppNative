import { Text, View } from "react-native"
import { Button } from "./components/Button"
import { Input } from "./components/Input"
import { styles } from "./styles"
import { useState } from "react"

export default function App() {
    const [nome, setNome] = useState('')

    

    return(
       <View style={styles.container}>
        <Text>Olá, {nome}</Text>
        <Input onChangeText={setNome} placeholder="Digite o Nome" />
       <Button onPress={() => {
        if(nome.trim() === '') {
            alert("Digite o Nome")
        }
       }}
        title="Dashboard"/>
       
       </ View>
    )
}
import { TextInput, TextInputProps } from "react-native"
import { styles } from "./styles"

interface InputProps {

}

export function Input({...rest}:TextInputProps) {
    return (
        <>
            <TextInput 
            style={styles.input}
            placeholderTextColor="#999999"
            {...rest}
            />
        </>
    )
}
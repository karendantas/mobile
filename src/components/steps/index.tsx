import { Text, View } from "react-native";
import { styles } from "./styles";
import { Step } from "../step";
import { IconLocation } from "@tabler/icons-react-native";

export function Steps(){
    return (
        <View style = {styles.container}>
            <Text style ={ styles.title}> Veja como funciona </Text>
            <Step 
                icon={IconLocation}
                title = "Encontre estabelecimentos"
                description="Veja locais perto de voce que são parceiros da Nearby"
            />
            <Step 
                icon={IconLocation}
                title = "Encontre estabelecimentos"
                description="Veja locais perto de voce que são parceiros da Nearby"
            />
            <Step 
                icon={IconLocation}
                title = "Encontre estabelecimentos"
                description="Veja locais perto de voce que são parceiros da Nearby"
            />
        </View>
    )
}
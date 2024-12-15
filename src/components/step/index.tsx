import { Text, View } from "react-native";
import { styles } from "./styles";
import {IconProps} from "@tabler/icons-react-native"
import { colors } from "@/styles/colors";


interface StepProps {
    //siginfica que estamos apssando para o icon um tipo de componente react
    icon: React.ComponentType<IconProps>;
    title: string;
    description: string;
}
export function Step ({icon: Icon,title,description}: StepProps){
    return (
        <View style = {styles.container}>
            {Icon && <Icon size = {32} color = {colors.red.base} />}
            <View style = {styles.details}>
                <Text style = {styles.title}>
                    {title}
                </Text>

                <Text style = {styles.description}>{description}</Text>
            </View>
        </View>
    )
}
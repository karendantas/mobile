import { ActivityIndicator, Text, TextProps, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";
import { styles } from "./styles";
import { colors } from "@/styles/colors";


interface ButtonProps extends TouchableOpacityProps {
    isLoading?: boolean;
}

function Button ({children, style, isLoading = false, ...rest}:ButtonProps) {
    return (
        <TouchableOpacity style = {[styles.container, style]} disabled  ={isLoading} {...rest}>
            { isLoading ? <ActivityIndicator/> :  children}
        </TouchableOpacity>
    )
}

function Title ({children}:TextProps){
    return <Text style = {styles.title}> {children} </Text>
}

interface IconProps {
    icon: React.ComponentType<TablerIconProps>;
}
function Icon ({icon: Icon}:IconProps){
    return <Icon size = {24} color = {colors.gray[100]} />
}
Button.Title = Title;
Button.Icon = Icon;
export {Button}
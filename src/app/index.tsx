import { Button } from "@/components/button"
import { Steps } from "@/components/steps"
import { Welcome } from "@/components/welcome"
import { View} from "react-native"

export default function Index (){
    return (
        <View style = {{padding: 40, flex:1, gap: 40}}>
            <Welcome />
            <Steps />
           
           <Button>
                <Button.Title> Começar </Button.Title>
           </Button>
        </View>
    )
}
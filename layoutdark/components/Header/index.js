import { View ,Text, Image } from "react-native"
import {global} from "../../css/Styles.js"
export default function Header(){
    return(
        <View style={global.header}>
            
        <Image source={require("../../assets/indioanajones.jpg")} style={global.userimg} />
        <View>
    <Text style={global.nomeheader}>indio ana jones</Text>
    <Text style={global.contaheader}> @Indioana </Text>
        </View>
        <Image source={require("../../assets/pesquisa.png")} style={global.pesquisaimg} />
            
        </View>
    );
}
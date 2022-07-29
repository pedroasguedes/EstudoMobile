import { Image , Text , View } from "react-native";
import { global } from "../../css/Styles";

export default function Footer() {
    return (
        <View style={global.footer}>
            <View style={global.home}>
                <Image source={require("../../assets/home.png")} style={global.imgfooter}/>
                <Text style={global.txtfooter}>Inicio</Text>
            </View>
            <View style={global.home}>
                <Image source={require("../../assets/extrato.png")} style={global.imgfooter}/>
                <Text style={global.txtfooter}>Extrato</Text>
            </View>
            <View style={global.home}>
                <Image source={require("../../assets/loja.png")} style={global.imgfooter}/>
                <Text style={global.txtfooter}>Vendas</Text>
            </View>
            <View style={global.home}>
                <Image source={require("../../assets/cartoes.png")} style={global.imgfooter}/>
                <Text style={global.txtfooter}>Cartões</Text>
            </View>
            <View style={global.home}>
                <Image source={require("../../assets/opcao.png")} style={global.imgfooter}/>
                <Text style={global.txtfooter}>Opções</Text>
            </View>
        </View>
    )
}
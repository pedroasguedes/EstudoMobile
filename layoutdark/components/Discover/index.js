import {  Text, View, Image } from "react-native";
import {global} from "../../css/Styles.js"

export default function Discover(){
    return(
        <View>
            <View style={global.trendingarea}>
            <Text style={global.titulotrending}>Discover</Text>
            <Text style={global.txtmore} >More -&gt; </Text>
            </View>
            <View style={global.imgesporte}>
                <Image source={require("../../assets/lq.jpg")} style={global.imgtrending}/>
                <View style={global.caixalike}>
                    <Image source={require("../../assets/like.png")}
                    style={global.imglike}/>
                    <Text style={global.txtlike}> Like </Text>
                    </View>
                   <View style={global.caixauser}>
                         <Image source={require("../../assets/Paluh.jpg")} style={global.imguser1}/>
                             <View style={global.caixanome}>
                                    <Text style={{color:"white", fontSize:20,paddingTop:5}}> Paluh_Liquid </Text>
                                     <Text style={{color:"white", fontSize:10}}> 1 hour  ago </Text>
                            </View>
                            </View>
                <Text style={{color:"white", fontSize:14}}> Classificados para o six invitational 2022 #goteamliquid 🤯 🔥 </Text>
                
            </View>
        </View>
    )

}
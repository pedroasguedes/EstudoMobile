import {  Text, View, Image } from "react-native";
import {global} from "../../css/Styles.js"

export default function Trending(){
    return(
        <View>
            <View style={global.trendingarea}>
            <Text style={global.titulotrending}>Trending</Text>
            <Text style={global.txtmore} >More -&gt; </Text>
            </View>
            <View style={global.imgesporte}>
                <Image source={require("../../assets/1ba.jpg")} style={global.imgtrending}/>
                <View style={global.caixalike}>
                    <Image source={require("../../assets/like.png")}
                    style={global.imglike}/>
                    <Text style={global.txtlike}> Like </Text>
                    </View>
                   <View style={global.caixauser}>
                         <Image source={require("../../assets/Bronny-James.jpg")} style={global.imguser1}/>
                             <View style={global.caixanome}>
                                    <Text style={{color:"white", fontSize:20,paddingTop:5}}> Bronny James </Text>
                                     <Text style={{color:"white", fontSize:10}}> 2 min ago </Text>
                            </View>
                            </View>
                <Text style={{color:"white", fontSize:14}}> Bronny James has NBA range.🔥 </Text>
                
            </View>
        </View>
    )

}
import { Image, ScrollView, Text, View } from "react-native";
import { global } from "../../css/Styles.js";

export default function Stories() {
  return (
    <View>
      <Text style={global.titulostories}>Stories</Text>

      <ScrollView horizontal={true}>
        <View>
          <View style={global.atividades}>
            <Text style={global.tag}>Live</Text>
            <Text style={global.like}>20.5k</Text>
          </View>
          <Image
            source={require("../../assets/1p.jpg")}
            style={global.imgstories}
          />
          <Text style={global.username}>
          Franklin Clinton
            <Image
              source={require("../../assets/check.png")}
              style={global.imgcheck}
            />
          </Text>
        </View>
        <View>
          <View style={global.atividades}>
            <Text style={global.premiere}>Premiere</Text>
            <Text style={global.like}>13.7k</Text>
          </View>
          <Image
            source={require("../../assets/2p.jpg")}
            style={global.imgstories}
          />
          <Text style={global.username}>
          Michael De Santa
            <Image
              source={require("../../assets/check.png")}
              style={global.imgcheck}
            />
          </Text>
        </View>
        <View>
          <View style={global.atividades}>
            <Text style={global.tag}>Live</Text>
            <Text style={global.like}>43.5k</Text>
          </View>
          <Image
            source={require("../../assets/3p.jpg")}
            style={global.imgstories}
          />
          <Text style={global.username}>
          Carl Johnson
            <Image
              source={require("../../assets/check.png")}
              style={global.imgcheck}
            />
          </Text>
        </View>
        <View>
          <View style={global.atividades}>
            <Text style={global.premiere}>Premiere</Text>
            <Text style={global.like}>65.2k</Text>
          </View>
          <Image
            source={require("../../assets/4p.jpg")}
            style={global.imgstories}
          />
          <Text style={global.username}>
          Niko Bellic
            <Image
              source={require("../../assets/check.png")}
              style={global.imgcheck}
            />
          </Text>
        </View>
        
      </ScrollView>
    </View>
  );
}
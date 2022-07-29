import { StyleSheet } from "react-native";

export const global = StyleSheet.create({

container:{
    flex: 1,
    backgroundColor:"#090909",
},
header: {
    padding: 10,
    height: 240,
    flexDirection:"row",
    paddingTop:60,
    paddingLeft:20,
},
txtheader: {
    color: "white",
    fontSize:30,
    padding:20,
},
userimg: {
    width:45,
    height:50,
    borderRadius:100,
    
},
nomeheader: {
    fontSize:14,
    color: "white",
    fontWeight: "bold",
},
contaheader: {
    fontSize:12,
    color: "#dddddd",
},
pesquisaimg: {
    width:50,
    height:50,
    position: "absolute",
    marginTop:60,
    right:10,
},
titulostories: {
    color: "white",
    fontSize:20,
    fontWeight: "bold",
    marginLeft:20,
},
imgstories: {
    width:150,
    height:200,
    resizeMode: "cover",
    margin:10,
    borderRadius:20,
},
tag: {
    padding:10,
    borderWidth:1,
    color: "white",
    borderRadius:15,
    textAlign: "center",
    backgroundColor: "#090909",
},
like: {
    color: "white",
    textAlign:"center",
    padding:10,
    textShadowColor:"#090909",
    textShadowRadius:10,
},
atividades:{
    flexDirection:"row",
    position: "absolute",
    zIndex:1000,
    top:20,
    left:20,
},
username: {
    color: "white",
    padding:10,
},
imgcheck: {
    width:20,
    height:20,
    resizeMode:"cover",
    marginLeft:20,
},
premiere:{
    padding:10,
    backgroundColor:"#e54947",
    borderWidth:1,
    color: "white",
    borderRadius:15,
    textAlign: "center",
},
trendingarea: {
    backgroundColor:"#090909",
    height:100,
    flexDirection:"row",
},
txtmore: {
 color: "#fece00",
 position: "absolute",
 right:0,
 top:20,   
},
imgesporte: {
    backgroundColor:"#333333",
    padding:20,
    width:"95%",
    borderRadius:40,
    marginLeft:"auto",
    marginRight:"auto",
},
imgtrending:{
    width:"100%",
    height:360,
    borderRadius:40,
},
titulotrending: {
    color: "white",
    fontSize: 30,
},
caixalike: {
    backgroundColor:"#fece00",
    padding:10,
    width:80,
    flexDirection:"row",
    position: "absolute",
    top: 337,
    right:20,
    borderBottomRightRadius:30,
    borderBottomLeftRadius:10,
},
caixauser:{
    flexDirection:"row",
},
imglike:{
height: 20,
width:20,
},
imguser1:{
    width:75,
    height:70,
    margin:5,
    borderRadius:20,
}

});


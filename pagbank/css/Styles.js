import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
    container: {

    },
    logo: {
        width: 120, 
        height: 29,
        resizeMode: "cover",
    },
    header: {
        backgroundColor: "#5cbc4e",
        paddingTop: 40,
        paddingLeft: 30,
    },
	top: {
		flexDirection: "row"
	},
    down:{
        width: 25,
        height: 25,
        resizeMode: "cover",
        left: 66,
    },
    notify: {
        width: 30,
        height: 30,
        resizeMode: "cover",
        left: 170,
    },
	saldo: {
		paddingTop: 20,
	},
	txtsaldo: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold"
	},
	cash: {
		flexDirection: "row",
		paddingTop: 10,
	},
	txtcash: {
		color: "white",
		fontSize: 30,
	},
	eye: {
		height: 30,
		width: 30,
		resizeMode: "cover",
		left: 180,
		top: 4,
	},
	status: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	txtstatus: {
		paddingTop: 15,
		color: 'white',
		fontSize: 17,
	},
	cashstatus: {
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold',
	},
	help: {
		width: 21,
		height: 21,
		right: 42,
		top: 35,
	},
	viewcashback: {
		paddingTop: 15,
		flexDirection: 'row',
		justifyContent: "space-between",
		backgroundColor: '#56b047',
		height: 50,
	},
	txtcashback: {
		color: 'white',
		fontSize: 16,
		left:30,
	},
	cashback: {
		color:'white',
		fontWeight: 'bold',
		fontSize: 17,
		right:10,
	},
	helpcash: {
		width: 21,
		height: 21,
		right: 42,
	},
	options: {
		backgroundColor: '#f4f4f4',
		height: 510,
	},
	viewwtd: {
		paddingTop: 15,
		flexDirection: 'row',
		left:20,
	},
	wtd: {
		color:'#737375',
		fontWeight: 'bold',
		fontSize: 19,
	},
	beneficios:{
		color: '#4aa9c6',
		fontSize: 15,
		left: 50
	},
	viewoption:{
		backgroundColor: "#ffffff",
		top: 30,
		marginLeft: 10,
		width: 195,
		padding: 25,
		borderRadius: 20,
		shadowColor:"black",
		shadowOffset:{width: 10, height:15},
		shadowOpacity:1,
		shadowRadius:10,
		elevation:6,
	},
	motheroptions: {
		flexDirection: "row",
	},
	motheroptions2: {
		flexDirection: "row",
		paddingTop:17,
	},
	txtoption: {
		fontSize: 17,
		paddingLeft: 5,
		color: 'black',
	},
	card: {
		width: 40,
		height: 40,
		left: 110,
	},
	motheroptions3: {
		flexDirection: "row",
		paddingTop:12,
	},
	footer: {
		flexDirection: "row",
		zIndex:20000000,
	},
	home: {
		marginRight: "auto",
		marginLeft: "auto",
	},
	imgfooter: {
		width: 40,
		height: 40,
		top: 20,
	},
	txtfooter: {
		top: 20,
		fontSize: 15,
	}

	
});
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    TopCategory_Container:{
        // borderWidth:2,
        // borderColor:"red",
        width:"100%",
        marginTop:13,
        height:50,
       
    },
    TopCategory_Scroll:{ 
        display:"flex",
        justifyContent:"center" ,
        alignItems:"center",
        marginHorizontal:10,
        backgroundColor:"#fff",
        width: 140,
        borderRadius:20
    }
    ,
    Items_container:{
        display:"flex",
        flexDirection:"row",
    },
    category_icons:{
        marginLeft:7
    }
})

export default styles
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    Home_conatiner:{
        width:"100%",
    },
    Home_SearchBox:{
        display:"flex",
        width:"100%",
        alignItems:"center",
        marginTop:20,
        
    },
    Home_SearchBox_Sub:{
        width:"95%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        borderWidth: 2,
        borderColor:"#e0e0eb",
        borderRadius:20
    },
    Home_SearchBox_Input:{
        height: 20,
        width:"85%",
        margin: 12,
       
        padding: 10,
        
    }
    ,
    Header_Search_Icon:{
        fontSize: 25,
        color:"#ff5500"
    }
})

export default styles
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    Header_Container:{
        width:"100%",
        display:"flex",
        alignItems:"center"
    },
    Header_sub_container:{
        width:"95%",
        display:"flex",
        flexDirection:"row",
        
        justifyContent:"space-between",
      
    },
    Header_container_right:{
        display:"flex",
        flexDirection:"row",
        
    }
    ,Header_Right:{
        marginHorizontal:10
    },
    Header_Icon_Size:{
        fontSize:30,
        color:"#ff0066"
    },
    Header_userProfile:{
        backgroundColor:"red"
    }
})

export default styles
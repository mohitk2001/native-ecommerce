import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    Header_Container:{
        width:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:60,
        // borderColor:"red",
        // borderBottomWidth:2,
        // shadowColor: '#171717',
        // shadowOffset: {width: -2, height: 4},
        // shadowOpacity: 0.2,
        // shadowRadius: 3,
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
        marginHorizontal:10,
        color:"#ff6699"
    },
    Header_Icon_Size:{
        fontSize:30,
        color:"#ff5500"
    },
    Header_userProfile:{
        backgroundColor:"red"
    }
})

export default styles
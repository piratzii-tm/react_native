import {StyleSheet,Image,View,Text, TouchableOpacity} from "react-native";


export default function BigCard(){

    return(
        <View style={styles.container}>
            <Image source={require("../images/timisoara.jpg")} style={styles.image}/>
            <View style={styles.label}>
                <Text style={styles.title}>Timisoara</Text>
                <Text style={styles.description}>Capitala culturala eurpeana si popular centru universitar in Romania.</Text>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Afla mai multe!</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: 400,
        backgroundColor: "#fff",
        borderRadius: 20,
        flexDirection:"column",
        gap:20,
        alignItems:"center"
    },
    image:{
        width:"90%",
        marginTop:"5%",
        height:"50%",
        borderRadius:20,
    },
    label:{
        alignItems:"left",
        gap:5
    },
    title:{
        fontSize:24,
        fontWeight:"bold"
    },
    description:{
        fontSize:18,
        color:"gray"
    },
    btn:{
        width:"90%",
        backgroundColor:"#63a4e6",
        height:50,
        borderRadius:30,
        alignItems:"center",
        justifyContent:"center"
    },
    btnText: {
        fontSize:18,
        fontWeight:"bold",
        color:"white"
    }
})

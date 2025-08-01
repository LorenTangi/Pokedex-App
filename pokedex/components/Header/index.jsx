import { Image, Text, View, Pressable } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const imageSource = require("@/assets/images/header.jpg");

export default function Header({ title, back = false }) {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={imageSource} style={styles.image}/>
            </View>
            <View style={styles.titleConatiner}>
                <View style={ { flexDirection: "row", alignItems: "center" }}>
                    {
                        back &&
                        <Pressable onPress={() => router.back()} style={styles.backButton}>
                           <Ionicons name="arrow-back" size={28} color="black"/>
                        </Pressable>
                    }
                    
                </View>
            </View>
        </View>
    )
}

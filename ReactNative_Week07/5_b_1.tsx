import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
      }}
    >
      <View
        style={{
          marginHorizontal: 15,
          marginVertical: 40,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "VT323",
            fontWeight: "bold",
            fontSize: 16,
            marginBottom: 25,
          }}
        >
          A premium online store for sporter and their stylish choice
        </Text>
        <View
          style={{
            backgroundColor: "#E941411A",
            alignItems: "center",
            borderRadius: 30,
            padding: 30,
          }}
        >
          <Image
            source={require("./b1.png")}
            style={{ width: 252, height: 230 }}
            resizeMode="contain"
          ></Image>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
            marginBottom: 60,
            marginTop: 20,
          }}
        >
          {" "}
          POWER BIKE{"\n"}SHOP
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#E94141",
            padding: 12,
            borderRadius: 20,
            width: "90%",
          }}
          onPress={() => navigation.navigate("Products")}
        >
          <Text
            style={{
              fontFamily: "VT323",
              fontSize: 18,
              color: "#FFFFFF",
              textAlign: "center",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

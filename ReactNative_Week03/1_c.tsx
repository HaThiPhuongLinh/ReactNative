import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Fontisto from "@expo/vector-icons/Fontisto";

const YourApp = () => {
  return (
    <LinearGradient
      colors={["#C7F4F7", "#D1F4F6", "#E5F4F5", "#37D6F8", "#00CCF9"]}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 56, fontWeight: "500" }}>CODE</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "500", textAlign: "center" }}>
          VERIFICATION
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "700",
            textAlign: "center",
            marginHorizontal: 30,
          }}
        >
          Enter ontime password sent on ++849092605798
        </Text>
      </View>
      <View style={{ flex: 3, alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "80%",
          }}
        >
          {Array(5)
            .fill()
            .map((_, index) => (
              <TextInput
                key={index}
                style={{
                  height: 45,
                  width: 45,
                  borderWidth: 1,
                  textAlign: "center",
                  fontSize: 24,
                }}
                keyboardType="numeric"
                maxLength={1}
              />
            ))}
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#E3C000",
            padding: 10,
            width: "90%",
            alignItems: "center",
            marginTop: 32,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>VERIFY CODE</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default YourApp;

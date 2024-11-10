import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";

export default function DetailsProduct({ route }) {
  const { bike } = route.params;

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "#FFFFFF" }}>
      <View
        style={{
          backgroundColor: "#E941411A",
          width: "100%",
          height: "60%",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 10,
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <Image source={bike.image} resizeMode="cover" />
      </View>
      <Text
        style={{ fontSize: 22, fontWeight: "bold", fontFamily: "Voltaire" }}
      >
        {bike.name}
      </Text>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text
          style={{ fontSize: 16, fontFamily: "Voltaire", color: "#00000096" }}
        >
          15% OFF | ${bike.price}
        </Text>
        <Text
          style={{
            fontSize: 16,
            textDecorationLine: "line-through",
            marginLeft: 20,
          }}
        >
          449$
        </Text>
      </View>

      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          fontFamily: "Voltaire",
          marginTop: 10,
        }}
      >
        Description
      </Text>
      <Text style={{ marginTop: 10, fontSize: 16, color: "#00000091" }}>
        It is a very important form of writing as {"\n"}
        we write almost everything in {"\n"}
        paragraphs, be it an answer, essay, story, {"\n"}
        emails, etc.
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingTop: 20,
        }}
      >
        <svg
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.2084 4.375C6.1819 4.375 2.91669 7.60667 2.91669 11.5937C2.91669 14.8123 4.19273 22.451 16.7534 30.1729C16.9783 30.3098 17.2367 30.3822 17.5 30.3822C17.7634 30.3822 18.0217 30.3098 18.2467 30.1729C30.8073 22.451 32.0834 14.8123 32.0834 11.5937C32.0834 7.60667 28.8181 4.375 24.7917 4.375C20.7652 4.375 17.5 8.75 17.5 8.75C17.5 8.75 14.2348 4.375 10.2084 4.375Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <TouchableOpacity
          style={{
            backgroundColor: "#E94141",
            padding: 15,
            borderRadius: 20,
            alignItems: "center",
            width: "70%",
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
            }}
          >
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

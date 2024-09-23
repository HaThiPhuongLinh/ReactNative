import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RadioButton } from "react-native-paper";
import Fontisto from "@expo/vector-icons/Fontisto";

const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 18,
      }}
    >
      <View
        style={{
          alignItems: "center",
          marginVertical: 30,
        }}
      >
        <Text
          style={{
            fontWeight: "600",
            fontSize: 25,
          }}
        >
          REGISTER
        </Text>
      </View>

      <View>
        <View
          style={{
            width: "100%",
            height: 45,
            borderColor: "black",
            backgroundColor: "#F2F2F2",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 15,
          }}
        >
          <TextInput
            placeholder="Name"
            style={{
              width: "100%",
            }}
          />
        </View>
        <View
          style={{
            width: "100%",
            height: 45,
            borderColor: "black",
            backgroundColor: "#F2F2F2",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 15,
            marginTop: 20,
          }}
        >
          <TextInput
            placeholder="Phone"
            style={{
              width: "100%",
            }}
          />
        </View>
        <View
          style={{
            width: "100%",
            height: 45,
            borderColor: "black",
            backgroundColor: "#F2F2F2",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 15,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <TextInput
            placeholder="Email"
            style={{
              width: "100%",
            }}
          />
        </View>
        <View
          style={{
            width: "100%",
            height: 45,
            borderColor: "black",
            backgroundColor: "#F2F2F2",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 15,
          }}
        >
          <TextInput
            placeholder="Password"
            style={{
              width: "100%",
            }}
          />
          <TouchableOpacity>
            <svg
              width="38"
              height="36"
              viewBox="0 0 38 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_12_61)">
                <path
                  d="M19.0001 13.091C16.1414 13.091 13.8182 15.2919 13.8182 18.0001C13.8182 20.7083 16.1414 22.9091 19.0001 22.9091C21.8587 22.9091 24.1819 20.7083 24.1819 18.0001C24.1819 15.2919 21.8586 13.091 19.0001 13.091Z"
                  fill="black"
                />
                <path
                  d="M19 5.72733C10.3636 5.72733 2.98821 10.8164 0 18.0001C2.98821 25.1837 10.3636 30.2728 19 30.2728C27.645 30.2728 35.0119 25.1837 38.0001 18.0001C35.0119 10.8164 27.645 5.72733 19 5.72733ZM19 26.1818C14.2328 26.1818 10.3636 22.5164 10.3636 18C10.3636 13.4836 14.2328 9.81821 19 9.81821C23.7673 9.81821 27.6364 13.4837 27.6364 18.0001C27.6364 22.5164 23.7673 26.1818 19 26.1818Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_12_61">
                  <rect width="38" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            height: 45,
            borderColor: "black",
            backgroundColor: "#F2F2F2",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 15,
            marginTop: 20,
          }}
        >
          <TextInput
            placeholder="Birthday"
            style={{
              width: "100%",
            }}
          />
        </View>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 15,
          marginHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 20,
          }}
        >
          <RadioButton value="male" />
          <Text>Male</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RadioButton value="female" />
          <Text>Female</Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          height: 40,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#E53935",
            width: "100%",
            padding: 10,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#ffffff",
              fontWeight: "500",
              fontSize: 20,
            }}
          >
            REGISTER
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          textAlign: "center",
          marginTop: 20,
        }}
      >
        When you agree to terms and conditions
      </Text>
    </View>
  );
};

export default YourApp;

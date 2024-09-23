import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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
          LOGIN
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
            marginBottom: 30,
            marginTop: 40,
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
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 70,
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
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 12,
        }}
      >
        <Text
          style={{
            marginVertical: 5,
          }}
        >
          When you agree to terms and conditions
        </Text>
        <Text
          style={{
            color: "#5D25FA",
            marginVertical: 5,
          }}
        >
          For got your password?
        </Text>
        <Text
          style={{
            marginVertical: 5,
          }}
        >
          Or login with
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: 60,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#3b5998",
              borderColor: "blue",
              borderRadius: 2,
              padding: 10,
              flex: 1,
              alignItems: "center",
            }}
          >
            <svg
              width="40"
              height="22"
              viewBox="0 0 30 30"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_12_9)">
                <path
                  d="M15.4854 11.8061H17.9296V10.4922C17.9296 9.02441 18.0786 7.92914 18.3765 7.20642C18.6744 6.48301 19.2229 5.89412 20.022 5.43975C20.821 4.98537 21.8318 4.75816 23.0542 4.75812C24.3074 4.75812 25.5348 4.95507 26.7365 5.34899L26.141 8.5697C25.441 8.39412 24.7671 8.30632 24.1192 8.30632C23.482 8.30632 23.025 8.46251 22.7484 8.77488C22.4718 9.08725 22.3335 9.687 22.3335 10.5741V11.8062H25.6236V15.4373H22.3335V29.2555H17.9295V15.4373H15.4853V11.8062L15.4854 11.8061Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_12_9">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#0F8EE0",
              borderColor: "blue",
              borderRadius: 2,
              padding: 10,
              flex: 1,
              alignItems: "center",
            }}
          >
            <svg
              width="40"
              height="22"
              viewBox="0 0 23 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5957 21.3115H22.5107V27H0.586914V22.7031L13.0137 6.29688H0.953125V0.583984H22.1201V4.75879L9.5957 21.3115Z"
                fill="white"
              />
            </svg>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "blue",
              borderWidth: 1,
              borderRadius: 2,
              padding: 10,
              flex: 1,
              alignItems: "center",
            }}
          >
            <svg
              width="40"
              height="20"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_12_45)">
                <path
                  d="M8.20312 17.5C8.20312 15.7659 8.68089 14.1415 9.51091 12.7506V6.85065H3.61095C1.2693 9.89182 0 13.5982 0 17.5C0 21.4018 1.2693 25.1082 3.61095 28.1494H9.51091V22.2494C8.68089 20.8585 8.20312 19.2341 8.20312 17.5Z"
                  fill="#FBBD00"
                />
                <path
                  d="M17.5 26.7969L13.3984 30.8985L17.5 35C21.4019 35 25.1082 33.7307 28.1494 31.3891V25.4954H22.2557C20.8526 26.3284 19.2214 26.7969 17.5 26.7969Z"
                  fill="#0F9D58"
                />
                <path
                  d="M9.51092 22.2494L3.61096 28.1494C4.07458 28.7515 4.57941 29.3281 5.12567 29.8744C8.43098 33.1796 12.8256 35 17.5 35V26.7969C14.1077 26.7969 11.1346 24.9703 9.51092 22.2494Z"
                  fill="#31AA52"
                />
                <path
                  d="M35 17.5C35 16.4353 34.9036 15.3686 34.7134 14.3297L34.5596 13.489H17.5V21.6921H25.8024C24.9962 23.2959 23.7565 24.6043 22.2556 25.4955L28.1493 31.3891C28.7514 30.9255 29.328 30.4207 29.8743 29.8744C33.1797 26.569 35 22.1744 35 17.5Z"
                  fill="#3C79E6"
                />
                <path
                  d="M24.0739 10.9261L24.7989 11.6511L30.5994 5.85067L29.8744 5.12565C26.5691 1.82034 22.1745 0 17.5 0L13.3984 4.10156L17.5 8.20312C19.9832 8.20312 22.3179 9.17014 24.0739 10.9261Z"
                  fill="#CF2D48"
                />
                <path
                  d="M17.5 8.20312V0C12.8256 0 8.43099 1.82034 5.12561 5.12559C4.57935 5.67185 4.07451 6.24846 3.6109 6.85063L9.51086 12.7506C11.1346 10.0297 14.1078 8.20312 17.5 8.20312Z"
                  fill="#EB4132"
                />
              </g>
              <defs>
                <clipPath id="clip0_12_45">
                  <rect width="35" height="35" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default YourApp;

import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Fontisto from "@expo/vector-icons/Fontisto";

const YourApp = () => {
  return (
    <LinearGradient colors={["#FBCB00", "#BF9A00"]} style={{ flex: 1 }}>
      <View
        style={{
          flex: 2,
          marginHorizontal: 18,
          marginTop: 50,
        }}
      >
        <View
          style={{
            alignItems: "left",
            marginVertical: 30,
          }}
        >
          <Text
            style={{
              fontWeight: "700",
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
              borderColor: "#F2F2F2",
              borderWidth: 1,
              backgroundColor: "#C4C4C44D",
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 10,
              marginBottom: 30,
              marginTop: 40,
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_22_29)">
                <path
                  d="M15.9999 15.6496C19.5577 15.6496 22.4422 12.1463 22.4422 7.82461C22.4422 3.50287 21.4952 -0.000488281 15.9999 -0.000488281C10.5046 -0.000488281 9.55737 3.50287 9.55737 7.82461C9.55737 12.1463 12.4419 15.6496 15.9999 15.6496Z"
                  fill="black"
                />
                <path
                  d="M3.83187 27.5978C3.82919 27.5236 3.83053 27.3343 3.83187 27.5978V27.5978Z"
                  fill="black"
                />
                <path
                  d="M28.1672 27.8033C28.1687 27.3029 28.1714 27.7312 28.1672 27.8033V27.8033Z"
                  fill="black"
                />
                <path
                  d="M28.1545 27.2822C28.0352 19.7538 27.052 17.6091 19.528 16.2505C19.528 16.2505 18.4689 17.6001 16.0003 17.6001C13.5318 17.6001 12.4725 16.2505 12.4725 16.2505C5.03066 17.5936 3.98764 19.7069 3.8505 27.0372C3.83925 27.6358 3.83404 27.6673 3.83203 27.5978C3.83249 27.728 3.83304 27.9688 3.83304 28.3887C3.83304 28.3887 5.62431 31.9998 16.0003 31.9998C26.3766 31.9998 28.1677 28.3887 28.1677 28.3887C28.1677 28.1189 28.1678 27.9313 28.1681 27.8037C28.1661 27.8466 28.1621 27.7633 28.1545 27.2818V27.2822Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_22_29">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <TextInput
              placeholder="Name"
              style={{
                marginLeft: 10,
                width: "100%",
              }}
            />
          </View>
          <View
            style={{
              width: "100%",
              height: 45,
              borderColor: "#F2F2F2",
              borderWidth: 1,
              backgroundColor: "#C4C4C44D",
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 15,
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_22_9)">
                <path
                  opacity="0.98"
                  d="M16.0137 0.0107422C15.8714 0.0117731 15.7291 0.0129084 15.5867 0.0171354C9.04975 0.0464147 3.18477 4.12583 3.16817 8.72557C3.0942 9.80983 3.18971 10.8949 3.17272 11.9796H0.0232444C0.10666 16.7453 -0.146519 21.5222 0.156383 26.2811C0.808065 29.3455 4.72914 32.1167 9.3016 31.9675C14.308 31.9607 19.33 32.0761 24.3277 31.8966C29.0191 31.3293 32.3136 27.9487 31.9579 24.6767C32.0118 20.4455 31.9528 16.2142 31.9763 11.9834C30.9311 11.9647 29.8857 11.9978 28.8406 11.9738C28.92 9.39738 29.0926 6.5811 26.9997 4.34783C24.7364 1.69764 20.4229 -0.00850096 16.0135 0.0113966L16.0137 0.0107422ZM16.0734 3.69004C19.7874 3.72574 23.457 5.88424 23.35 8.6C23.4237 9.72601 23.4729 10.8526 23.5061 11.9796C18.5095 11.9775 13.5131 11.9851 8.51678 11.9731C8.5323 10.2104 7.85822 8.28298 9.23297 6.69591C10.4812 5.01431 12.9763 3.72746 15.7154 3.69324C15.8352 3.68994 15.9537 3.6888 16.0735 3.69004H16.0734Z"
                  fill="white"
                />
                <path
                  opacity="0.98"
                  d="M15.6901 0.629243C9.20688 0.743762 4.03826 4.447 4.03826 9.02519V12.5949H0.902588V24.7345H0.907143C0.902589 24.8222 0.902588 24.9101 0.902588 24.9987C0.902588 28.5242 4.58286 31.3617 9.15708 31.3617H22.8336C27.4078 31.3617 31.0928 28.5242 31.0928 24.9987C31.0928 24.9101 31.0881 24.8221 31.0836 24.7345H31.0928V12.5949H27.9617V9.02519C27.9617 4.37442 22.6296 0.629243 16.0023 0.629243C15.8987 0.629243 15.793 0.627387 15.6901 0.629243ZM15.635 3.07778C15.7136 3.07644 15.7946 3.07778 15.8737 3.07778C19.6625 3.01566 23.3866 4.98269 24.1604 7.59463C24.2921 9.26128 24.3663 10.9266 24.4083 12.5948H7.61489C7.61093 11.7971 7.60565 11.0013 7.58277 10.2042C6.62375 6.79327 10.6789 3.15943 15.6353 3.07768L15.635 3.07778ZM15.9839 17.0349C16.1627 17.0349 16.3434 17.0447 16.5256 17.0639C18.4693 17.2686 19.8106 18.5383 19.5189 19.9023C19.3847 20.5303 18.923 21.0708 18.2794 21.4487L19.5235 26.9225H12.4718L13.7114 21.4487C12.7944 20.9083 12.2858 20.0532 12.4764 19.1612C12.7406 17.9251 14.2558 17.0382 15.9839 17.0349V17.0349Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_22_9">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <TextInput
              placeholder="Password"
              style={{
                marginLeft: 10,
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
              backgroundColor: "black",
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
                fontSize: 19,
              }}
            >
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            marginTop: 30,
            textAlign: "center",
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          Forgot your password?
        </Text>
      </View>
    </LinearGradient>
  );
};

export default YourApp;

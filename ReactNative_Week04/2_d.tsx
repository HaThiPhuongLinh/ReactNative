import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Switch,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Fontisto from "@expo/vector-icons/Fontisto";

const YourApp = () => {
  const [passwordLength, setPasswordLength] = useState("");
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeSpecialChar, setIncludeSpecialChar] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const generatePassword = () => {
    let characters = "";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    if (includeLowerCase) characters += lowerCase;
    if (includeUpperCase) characters += upperCase;
    if (includeNumber) characters += numbers;
    if (includeSpecialChar) characters += specialChars;

    let password = "";
    const length = Math.min(Math.max(parseInt(passwordLength) || 0, 1), 15);

    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    setGeneratedPassword(password);
  };
  return (
    <LinearGradient colors={["#3B3B98", "#C4C4C400"]} style={{ flex: 1 }}>
      <View
        style={{
          flex: 2,
          marginHorizontal: 18,
          marginVertical: 18,
          backgroundColor: "#23235B",
          borderRadius: 12,
        }}
      >
        <View
          style={{
            marginHorizontal: 12,
            marginVertical: 12,
            backgroundColor: "#23235B",
            borderRadius: 12,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
              color: "#FFFFFF",
              paddingTop: 15,
              paddingBottom: 30,
            }}
          >
            PASSWORD {"\n"}GENERATOR
          </Text>
          <View
            style={{
              height: 60,
              borderColor: "black",
              backgroundColor: "#151537",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#FFFFFF", fontSize: 16 }}>
              {generatedPassword}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Password length
            </Text>
            <SafeAreaView>
              <TextInput
                style={{
                  backgroundColor: "#FFFFFF",
                  height: 40,
                  textAlign: "center",
                }}
                keyboardType="numeric"
                maxLength={2}
                value={passwordLength}
                onChangeText={(text) => setPasswordLength(text)}
              />
            </SafeAreaView>
          </View>
          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Include lower case letters</Text>
            <Switch
              value={includeLowerCase}
              onValueChange={(value) => setIncludeLowerCase(value)}
            />
          </View>
          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Include upper case letters</Text>
            <Switch
              value={includeUpperCase}
              onValueChange={(value) => setIncludeUpperCase(value)}
            />
          </View>
          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Include numbers</Text>
            <Switch
              value={includeNumber}
              onValueChange={(value) => setIncludeNumber(value)}
            />
          </View>
          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Include special characters</Text>
            <Switch
              value={includeSpecialChar}
              onValueChange={(value) => setIncludeSpecialChar(value)}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#3B3B98",
              marginTop: 20,
            }}
            onPress={generatePassword}
          >
            <Text
              style={{
                textAlign: "center",
                padding: 10,
                color: "#FFFFFF",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              GENERATE PASSWORD{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = {
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    alignItems: "center",
  },
  optionText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
};

export default YourApp;

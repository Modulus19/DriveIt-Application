import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../../constants/Colors";
import { router } from "expo-router";

export default function TabTwoScreen() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleForgotPassword = () => {
    alert("A link to reset your password has been sent to your email");
    setName("");
    setPassword("");
  };

  return (
    <ImageBackground
      source={require("../../assets/images/Background1.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
          style={{ flex: 1 }}
        >
          <View style={styles.logoContainer}>
            <Image
              source={require("../../assets/images/Logo.png")}
              style={styles.logo}
            />
            <Image
              source={require("../../assets/images/Logo-Text.png")}
              style={styles.logoText}
            />
          </View>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "flex-start",
            }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Name"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={styles.input}
                placeholder="***********"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>
            <TouchableOpacity
              style={{ marginTop: 15 }}
              onPress={handleForgotPassword}
            >
              <Text style={styles.btn}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                alert("Login Successful!!!");
                router.push("/vehicles");
              }}
            >
              <Text style={styles.buttonText}>LOG IN</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(48, 79, 254, 0.95)",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    marginBottom: 20,
    marginTop: 30,
  },
  logo: {
    width: 122,
    height: 146,
  },
  logoText: {
    width: 146,
    height: 38,
  },
  input: {
    height: 60,
    width: 320,
    borderRadius: 74,
    marginTop: 20,
    backgroundColor: "white",
    textAlign: "center",
    paddingHorizontal: 0,
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    gap: 10,
    textAlign: "center",
  },
  btn: {
    fontFamily: "PoppinsMedium",
    color: COLORS.secondary,
    textAlign: "center",
  },
  button: {
    width: 320,
    height: 60,
    borderRadius: 74,
    backgroundColor: COLORS.textPrimary,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 30,
  },
  buttonText: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 19,
    color: COLORS.secondary,
  },
});

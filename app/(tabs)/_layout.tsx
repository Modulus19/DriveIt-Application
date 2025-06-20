import { Tabs } from "expo-router";
import React from "react";
import { Platform, Image, StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "PoppinsBold",
        },
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="branches"
        options={{
          title: "Branches",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assets/images/Branches.png")}
              style={[
                styles.Logo,
                {
                  width: size,
                  height: size,
                  tintColor: color,
                },
              ]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="vehicles"
        options={{
          title: "Vehicles",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assets/images/Vehicles.png")}
              style={[
                styles.Logo,
                {
                  width: size,
                  height: size,
                  tintColor: color,
                },
              ]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../../assets/images/Account.png")}
              style={[
                styles.Logo,
                {
                  width: size,
                  height: size,
                  tintColor: color,
                },
              ]}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  Logo: {
    width: 23,
    height: 28,
    resizeMode: "contain",
    tintColor: "#000",
  },
});

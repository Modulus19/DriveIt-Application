import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import COLORS from "../../constants/Colors";

export default function TabTwoScreen() {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search}
          placeholder="Search for a car"
          placeholderTextColor={COLORS.textPrimary}
        />
        <Pressable>
          <Image
            source={require("../../assets/images/Search.png")}
            style={styles.searchIcon}
          />
        </Pressable>
      </View>
      <View style={styles.carContainerWrapper}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Pressable
            onPress={() => setSelectedCar(1)}
            style={[
              styles.carContainer2,
              selectedCar === 1 && styles.carContainer1,
            ]}
          >
            <Image
              source={require("../../assets/images/Car1.png")}
              style={styles.car1}
            />
            <View style={styles.carContainerTextContainer}>
              <Text
                style={[
                  styles.carContainerText3,
                  selectedCar === 1 && styles.carContainerText1,
                ]}
              >
                Standard
              </Text>
              <Text
                style={[
                  styles.carContainerText2,
                  selectedCar === 1 && styles.carContainerText,
                ]}
              >
                56
              </Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => setSelectedCar(2)}
            style={[
              styles.carContainer2,
              selectedCar === 2 && styles.carContainer1,
            ]}
          >
            <Image
              source={require("../../assets/images/Car2.png")}
              style={styles.car1}
            />
            <View style={styles.carContainerTextContainer}>
              <Text
                style={[
                  styles.carContainerText3,
                  selectedCar === 2 && styles.carContainerText1,
                ]}
              >
                Prestige
              </Text>
              <Text
                style={[
                  styles.carContainerText2,
                  selectedCar === 2 && styles.carContainerText,
                ]}
              >
                22
              </Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => setSelectedCar(3)}
            style={[
              styles.carContainer2,
              selectedCar === 3 && styles.carContainer1,
            ]}
          >
            <Image
              source={require("../../assets/images/Car3.png")}
              style={styles.car2}
            />
            <View style={styles.carContainerTextContainer}>
              <Text
                style={[
                  styles.carContainerText3,
                  selectedCar === 3 && styles.carContainerText1,
                ]}
              >
                SUV
              </Text>
              <Text
                style={[
                  styles.carContainerText2,
                  selectedCar === 3 && styles.carContainerText,
                ]}
              >
                34
              </Text>
            </View>
          </Pressable>
        </ScrollView>
      </View>
      <Text
        style={[
          styles.carContainerText3,
          { alignSelf: "flex-start", marginLeft: 30, marginBottom: 15 },
        ]}
      >
        Available Vehicles
      </Text>
      <ScrollView showsVerticalScrollIndicator={false} pagingEnabled={true}>
        <View style={styles.majorCarContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginHorizontal: 20,
              marginTop: 20,
              alignItems: "center",
              gap: 30,
            }}
          >
            <View>
              <Text style={{ fontFamily: "PoppinsBold", fontSize: 34 }}>
                Toyota
              </Text>
              <Text
                style={{
                  fontFamily: "PoppinsRegular",
                  color: COLORS.textSecondary,
                  fontSize: 14,
                }}
              >
                Yaris iA
              </Text>
              <Text style={{ fontFamily: "PoppinsRegular", fontSize: 14 }}>
                Engine
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: "PoppinsLight",
                  color: COLORS.primary,
                  fontSize: 34,
                }}
              >
                $350
              </Text>
              <Text
                style={{
                  fontFamily: "PoppinsRegular",
                  color: COLORS.textSecondary,
                  fontSize: 14,
                }}
              >
                / month
              </Text>
              <Text
                style={{
                  fontFamily: "PoppinsRegular",
                  fontSize: 14,
                }}
              >
                4-Cyl 1.5 Litre
              </Text>
            </View>
          </View>
          <View>
            <Image
              source={require("../../assets/images/Car4.png")}
              style={{ width: 300, height: 150, alignSelf: "center" }}
            />
          </View>
        </View>
        <View style={styles.majorCarContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginHorizontal: 20,
              marginTop: 20,
              alignItems: "center",
              gap: 30,
            }}
          >
            <View>
              <Text style={{ fontFamily: "PoppinsBold", fontSize: 34 }}>
                Hyundai
              </Text>
              <Text
                style={{
                  fontFamily: "PoppinsRegular",
                  color: COLORS.textSecondary,
                  fontSize: 14,
                }}
              >
                i20
              </Text>
              <Text style={{ fontFamily: "PoppinsRegular", fontSize: 14 }}>
                Engine
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: "PoppinsLight",
                  color: COLORS.primary,
                  fontSize: 34,
                }}
              >
                $250
              </Text>
              <Text
                style={{
                  fontFamily: "PoppinsRegular",
                  color: COLORS.textSecondary,
                  fontSize: 14,
                }}
              >
                / month
              </Text>
              <Text
                style={{
                  fontFamily: "PoppinsRegular",
                  fontSize: 14,
                }}
              >
                6-Cyl 1.0 Litre
              </Text>
            </View>
          </View>
          <View>
            <Image
              source={require("../../assets/images/Car4.png")}
              style={{ width: 300, height: 150, alignSelf: "center" }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    height: 60,
    width: 320,
    borderRadius: 74,
    marginTop: 20,
    backgroundColor: "white",
    paddingHorizontal: 35,
    fontFamily: "PoppinsRegular",
    fontSize: 14,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  search: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    fontFamily: "PoppinsRegular",
  },
  searchIcon: {
    width: 17,
    height: 17,
  },
  carContainer1: {
    width: 120,
    height: 149,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    marginLeft: 35,
    marginVertical: 30,
  },
  carContainer2: {
    width: 120,
    height: 149,
    borderRadius: 20,
    backgroundColor: COLORS.secondary,
    marginLeft: 30,
    marginVertical: 35,
  },
  carContainerWrapper: {
    marginRight: 30,
    gap: 30,
  },
  car1: {
    width: 151,
    height: 86,
    position: "relative",
    right: 30,
    top: 5,
  },
  car2: {
    width: 151,
    height: 86,
    position: "relative",
    right: 30,
    top: 15,
  },
  carContainerText: {
    fontFamily: "PoppinsBold",
    color: COLORS.secondary,
    textAlign: "center",
  },
  carContainerText1: {
    fontFamily: "PoppinsMedium",
    color: COLORS.secondary,
    textAlign: "center",
  },
  carContainerText2: {
    fontFamily: "PoppinsBold",
    color: COLORS.textSecondary,
    textAlign: "center",
  },
  carContainerText3: {
    fontFamily: "PoppinsMedium",
    color: COLORS.textPrimary,
    textAlign: "center",
  },
  carContainerTextContainer: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  majorCarContainer: {
    width: 300,
    height: 301,
    borderRadius: 35,
    backgroundColor: COLORS.secondary,
    alignSelf: "center",
    marginBottom: 30,
  },
});

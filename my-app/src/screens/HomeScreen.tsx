import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import type { BottomTabParamList } from "../navigation/types";

type HomeNavProp = BottomTabNavigationProp<BottomTabParamList, "Home">;

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavProp>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.tag}>Visual Designer & Developer</Text>

        <Text style={styles.greeting}>Cześć jestem Michał</Text>

        <Text style={styles.subtext}>
          Lorem ipsum dolor sit amet,
          {"\n"}consectetur adipiscing elit. Sed do
          {"\n"}eiusmod tempor incididunt ut labore et
          {"\n"}dolore magna aliqua. Ut enim ad minim
          {"\n"}veniam, quis nostrud exercitation
          {"\n"}ullamco laboris nisi ut aliquip ex ea
          {"\n"}commodo consequat.
        </Text>

        <View style={styles.links}>
          <Pressable
            style={({ pressed }) => [
              styles.link,
              pressed && styles.linkPressed,
            ]}
            onPress={() => navigation.navigate("Projects")}
            accessibilityLabel="Przejdź do projektów"
          >
            <Text style={styles.linkText}>Projekty</Text>
            <Ionicons name="chevron-forward" size={20} color="#584FC0" />
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.link,
              pressed && styles.linkPressed,
            ]}
            onPress={() => navigation.navigate("About")}
            accessibilityLabel="Przejdź do o mnie"
          >
            <Text style={styles.linkText}>O mnie</Text>
            <Ionicons name="chevron-forward" size={20} color="#584FC0" />
          </Pressable>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.ctaWrapper,
            pressed && styles.ctaPressed,
          ]}
          onPress={() => navigation.navigate("Contact")}
          accessibilityLabel="Przejdź do kontaktu"
        >
          <LinearGradient
            colors={["#584FC0", "#938AFF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.cta}
          >
            <Text style={styles.ctaText}>Kontakt</Text>
          </LinearGradient>
        </Pressable>

        <Text style={styles.sectionTitle}>Wybrane Prace</Text>

        <ImageBackground
          source={require("../../assets/Background.png")}
          style={styles.mainTile}
          imageStyle={{ borderRadius: 12 }}
        />

        <View style={styles.tilesRow}>
          <ImageBackground
            source={require("../../assets/Background2.png")}
            style={styles.smallTile}
            imageStyle={{ borderRadius: 12 }}
          />

          <View style={styles.smallTileRight}>
            <Ionicons name="sparkles" size={32} color="#584FC0" />
            <Text style={styles.smallTileText}>Więcej projektów wkrótce.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 24,
    paddingBottom: 40,
  },
  tag: {
    color: "#584FC0",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000",
    marginBottom: 12,
  },
  subtext: {
    color: "#596065",
    fontSize: 16,
    lineHeight: 22,
  },
  links: {
    marginTop: 24,
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 12,
    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    // Android elevation
    elevation: 3,
  },
  linkPressed: {
    opacity: 0.9,
  },
  linkText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  ctaWrapper: {
    marginTop: 8,
  },
  ctaPressed: {
    opacity: 0.95,
  },
  cta: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  ctaText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
    marginBottom: 12,
    color: "#000",
  },
  mainTile: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 12,
  },
  tilesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    alignItems: "stretch",
  },
  smallTile: {
    flex: 1,
    height: 250,
    borderRadius: 12,
    overflow: "hidden",
    marginRight: 12,
  },
  smallTileRight: {
    flex: 1,
    height: 250,
    borderRadius: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    // shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  smallTileText: {
    color: "#000",
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
  },
});

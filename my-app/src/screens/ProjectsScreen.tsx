import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import type { BottomTabParamList } from "../navigation/types";

type ProjectsNavProp = BottomTabNavigationProp<BottomTabParamList, "Projects">;

export default function ProjectsScreen() {
  const navigation = useNavigation<ProjectsNavProp>();
  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.scroll}>
      <View>
        <Text style={styles.tag}>PROJKETY</Text>

        <Text style={styles.header}>Wybrane Prace</Text>

        <Text style={styles.subtext}>
          Odkryj moją pasję do tworzenia pięknych i{"\n"}funkcjonalnych
          rozwiązań cyfrowych dla
          {"\n"}nowoczesnych marek.
        </Text>

        <View style={styles.projectCard}>
          <Image
            source={require("../../assets/EcoConnect UI Design.png")}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>EcoConnect</Text>
            <Text style={styles.cardSubtitle}>
              Lorem ipsum dolor sit amet,
              {"\n"}consectetur adipiscing elit. Sed do
              {"\n"}eiusmod tempor incididunt ut labore
            </Text>

            <Pressable
              style={styles.cardLink}
              onPress={() => {}}
              accessibilityLabel="Zobacz szczegóły"
            >
              <Text style={styles.cardLinkText}>Zobacz szczegóły</Text>
              <Ionicons name="chevron-forward" size={18} color="#584FC0" />
            </Pressable>
          </View>
        </View>

        <View style={[styles.projectCard, { marginTop: 16 }]}>
          <Image
            source={require("../../assets/Nova Brand Identity.png")}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Nova Identity</Text>
            <Text style={styles.cardSubtitle}>
              Lorem ipsum dolor sit amet,
              {"\n"}consectetur adipiscing elit. Sed do
              {"\n"}eiusmod tempor incididunt ut labore
            </Text>

            <Pressable
              style={styles.cardLink}
              onPress={() => {}}
              accessibilityLabel="Zobacz szczegóły Nova"
            >
              <Text style={styles.cardLinkText}>Zobacz szczegóły</Text>
              <Ionicons name="chevron-forward" size={18} color="#584FC0" />
            </Pressable>
          </View>
        </View>

        <View style={styles.ctaSection}>
          <View style={styles.contactCircle}>
            <Ionicons name="sparkles" size={26} color="#5D5FEF" />
          </View>

          <Text style={styles.contactTitle}>Masz projekt w głowie?</Text>

          <Text style={styles.contactSubtitle}>
            Stwórzmy razem coś wyjątkowego.
          </Text>

          <Pressable
            style={({ pressed }) => [
              styles.ctaWrapper,
              pressed && styles.ctaPressed,
            ]}
            onPress={() => navigation.navigate("Contact")}
            accessibilityLabel="Napisz do mnie"
          >
            <LinearGradient
              colors={["#584FC0", "#938AFF"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.cta}
            >
              <Text style={styles.ctaText}>Napisz do mnie</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { backgroundColor: "#fff" },
  container: { padding: 24, paddingBottom: 40, marginTop: 40 },
  tag: {
    color: "#584FC0",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
  header: {
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
  projectCard: {
    marginTop: 20,
    borderRadius: 12,
    backgroundColor: "#fff",
    overflow: "hidden",
    // stronger shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.18,
    shadowRadius: 22,
    elevation: 10,
    // light bottom border to separate card from background
    borderBottomWidth: 2,
    borderBottomColor: "rgba(88,79,192,0.08)",
  },
  cardImage: {
    width: "100%",
    height: 180,
  },
  cardBody: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
    marginBottom: 8,
  },
  cardSubtitle: {
    color: "#596065",
    fontSize: 14,
    lineHeight: 20,
  },
  cardLink: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  cardLinkText: {
    color: "#000",
    fontWeight: "600",
    marginRight: 8,
  },
  ctaSection: {
    alignItems: "center",
    marginTop: 20,
    paddingVertical: 20,
  },
  contactCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#E4E9EE",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
    marginBottom: 8,
    textAlign: "center",
  },
  contactSubtitle: {
    color: "#596065",
    fontSize: 16,
    textAlign: "center",
  },
  ctaWrapper: {
    marginTop: 16,
  },
  ctaPressed: {
    opacity: 0.95,
  },
  cta: {
    width: 220,
    paddingVertical: 12,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    // shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.18,
    shadowRadius: 18,
    elevation: 8,
  },
  ctaText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});

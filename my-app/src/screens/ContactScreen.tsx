import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function ContactScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    // placeholder action
    Alert.alert("Wiadomość wysłana", "Dziękuję — wkrótce się odezwę.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.scroll}>
      <View>
        <Text style={styles.tag}>KONTAKT</Text>

        <Text style={styles.header}>Skontaktujmy się.</Text>

        <View style={styles.formCard}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Imię i nazwisko</Text>
            <TextInput
              style={styles.input}
              placeholder="Jan Kowalski"
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="jan@przykład.pl"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Wiadomość</Text>
            <TextInput
              style={[styles.input, styles.textarea]}
              placeholder="W czym mogę pomóc?"
              multiline
              numberOfLines={5}
              textAlignVertical="top"
              value={message}
              onChangeText={setMessage}
            />
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.ctaWrapper,
              pressed && styles.ctaPressed,
            ]}
            onPress={handleSubmit}
            accessibilityLabel="Wyślij wiadomość"
          >
            <LinearGradient
              colors={["#584FC0", "#938AFF"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.ctaRow}
            >
              <Text style={styles.ctaText}>Wyślij</Text>
              <Ionicons
                name="send"
                size={18}
                color="#fff"
                style={styles.ctaIcon}
              />
            </LinearGradient>
          </Pressable>
        </View>

        <View style={styles.socialSection}>
          <Text style={styles.socialText}>Znajdziesz mnie również tutaj</Text>
          <View style={styles.socialRow}>
            <View style={styles.socialCircle}>
              <Ionicons name="globe-outline" size={22} color="#584FC0" />
            </View>
            <View style={styles.socialCircle}>
              <Ionicons name="briefcase-outline" size={22} color="#584FC0" />
            </View>
            <View style={styles.socialCircle}>
              <Ionicons name="share-social-outline" size={22} color="#584FC0" />
            </View>
          </View>
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
  formCard: {
    marginTop: 12,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    // shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 6,
  },
  formGroup: { marginBottom: 12 },
  label: { color: "#596065", fontSize: 13, marginBottom: 6 },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E4E9EE",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  textarea: { height: 120 },
  ctaWrapper: { marginTop: 8 },
  ctaPressed: { opacity: 0.95 },
  ctaRow: {
    width: "100%",
    paddingVertical: 12,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  ctaText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  ctaIcon: { marginLeft: 8 },
  socialSection: {
    marginTop: 36,
    alignItems: "center",
  },
  socialText: {
    color: "#8A9299",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "500",
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  socialCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
});

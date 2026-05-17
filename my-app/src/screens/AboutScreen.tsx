import React from "react";
import { ScrollView, View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container} style={styles.scroll}>
      <View>
        <Text style={styles.tag}>ABOUT ME</Text>

        <Text style={styles.header}>I’m a Front End Developer</Text>

        <Text style={styles.subtext}>
          Lorem ipsum dolor sit amet,
          {"\n"}consectetur adipiscing elit. Sed do
          {"\n"}eiusmod tempor incididunt ut labore et
          {"\n"}dolore magna aliqua. Ut enim ad minim
          {"\n"}veniam, quis nostrud exercitation
          {"\n"}ullamco laboris nisi ut aliquip ex ea
          {"\n"}commodo consequat.
          {"\n"}
          Duis aute irure dolor in reprehenderit
          {"\n"}in voluptate velit esse cillum dolore eu
          {"\n"}fugiat nulla pariatur. Excepteur sint
          {"\n"}occaecat cupidatat non proident, sunt
          {"\n"}in culpa qui officia deserunt mollit
          {"\n"}anim id est laborum.
        </Text>
        
        <View style={styles.statsRow}>
          <View style={[styles.statTile, styles.statLeft]}>
            <View style={styles.tileTop}>
              <Ionicons name="code-slash" size={28} color="#fff" />
            </View>
            <View style={styles.tileBottom}>
              <Text style={styles.statNumber}>5+</Text>
              <Text style={styles.statLabel}>Years exp</Text>
            </View>
          </View>

          <View style={[styles.statTile, styles.statRight]}>
            <View style={styles.tileTop}>
              <Ionicons name="rocket" size={28} color="#fff" />
            </View>
            <View style={styles.tileBottom}>
              <Text style={styles.statNumber}>40+</Text>
              <Text style={styles.statLabelRight}>Projects</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Core expertise</Text>

        <View style={styles.expertiseRow}>
          <View style={styles.pill}><Text style={styles.pillText}>React.js</Text></View>
          <View style={styles.pill}><Text style={styles.pillText}>Tailwind CSS</Text></View>
          <View style={styles.pill}><Text style={styles.pillText}>TypeScript</Text></View>
          <View style={styles.pill}><Text style={styles.pillText}>Next.js</Text></View>
          <View style={styles.pill}><Text style={styles.pillText}>Figma</Text></View>
        </View>

        <Pressable
          style={({ pressed }) => [styles.ctaWrapper, pressed && styles.ctaPressed]}
          onPress={() => {}}
          accessibilityLabel="Download resume"
        >
          <LinearGradient
            colors={["#584FC0", "#938AFF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.cta}
          >
            <Text style={styles.ctaText}>Download resume</Text>
          </LinearGradient>
        </Pressable>
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
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  statTile: {
    width: '48%',
    height: 150,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  statLeft: {
    backgroundColor: '#757C81',
  },
  statRight: {
    backgroundColor: '#584FC0',
  },
  tileTop: {
    // top area for icon
  },
  tileBottom: {
    // bottom area for numbers and label
  },
  statNumber: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
  },
  statLabel: {
    color: '#d7d7d7',
    fontSize: 12,
    marginTop: 6,
  },
  statLabelRight: {
    color: '#fff',
    fontSize: 12,
    marginTop: 6,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 12,
    color: '#000',
  },
  expertiseRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  pill: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
    // shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  pillText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
  ctaWrapper: {
    marginTop: 16,
  },
  ctaPressed: {
    opacity: 0.95,
  },
  cta: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    // shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.18,
    shadowRadius: 18,
    elevation: 8,
  },
  ctaText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

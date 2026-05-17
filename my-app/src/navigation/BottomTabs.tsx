import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import type { BottomTabParamList } from "./types";
import HomeScreen from "../screens/HomeScreen";
import ContactScreen from "../screens/ContactScreen";
import AboutScreen from "../screens/AboutScreen";
import ProjectsScreen from "../screens/ProjectsScreen";

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#2f95dc",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color, size, focused }) => {
          let name: React.ComponentProps<typeof Ionicons>["name"];
          switch (route.name) {
            case "Home":
              name = focused ? "home" : "home-outline";
              break;
            case "Contact":
              name = focused ? "mail" : "mail-outline";
              break;
            case "About":
              name = focused ? "person" : "person-outline";
              break;
            case "Projects":
              name = focused ? "grid" : "grid-outline";
              break;
            default:
              name = "ellipse";
          }
          return <Ionicons name={name as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Projects" component={ProjectsScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
}

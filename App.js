import React from "react";
import { SafeAreaView, Text } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 22, textAlign: "center", margin: 10 }}>
        Gestión de Tareas
      </Text>
      <HomeScreen />
    </SafeAreaView>
  );
}

import { View, Text, ScrollView } from "react-native";
import AppCard from "../components/AppCard";
import { apps } from "../data/apps";

export default function Home() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#121212",
        padding: 20
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 20
        }}
      >
        Arjun App Store
      </Text>

      {apps.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </ScrollView>
  );
}
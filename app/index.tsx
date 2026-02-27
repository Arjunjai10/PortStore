import { View, Text, ScrollView } from "react-native";
import AppCard from "../components/AppCard";
import { apps } from "../data/apps";

export default function Home() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#ffffffff",
        padding: 20
      }}
    >
      <Text
        style={{
          color: "black",
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
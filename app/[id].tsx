import { View, Text, Image, ScrollView, Linking, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { apps } from "../data/apps";

export default function AppDetails() {
  const { id } = useLocalSearchParams();
  const app = apps.find((a) => a.id === id);

  if (!app) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>App not found</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#121212",
        padding: 20
      }}
    >
      <Image
        source={{ uri: app.icon }}
        style={{ width: 100, height: 100, borderRadius: 20 }}
      />

      <Text
        style={{
          color: "white",
          fontSize: 26,
          fontWeight: "bold",
          marginTop: 10
        }}
      >
        {app.name}
      </Text>

      <Text style={{ color: "gray", marginBottom: 10 }}>
        Version {app.version}
      </Text>

      <Text style={{ color: "white", marginBottom: 20 }}>
        {app.description}
      </Text>

      <TouchableOpacity
        onPress={() => Linking.openURL(app.apk)}
        style={{
          backgroundColor: "#00c853",
          padding: 15,
          borderRadius: 10,
          alignItems: "center",
          marginBottom: 20
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>
          Download APK
        </Text>
      </TouchableOpacity>

      <Text style={{ color: "white", fontSize: 20, marginBottom: 10 }}>
        Screenshots
      </Text>

      {app.screenshots.map((shot, index) => (
        <Image
          key={index}
          source={{ uri: shot }}
          style={{
            width: "100%",
            height: 400,
            marginBottom: 15,
            borderRadius: 10
          }}
        />
      ))}
    </ScrollView>
  );
}
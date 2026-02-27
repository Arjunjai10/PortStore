import { View, Text, Image, Pressable } from "react-native";
import { router } from "expo-router";
import { useState } from "react";

export default function AppCard({ app }: any) {
  const [hovered, setHovered] = useState(false);

  return (
    <Pressable
      onPress={() => router.push(`/app/${app.id}`)}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      style={{
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        backgroundColor: hovered ? "#ffffff" : "#1e1e1e",
        borderRadius: 12,
        transform: [{ scale: hovered ? 1.03 : 1 }],
        shadowColor: "#000",
        shadowOffset: { width: 0, height: hovered ? 10 : 4 },
        shadowOpacity: hovered ? 0.4 : 0.2,
        shadowRadius: hovered ? 20 : 10,
        elevation: hovered ? 10 : 4,
      }}
    >
      <Image
        source={{ uri: app.icon }}
        style={{ width: 60, height: 60, borderRadius: 12 }}
      />

      <View style={{ marginLeft: 15, flex: 1 }}>
        <Text
          style={{
            color: hovered ? "black" : "white",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {app.name}
        </Text>

        <Text style={{ color: "gray", marginBottom: 6 }}>
          Version {app.version}
        </Text>

        {/* ⭐ Rating */}
        <Text style={{ color: "gold", fontWeight: "600" }}>
          ⭐ {app.rating}
        </Text>

        {/* 📥 Downloads */}
        <Text style={{ color: "gray" }}>
          {Math.floor(app.downloads / 1000)}K+ downloads
        </Text>
      </View>
    </Pressable>
  );
}
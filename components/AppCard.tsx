import { View, Text, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function AppCard({ app }: any) {
  return (
    <TouchableOpacity
      onPress={() => router.push(`/${app.id}`)}
      style={{
        flexDirection: "row",
        padding: 15,
        marginVertical: 8,
        backgroundColor: "#ffffffff",
        borderRadius: 10
      }}
    >
      <Image
        source={{ uri: app.icon }}
        style={{ width: 60, height: 60, borderRadius: 12 }}
      />

      <View style={{ marginLeft: 15 }}>
        <Text style={{ color: "black", fontSize: 18 }}>
          {app.name}
        </Text>
        <Text style={{ color: "gray" }}>
          Version {app.version}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
import { View, Text, Image, Pressable } from "react-native";
import { router } from "expo-router";
import { useState } from "react";

export default function AppCard({ app }: any) {
    const [hovered, setHovered] = useState(false);

    return (
        <Pressable
            onPress={() => router.push(`/${app.id}`)}
            onHoverIn={() => setHovered(true)}
            onHoverOut={() => setHovered(false)}
            style={{
                flexDirection: "row",
                padding: 15,
                marginVertical: 10,
                backgroundColor: hovered ? "#ffffffff" : "#1e1e1e",
                borderRadius: 12,
                transform: [{ scale: hovered ? 1.03 : 1 }],

                // Standard React Native shadow properties
                ...(hovered
                    ? {
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 10 },
                        shadowOpacity: 0.4,
                        shadowRadius: 20,
                        elevation: 10,
                    }
                    : {
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.2,
                        shadowRadius: 10,
                        elevation: 4,
                    }),
            }}
        >
            <Image
                source={{ uri: app.icon }}
                style={{ width: 60, height: 60, borderRadius: 12 }}
            />

            <View style={{ marginLeft: 15 }}>
                <Text style={{ color: "white", fontSize: 18 }}>
                    {app.name}
                </Text>
                <Text style={{ color: "gray" }}>
                    Version {app.version}
                </Text>
            </View>
        </Pressable>
    );
}
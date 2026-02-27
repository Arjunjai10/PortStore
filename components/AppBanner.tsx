import { View, Text, Image, Pressable } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function AppBanner({ app }: any) {
    const [hovered, setHovered] = useState(false);

    return (
        <Pressable
            onPress={() => router.push(`/${app.id}`)}
            onHoverIn={() => setHovered(true)}
            onHoverOut={() => setHovered(false)}
            style={{
                backgroundColor: "#ffffffff",
                padding: 30,
                borderRadius: 20,
                marginBottom: 25,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                transform: [{ scale: hovered ? 1.02 : 1 }],

                // Standard shadow properties
                ...(hovered
                    ? {
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 15 },
                        shadowOpacity: 0.4,
                        shadowRadius: 30,
                        elevation: 15,
                    }
                    : {
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 5 },
                        shadowOpacity: 0.2,
                        shadowRadius: 15,
                        elevation: 5,
                    }),
            }}
        >
            {/* Left Content */}
            <View style={{ flex: 1 }}>
                <Text
                    style={{
                        color: "black",
                        fontSize: 28,
                        fontWeight: "bold",
                        marginBottom: 10,
                    }}
                >
                    {app.name}
                </Text>

                <Text style={{ color: "#e0e0e0", marginBottom: 15 }}>
                    {app.description}
                </Text>

                <View
                    style={{
                        backgroundColor: "#1862caff",
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        borderRadius: 10,
                        alignSelf: "flex-start",
                    }}
                >
                    <Text style={{ color: "black", fontWeight: "bold" }}>
                        Install Now
                    </Text>
                </View>
            </View>

            {/* Right Icon */}
            <Image
                source={{ uri: app.icon }}
                style={{
                    width: 120,
                    height: 120,
                    borderRadius: 25,
                    marginLeft: 20,
                }}
            />
        </Pressable>
    );
}
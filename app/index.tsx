import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
import { apps } from "../data/apps";
import AppCard from "../components/AppCard";
import AppBanner from "../components/AppBanner";
import SearchBar from "../components/SearchBar";
import { TouchableOpacity } from "react-native";

export default function Home() {
    const [search, setSearch] = useState("");
    const categories = ["All", "Security", "Productivity"];
    const [selected, setSelected] = useState("All");
    const [dark, setDark] = useState(true);

    const filteredApps = apps.filter((app) => {
        const matchesSearch = app.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            selected === "All" || app.category === selected;

        return matchesSearch && matchesCategory;
    });

    return (
  <ScrollView
    style={{
      flex: 1,
      backgroundColor: dark ? "#121212" : "#ffffff",
      padding: 20,
    }}
  >
    {/* Title */}
    <Text
      style={{
        color: dark ? "white" : "black",
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
      }}
    >
      Arjun App Store
    </Text>

    {/* Theme Toggle */}
    <Text
      onPress={() => setDark(!dark)}
      style={{
        color: "#00c853",
        marginBottom: 20,
        fontWeight: "bold",
      }}
    >
      Toggle Theme
    </Text>

    <SearchBar value={search} onChange={setSearch} />

    {/* Category Filter */}
    <View style={{ flexDirection: "row", marginBottom: 20 }}>
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat}
          onPress={() => setSelected(cat)}
          style={{
            backgroundColor:
              selected === cat
                ? "#00c853"
                : dark
                ? "#2a2a2a"
                : "#e0e0e0",
            paddingHorizontal: 15,
            paddingVertical: 8,
            borderRadius: 20,
            marginRight: 10,
          }}
        >
          <Text
            style={{
              color:
                selected === cat
                  ? "white"
                  : dark
                  ? "white"
                  : "black",
              fontWeight: "bold",
            }}
          >
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </View>

    {/* Dynamic Banner */}
    {filteredApps.length > 0 && (
      <AppBanner app={filteredApps[0]} />
    )}

    {/* Grid Layout */}
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {filteredApps.map((app) => (
        <View key={app.id} style={{ width: "32%" }}>
          <AppCard app={app} />
        </View>
      ))}
    </View>
  </ScrollView>
);
}
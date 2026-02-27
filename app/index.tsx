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
      style={{ flex: 1, backgroundColor: "#ffffffff", padding: 20 }}
    >
      <Text
        style={{
          color: "black",
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 15,
        }}
      >
        Arjun App Store
      </Text>

      <SearchBar value={search} onChange={setSearch} />
     {/* Category Filter */}
<View style={{ flexDirection: "row", marginBottom: 20 }}>
  {categories.map((cat) => (
    <TouchableOpacity
      key={cat}
      onPress={() => setSelected(cat)}
      style={{
        backgroundColor: selected === cat ? "#00c853" : "#e0e0e0",
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 10,
      }}
    >
      <Text
        style={{
          color: selected === cat ? "white" : "black",
          fontWeight: "bold",
        }}
      >
        {cat}
      </Text>
    </TouchableOpacity>
  ))}
</View>

      <AppBanner app={apps[0]} />

      {filteredApps.map((app) => (
        <AppCard key={app.id} app={app} />
      ))}
    </ScrollView>
  );
  
}
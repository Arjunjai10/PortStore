import { View, TextInput } from "react-native";

export default function SearchBar({ value, onChange }: any) {
  return (
    <View
      style={{
        backgroundColor: "#1e1e1e",
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
      }}
    >
      <TextInput
        placeholder="Search apps..."
        placeholderTextColor="gray"
        value={value}
        onChangeText={onChange}
        style={{ color: "white", height: 45 }}
      />
    </View>
  );
}

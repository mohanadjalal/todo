import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Main from "./app/components/main";
import Note from "./app/components/note";
import HeaderBtn from "./app/components/common/headerBtn";
import { createNote } from "./app/utils/crud";
import NoteDetails from "./app/components/noteDetails";

export default function App() {
  const create = async () => {
    createNote({ title: "first note", body: "hi this is my new note " });
  };
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackButtonMenuEnabled: true,
          headerRight: () => (
            <HeaderBtn styles={{ paddingLeft: 10 }} handelOnPress={create} />
          ),
        }}
      >
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: "My Notes" }}
        />

        <Stack.Screen
          name="Note"
          component={NoteDetails}
          options={{ title: "Note" }}
        />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

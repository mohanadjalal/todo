import AsyncStorage from "@react-native-async-storage/async-storage";

export async function createNote(note) {
  try {
    const id = `note${(await AsyncStorage.getAllKeys()).length}`;
    let newNote = JSON.stringify({ ...note, id });
    await AsyncStorage.setItem(id, newNote);
    console.log("note created successfully");
  } catch (error) {
    console.log(error);
  }
}

export async function getAllNotes() {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const notes = [];
    keys.forEach(async (key) => {
      if (key.includes("note")) {
        let note = JSON.parse(await AsyncStorage.getItem(key));
        notes.push(note)
      }
    });
    return notes;
  } catch (error) {
    console.error("error occurred in get all notes");
    console.log(error);
  }
}

export async function deleteNote(id) {
  await AsyncStorage.removeItem(id);
}

export async function updateNote(id, newNote) {
  let note = JSON.stringify(newNote);
  await AsyncStorage.mergeItem(id, note);
}

export async function getNote(id) {
  const note = await AsyncStorage.getItem(id);
  return JSON.parse(note);

}

 
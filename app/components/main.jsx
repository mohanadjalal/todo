import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { getAllNotes } from "../utils/crud";
import Note from "./note";

function Main({ navigation, route }) {
    onNotePress = (noteId)=> { 
        navigation.navigate('Note' ,  {id: noteId})
        console.warn(noteId);
    }
  const [notes, setNotes] = useState([]);
  useEffect( () => {
    async function getNotes(){ 
        setNotes(await getAllNotes() ); 
    }
    getNotes()
  }, []);

  return (
    <View>
      
      <FlatList
      style={styles.list}
        data={notes}
        renderItem={({ item }) => <Note note={item} handelOnPress={onNotePress} />}
        keyExtractor={(item) => item.id}
        
      />
    </View>
  );
}

const styles = StyleSheet.create({ 
    list: { 
        width:'100%',
        height: '100%' ,
        columnGap:50 , 
        backgroundColor:'wheat',
        padding: 10,
        alignContent:'center' , 
        
    }
})

export default Main;

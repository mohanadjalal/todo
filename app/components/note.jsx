import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

  function Note({note ,handelOnPress}) {
    return (
      <TouchableOpacity style={styles.container} onPress={()=>handelOnPress(note?.id)} >
       <Text style={styles.title} >{note.id} </Text>
       <Text style={styles.title} >{note.title} </Text>
       <Text style={styles.body}>{note?.body} </Text>
      </TouchableOpacity>
    );
  }

  const styles = StyleSheet.create({ 
    container : {  
        width : '100%' , 
        height: 100 , 
        backgroundColor : '#FFBD33' , 
        padding:10 ,
        marginTop:10 , 
        borderRadius:15 , 
    } , 
    title : { 
        fontSize:16 , 
        color : 'black'
    }, 
    body : {  
        fontSize:13 , 
        color : 'black'
    }
  })


export default Note;

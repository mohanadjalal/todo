import { View, Text } from 'react-native';

 

  function NoteDetails({navigation, route }) {
    return (
      <View>
        <Text> NoteDetails {route.params?.id}   </Text>
      </View>
    );
  }
 

export default NoteDetails;

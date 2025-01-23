import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>Robert</Text>
      <View>
        <Text>Advance Mobile</Text>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_IcZPdPsHxo6_sEGt2viy7YoxU-R-2JsHUg&s'
          }}
          style={{width: 300, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          textAlign: 'center',
        }}
        defaultValue="You're Typing...'"
      />
    </ScrollView>
  );
};

export default App;
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const [text, setText] = React.useState('');
  const [data, setData] = React.useState([]);



  const listAdd = () => {
    setData([... data, {key:text}]);
    setText("");
  }

  const listClear = () => {
    setData([]);
  }

  return (
    <View style={styles.container}>
      <TextInput style={{width:200, borderColor:'gray', borderWidth:1}}
        onChangeText={text=> setText(text)}
        value={text}
      />
      <Button onPress={listAdd} title="Add" />
      <Button onPress={listClear} title="clear" />

      <Text>Shopping List</Text>
      <FlatList
        data={data}
        renderItem={({item}) =>
          <Text>{item.key}</Text> }
      /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

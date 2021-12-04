import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const TodoInsert = ({onAddTodo}) => {
  const [newTodoItem, setNewTodoItem] = useState('');

  const todoInputHandler = newTodo => {
    setNewTodoItem(newTodo);
  };

  const addTodoHandler = () => {
    onAddTodo(newTodoItem);
    setNewTodoItem('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add an item!"
        placeholderTextColor={'#999'}
        autoCorrect={false}
        onChangeText={todoInputHandler}  // 실시간으로 입력한 텍스트 값의 상태가 업데이트
        value={newTodoItem}  // newTodoItem에는 텍스트 값의 최신 상태가 담기게 됨
      />
      <View style={styles.button}>
        <Button title={'ADD'} onPress={addTodoHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',  // 요소들 사이 동일한 간격
    alignItems: 'center',  // 세로 정렬 (flexDirection: 'row')
  },
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  button: {
    marginRight: 10,
  },
});

export default TodoInsert;
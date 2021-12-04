import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, onRemove, onToggle}) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {/* 
      map() 함수를 이용해서 todos에 담긴 아이템을 하나씩 TodoListItem 컴포넌트로 전달
			(map(): 값과 인덱스를 인자로 받아 자동으로 for문을 돌려 값을 빼도록 해준다)
      */}
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}  // 리스트에 있는 아이템 객체마다 고유한 key값이 필요
          {...todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
});

export default TodoList;
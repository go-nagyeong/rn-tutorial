/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   TextInput,
   View,
   Text,
   ScrollView,
 } from 'react-native';
 import TodoInsert from './components/TodoInsert';
 import TodoList from './components/TodoList';
 
 const App = () => {
   const [todos, setTodos] = useState([]);
   
   const addTodo = text => {
     setTodos([
       ...todos,  // ... 연산자 : Rest Parameter? Spread Operator?
       {id: Math.random().toString(), textValue: text, checked: false},
     ]);
   };
 
   // 할 일 목록 삭제하는 함수
   const onRemove = id => e => {
     setTodos(todos.filter(todo => todo.id !== id));
   };
 
   // 체크 박스 표시/해제하는 함수
   const onToggle = id => e => {
     setTodos(
       todos.map(todo =>
         todo.id === id ? {...todo, checked: !todo.checked} : todo,
         // ? 연산자 : 콜론기호(:) 와 함께 삼항 연산자로 사용
         // <조건 ? 참일때의 결과 : 거짓일때의 결과>
       ),
     );
   };
 
   return (
     // SafeAreaView를 사용하면 아이폰의 노치 영역을 감안하여 자동으로 패딩 계산함
     // (콘텐츠가 노치에 가려지지 않게 하기 위함)
     <SafeAreaView style={styles.container}>
       <Text style={styles.appTitle}>Hello Todolist</Text>
       <View style={styles.card}>
         {/* addTodo 함수를 TodoInsert 컴포넌트로 전달 */}
         <TodoInsert onAddTodo={addTodo} />
         {/* 할 일 목록의 객체가 담긴 배열과 함수들을 TodoList와 TodoItem 컴포넌트에 전달 */}
         <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
       </View>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#3143e8',
   },
   appTitle: {
     color: '#fff',
     fontSize: 36,
     marginTop: 30,
     marginBottom: 30,
     fontWeight: '300',
     textAlign: 'center',
     backgroundColor: '#3143e8',
   },
   card: {
     backgroundColor: '#fff',
     flex: 1,
     borderTopLeftRadius: 10,
     borderTopRightRadius: 10,
     marginLeft: 10,
     marginRight: 10,
   },
   input: {
     padding: 20,
     borderBottomColor: '#bbb',
     borderBottomWidth: 1,
     fontSize: 24,
     marginLeft: 20,
   },
 });
 
 export default App;
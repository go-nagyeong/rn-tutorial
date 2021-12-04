/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component} from 'react';
 import {Text, StyleSheet, View, Button} from 'react-native';
 import { createAppContainer } from 'react-navigation';
 // createAppContainer: Navigation으로 만들어낸 Stack 들을 하나의 상자에 담아 앱이 인식 할 수 있는 형태로 만들어주는 API
 import { createStackNavigator } from 'react-navigation-stack';
 
 // 클래스형 컴포넌트 (Todolist의 경우, 함수형 컴포넌트)
 class Home extends Component {
   render() {
     return (
       <View style={styles.eachView}>
         <Text>홈 화면 입니다.</Text>
         <Button
           title="챗 화면으로 가기"
           onPress={() => this.props.navigation.navigate('Chat')} />
           {/* 
           1. props: 변하지 않는 데이터 / 상위 컴포넌트에서 하위 컴포넌트로 데이터를 넘겨줄 때 사용
             => <컴포넌트이름 props이름 = “값”>
                이렇게 상위 컴포넌트에서 HTML의 attribute를 정의하듯이 하위 컴포넌트의 속성처럼 사용하면 됨
           2. navigation.navigate(name, params): route(name)에 parameter(params)를 전달
           */}
         <Button
           title="세팅 화면으로 가기"
           onPress={() => this.props.navigation.navigate('Settings')} />
       </View>
     )
   }
 }
 
 class Chat extends Component {
   render() {
     return (
       <View style={styles.eachView}>
         <Text>챗 화면 입니다.</Text>
         <Button
           title="홈 화면으로 가기"
           onPress={() => this.props.navigation.navigate('Home')} />
       </View>
     )
   }
 }
 
 class Settings extends Component {
   render() {
     return (
       <View style={styles.eachView}>
         <Text>세팅 화면 입니다.</Text>
         <Button
           title="홈 화면으로 가기"
           onPress={() => this.props.navigation.navigate('Home')} />
       </View>
     )
   }
 }
 
 const App = createStackNavigator(
   {
     Chat: {screen: Chat},
     Home: {screen: Home},
     Settings  // 설정이 'screen' 밖에 없다면, 중괄호는 생략 가능
   },
   { 
     // 처음 보여 줄 화면 설정
     initialRouteName: 'Home'
   }
 );
 
 const AppContainer = createAppContainer(App);
 
 export default () => (
   <AppContainer />
 );
 
 const styles = StyleSheet.create({
   centerView: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center"
   },
   eachView: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center"
   }
 });
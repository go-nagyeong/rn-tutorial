import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TodoListItem = ({textValue, id, checked, onRemove, onToggle}) => {
  return (
    <View style={styles.container}>
      {/* 체크박스 */}
      <TouchableOpacity onPressOut={onToggle(id)}>
        {checked ? (
          <View style={styles.completeCircle}>
            <Icon name="circledowno" size={30} color="#3143e8" />
          </View>
        ) : (
          <View style={styles.circle} />
        )}
      </TouchableOpacity>
      
      {/* 할 일 문자 */}
      <Text style={[
        styles.text, 
        checked ? styles.strikeText : styles.unstrikeText,
      ]}>
        {textValue}
      </Text>

      {/* 삭제 버튼 */}
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText} onPress={onRemove(id)} >
          <Icon name="delete" size={30} color="#e33057" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    // hairlineWidth : 결과 선이 선명하게 보이도록 하기 위해 이는 주어진 화면 밀도에서
		// 플랫폼에 있는 가는 선의 표준 두께에 근사하는 정수 픽셀 수를 지정
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
    width: 100,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'blue',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },
  completeCircle: {
    marginRight: 20,
    marginLeft: 20,
  },
  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
  unstrikeText: {
    color: '#29323c',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default TodoListItem;
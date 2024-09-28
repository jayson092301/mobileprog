import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';  // Import Icon library
import styles from './styles';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.length > 0) {
      setTasks([...tasks, { id: Date.now().toString(), text: task }]);
      setTask(''); // Clear the input after adding the task
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((item) => item.id !== id);
    setTasks(updatedTasks);
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((item) => item.id === id);
    setTask(taskToEdit.text);
    deleteTask(id); // Optionally delete the task for re-editing or update logic can be added here.
  };

  const renderTask = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item.text}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => editTask(item.id)} style={styles.iconButton}>
          <Icon name="edit" size={24} color="#1E201E" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTask(item.id)} style={styles.iconButton}>
          <Icon name="delete" size={24} color="#1E201E" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Activity List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter task..."
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <Button title="Add" color = '#3C3D37' onPress={addTask} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
        style={styles.list}
      />
    </SafeAreaView>
  );
};



export default App;

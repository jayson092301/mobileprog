import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#697565',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: '#ECDFCC',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  list: {
    marginTop: 20,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomColor: '#ECDFCC',
    borderBottomWidth: 1,
  },
  taskText: {
    fontSize: 18,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 10,
  },
});

export default styles;

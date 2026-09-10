import { StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#387E7F',
    alignItems: 'center',
    justifyContent: 'center',
    padding : 16,
  },

  form: {
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: 'lightgray',
    color: 'white',
    padding: 10,
    margin: 12,
    width : 250 ,
    
  },

  button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },

  text:{
    color: '#132da0e7',
    marginTop: 30,
  },

  recipe:{
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },

  textarea: {
  borderWidth: 1,
  borderColor: 'white',
  borderRadius: 5,
  padding: 10,
  marginTop: 5,
  width: 300,
  height: 450,
  color: 'white',        
  textAlignVertical: 'top',
  placeholderTextColor : 'white',
},

durationContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  width: '80%',
},

durationPicker: {
  width: 120,
  color: 'white',
  padding: 7,
}

});

export default styles;
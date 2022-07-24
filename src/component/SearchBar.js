import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = ({
  placeholder,

  onPressSearch,
  value,
  onChangeText,
}) => {
  const [onFocus, setOnFocus] = useState(true);

  const handleOnFocus = () => {
    setOnFocus(true);
  };
  const handleOnBlur = () => {
    setOnFocus(false);
  };

  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.fieldContainer}>
        <View
          style={onFocus ? styles.inputContainerFocus : styles.inputContainer}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onPressSearch}>
            <Icon name={'search'} color="#8A8A8A" size={30} />
          </TouchableOpacity>
          <TextInput
            onChangeText={onChangeText}
            value={value}
            style={styles.textInput}
            placeholder={placeholder}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  fieldContainer: {
    width: '90%',
    paddingVertical: 5,
  },
  inputContainer: {
    height: 50,
    borderRadius: 16,
    backgroundColor: '#fff',
    flexDirection: 'row-reverse',
    paddingHorizontal: 15,
  },
  inputContainerFocus: {
    borderWidth: 1.5,
    borderColor: '#7126B5',
    height: 50,
    borderRadius: 16,
    backgroundColor: '#fff',
    flexDirection: 'row-reverse',
    paddingHorizontal: 15,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    width: '100%',
    paddingVertical: 5,
  },
});

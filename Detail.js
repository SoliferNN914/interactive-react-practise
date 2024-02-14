import React from 'react';
import { View, Text, Button, Alert, Switch, ActivityIndicator } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const DetailsScreen = () => {
  return (
    <View>
      <Text>This is the Details Screen</Text>
      <Button
        onPress={() => {
          Alert.alert('You tapped the button!');
        }}
        title="Press Me"
      />
      <Switch></Switch>
      <ActivityIndicator></ActivityIndicator>
      <Picker>
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};

export default DetailsScreen;

import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppTextField} from '../../components/AppTextField';
import {AppThemeModel} from '../../utitles/models';
import {textStyleHeader} from '../../utitles/styles';
import {AppButton} from '../../components';
import {Cat} from '../../model/Cat';
import {withTheme} from '../../utitles/theme/theme-provider/withTheme';
import {useNavigation, useRoute} from '@react-navigation/native';

const Cancel = require('../../assets/icons/cancel.png');

type AddCatProps = {
  theme: AppThemeModel;
};

const AddCat = ({theme}: AddCatProps) => {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    params: {onSubmit, isEdit, cat},
  } = route;

  const [name, setName] = useState(isEdit ? cat.name : '');
  const [breed, setBreed] = useState(isEdit ? cat.breed : '');
  const [color, setColor] = useState(isEdit ? cat.color : '');
  const [age, setAge] = useState(isEdit ? cat.age : '');

  return (
    <SafeAreaView style={styles(theme).root}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles(theme).title}>Add Cart</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Cancel} style={{width: 30, height: 30}} />
        </TouchableOpacity>
      </View>

      <AppTextField
        title={'Name'}
        value={name}
        onChangeText={(text: string) => setName(text)}
      />
      <AppTextField
        title={'Breed'}
        value={breed}
        onChangeText={(text: string) => setBreed(text)}
      />
      <AppTextField
        title={'Color'}
        value={color}
        onChangeText={(text: string) => setColor(text)}
      />
      <AppTextField
        title={'Age (Years)'}
        value={age}
        onChangeText={(text: string) => setAge(text)}
      />

      <AppButton
        text={'Submit'}
        containerStyle={{marginTop: 20}}
        onPress={() => {
          if (name && breed && age && color) {
            let cat: Cat = {
              age: age,
              breed: breed,
              color: color,
              id: 0,
              name: name,
            };
            onSubmit(cat);
            navigation.goBack();
          }
        }}
      />
    </SafeAreaView>
  );
};

const styles = (theme: AppThemeModel) => {
  return StyleSheet.create({
    root: {
      marginVertical: 50,
      marginHorizontal: 20,
    },
    title: {
      ...textStyleHeader(theme),
      textAlign: 'center',
    },
  });
};

export default withTheme(AddCat);

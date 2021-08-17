import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {withTheme} from '../utitles/theme/theme-provider/withTheme';
import {AppThemeModel} from '../utitles/models';

export interface IAppTextFieldProps {
  title?: string;
  value?: string;
  titleStyle?: any;
  placeHolder?: string;
  inputStyle?: any;
  containerStyle?: any;
  onChangeText: (text: string) => void;
  theme: AppThemeModel;
}

export const AppTextFieldBase = ({
  title,
  value,
  titleStyle,
  placeHolder,
  containerStyle,
  onChangeText,
  theme,
}: IAppTextFieldProps) => {
  return (
    <View style={[styles(theme).root, containerStyle]}>
      <Text style={[styles(theme).title, titleStyle]}>{title}</Text>
      <TextInput
        value={value}
        style={[styles(theme).input, titleStyle]}
        placeholder={placeHolder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export const AppTextField = withTheme(AppTextFieldBase);

const styles = (theme: AppThemeModel) =>
  StyleSheet.create({
    root: {
      marginTop: 16,
    },
    title: {
      fontFamily: theme.fontThin,
      fontSize: 14,
    },
    input: {
      fontFamily: theme.fontThin,
      fontSize: 20,
      borderRadius: 5,
      borderWidth: 1,
      marginTop: 8,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderColor: '#c1c1c1',
    },
  });

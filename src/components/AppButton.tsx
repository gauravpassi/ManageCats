import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import {withTheme} from '../utitles/theme/theme-provider/withTheme';
import {AppThemeModel} from '../utitles/models';

export interface IAppButtonProps {
  onPress: () => void;
  text: string;
  containerStyle?: any;
  textStyle?: any;
  theme: AppThemeModel;
}

export const AppButtonBase = ({
  onPress,
  text,
  textStyle,
  containerStyle,
  theme,
}: IAppButtonProps) => {
  return (
    <TouchableHighlight
      style={[styles(theme).root, containerStyle]}
      onPress={onPress}
      underlayColor={theme.underlayColor}>
      <Text style={[styles(theme).text, textStyle]}>{text}</Text>
    </TouchableHighlight>
  );
};

export const AppButton = withTheme(AppButtonBase);

const styles = (theme: AppThemeModel) =>
  StyleSheet.create({
    root: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 50,
      backgroundColor: '#c00b2c',
      borderRadius: 5,
    },
    text: {
      fontFamily: theme.fontThin,
      fontSize: 20,
      color: '#ffffff',
    },
  });

import {ThemeType} from '../constants/common';
import {AppThemeModel} from '../models';

const dark: AppThemeModel = {
  backgroundMainColor: '#375e8d',
  textMainColor: '#FFFFFF',
  textSecondaryColor: '#dadcdf',
  accentMainColor: '#4ccc9a',
  accentTextColor: '#FFF',
  underlayColor: '#2c4a6f',
  fontMain: 'Helvetica',
  fontThin: 'Helvetica-Light',
  type: ThemeType.DARK,
  barStyle: 'light-content',
};

const light: AppThemeModel = {
  backgroundMainColor: '#FFFFFF',
  textMainColor: '#000000',
  textSecondaryColor: '#878787',
  accentMainColor: '#498BE7',
  accentTextColor: '#FFF',
  underlayColor: '#DDD',
  fontMain: 'Helvetica',
  fontThin: 'Helvetica-Light',
  type: ThemeType.LIGHT,
  barStyle: 'dark-content',
};

const getTheme = (theme: ThemeType) => {
  return theme === ThemeType.DARK ? dark : light;
};

export {dark, light, getTheme};

import {StatusBarStyle} from 'react-native';
import {ThemeType} from '../constants/common';
import {Cat} from '../../model/Cat';

export interface AppThemeModel {
  accentMainColor: string;
  accentTextColor: string;
  backgroundMainColor: string;
  textMainColor: string;
  textSecondaryColor: string;
  fontMain: string;
  fontThin: string;
  underlayColor: string;
  type: ThemeType;
  barStyle: StatusBarStyle;
}

export interface AppMainState {
  theme: ThemeType;
  myCats: Cat[];
}

export interface AppAction {
  type: string;
  payload?: any;
  index?: number;
}

import React from 'react';
import {light} from '../thememode';
import {AppThemeModel} from '../../models';

export interface Contexts {
  theme: AppThemeModel;
  setTheme: (theme: AppThemeModel) => void;
}

const ThemeContext = React.createContext<Contexts>({
  theme: light,
  setTheme: () => {},
});

export default ThemeContext;

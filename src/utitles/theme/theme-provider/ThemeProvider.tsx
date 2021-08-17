import React from 'react';
import {ThemeType} from '../../constants/common';
import ThemeContext from './ThemeContext';
import {dark, light} from '../thememode';

interface ThemeProviderProps {
  theme: ThemeType;
}

export default class ThemeProvider extends React.Component<
  ThemeProviderProps,
  {}
> {
  render() {
    const {theme, children} = this.props;
    return (
      <ThemeContext.Provider
        value={{
          theme: theme === ThemeType.LIGHT ? light : dark,
          setTheme: () => {},
        }}>
        {children}
      </ThemeContext.Provider>
    );
  }
}

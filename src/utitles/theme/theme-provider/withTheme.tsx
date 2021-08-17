import React from 'react';
import ThemeContext from './ThemeContext';

export const withTheme = (Component: any) => {
  return (props: any) => {
    return (
      <ThemeContext.Consumer>
        {contexts => <Component {...props} {...contexts} />}
      </ThemeContext.Consumer>
    );
  };
};

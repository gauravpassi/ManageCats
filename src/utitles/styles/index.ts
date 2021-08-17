import {AppThemeModel} from '../models';

export const textStyleHeader = (theme: AppThemeModel) => ({
  fontFamily: theme.fontMain,
  color: theme.textMainColor,
  fontSize: 26,
});

export const textStyleBase = (theme: AppThemeModel) => ({
  fontFamily: theme.fontMain,
  color: theme.textMainColor,
  fontSize: 18,
});

export const textStyleThin = (theme: AppThemeModel) => ({
  fontFamily: theme.fontThin,
  color: theme.textMainColor,
  fontSize: 18,
});

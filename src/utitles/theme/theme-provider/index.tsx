import {connect} from 'react-redux';
import {ThemeType} from '../../constants/common';
import {AppMainState} from '../../models';
import ThemeProvider from './ThemeProvider';

interface StateProps {
  theme: ThemeType;
}

const mapStateToProps = (state: AppMainState): StateProps => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = (_dispatch: any): any => ({});

export default connect<StateProps, {}, {}, AppMainState>(
  mapStateToProps,
  mapDispatchToProps,
)(ThemeProvider);

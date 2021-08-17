import React from 'react';
import {View, Image, Text} from 'react-native';
import {withTheme} from '../../utitles/theme/theme-provider/withTheme';
import {AppThemeModel} from '../../utitles/models';
import {Dimensions, StyleSheet} from 'react-native';
import {textStyleHeader} from '../../utitles/styles';

interface WelcomeProps {
  theme: AppThemeModel;
  navigation: any;
}

interface WelcomeState {
  currentScreen: string;
}

const Logo = require('../../assets/images/cats.png');
class Welcome extends React.Component<WelcomeProps, WelcomeState> {
  constructor(props: WelcomeProps) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Dashboard');
    }, 3000);
  }

  render() {
    let {theme} = this.props;
    return (
      <View style={styles(theme).root}>
        <Image source={Logo} style={styles(theme).img} />
        <Text style={styles(theme).title}>{'MY CATS'}</Text>
      </View>
    );
  }
}

const styles = (theme: AppThemeModel) => {
  const imgWidth = Dimensions.get('screen').width;
  const imgHeight = (imgWidth * 487) / 586;

  return StyleSheet.create({
    root: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
      maxWidth: imgWidth,
      maxHeight: imgHeight,
    },
    title: {
      ...textStyleHeader(theme),
      marginTop: 30,
      textAlign: 'center',
    },
  });
};

export default withTheme(Welcome);

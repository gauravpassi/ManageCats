import React from 'react';
import { View, Text, FlatList, SafeAreaView } from "react-native";
import {withTheme} from '../../../utitles/theme/theme-provider/withTheme';
import {AppThemeModel} from '../../../utitles/models';
import {Dimensions, StyleSheet} from 'react-native';
import {textStyleHeader} from '../../../utitles/styles';
import {Cat} from '../../../model/Cat';
import { AppButton } from "../../../components";

interface DashboardProps {
  theme: AppThemeModel;
  cats: Cat[];
}

interface DashboardState {
  currentScreen: string;
}

class Welcome extends React.Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props);
  }

  render() {
    let {theme, cats} = this.props;
    return (
      <SafeAreaView style={styles(theme).root}>
        <AppButton text={'Add Cat'} />
        <FlatList
          data={cats}
          renderItem={({item, index}) => (
            <View key={'_' + index}>
              <Text style={styles(theme).title}>
                {item.name}(
                <Text style={styles(theme).title}>{item.color}</Text>)
              </Text>
              <Text style={styles(theme).title}>{item.breed}</Text>
            </View>
          )}
        />
      </SafeAreaView>
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
      textAlign: 'center',
    },
  });
};

export default withTheme(Welcome);

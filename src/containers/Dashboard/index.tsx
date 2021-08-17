import {connect} from 'react-redux';
import {AppMainState} from '../../utitles/models';
import {addCat, updateCat, deleteCat} from '../../redux/actions';
import React from 'react';
import {View, Text, FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {withTheme} from '../../utitles/theme/theme-provider/withTheme';
import {AppThemeModel} from '../../utitles/models';
import {textStyleHeader, textStyleThin} from '../../utitles/styles';
import {Cat} from '../../model/Cat';
import {AppButton} from '../../components';

interface StateProps {
  cats?: Cat[];
  refresh?: boolean;
}

interface DispatchProps {
  theme?: AppThemeModel;
  navigation?: any;
  cats?: Cat[];
  addCat: (cat: Cat) => void;
  deleteCat: (id: number) => void;
  updateCat: (cat: Cat, index: number) => void;
}

class Dashboard extends React.Component<DispatchProps, StateProps> {
  constructor(props: DispatchProps) {
    super(props);
  }

  render() {
    let {theme, cats, addCat, deleteCat, updateCat} = this.props;

    return (
      <SafeAreaView style={styles(theme!).root}>
        <AppButton
          containerStyle={{marginHorizontal: 20}}
          text={'Add Cat'}
          onPress={() =>
            this.props.navigation?.navigate('AddCat', {
              isEdit: false,
              cat: null,
              onSubmit: (cat: Cat) => {
                addCat(cat);
                this.setState({refresh: true});
              },
            })
          }
        />
        <FlatList
          style={{flex: 1, padding: 10}}
          data={cats}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View
              style={{
                backgroundColor: '#e7e7e7',
                padding: 10,
                borderRadius: 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 5,
              }}>
              <View>
                <Text style={styles(theme!).title}>
                  {item.name} (
                  <Text style={styles(theme!).subTitle}>{item.age}</Text>)
                </Text>
                <Text style={styles(theme!).subTitle}>{item.breed}</Text>
                <Text style={styles(theme!).subTitle}>{item.color}</Text>
              </View>
              <View style={{justifyContent: 'space-between'}}>
                <AppButton
                  text={'Edit'}
                  containerStyle={{
                    marginLeft: 5,
                    backgroundColor: 'gray',
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                  }}
                  onPress={() =>
                    this.props.navigation?.navigate('AddCat', {
                      isEdit: true,
                      cat: item,
                      onSubmit: (cat: Cat) => {
                        updateCat(cat, index);
                        this.setState({refresh: true});
                      },
                    })
                  }
                />
                <AppButton
                  text={'Delete'}
                  containerStyle={{
                    marginLeft: 5,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                  }}
                  onPress={async () => {
                    await deleteCat(index);
                    this.setState({refresh: true});
                  }}
                />
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = (theme: AppThemeModel) => {
  return StyleSheet.create({
    root: {
      flex: 1,
    },
    title: {
      ...textStyleHeader(theme),
    },
    subTitle: {
      ...textStyleThin(theme),
    },
  });
};

const mapStateToProps = (state: AppMainState): StateProps => {
  return {
    cats: state.myCats,
  };
};

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  addCat: (cat: Cat) => dispatch(addCat(cat)),
  deleteCat: (id: number) => dispatch(deleteCat(id)),
  updateCat: (cat: Cat, index: number) => dispatch(updateCat(cat, index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withTheme(Dashboard));

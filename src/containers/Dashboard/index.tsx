import {connect} from 'react-redux';
import {AppMainState} from '../../utitles/models';
import Dashboard from './screens/dashboard';
import {Cat} from '../../model/Cat';
import {addCat, updateCat, deleteCat} from '../../redux/actions';

interface StateProps {
  cats: Cat[];
}

interface DispatchProps {
  addCat: (cat: Cat) => void;
  deleteCat: (id: number) => void;
  updateCat: (cat: Cat) => void;
}

const mapStateToProps = (state: AppMainState): StateProps => {
  return {
    cats: state.myCats,
  };
};

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  addCat: (cat: Cat) => dispatch(addCat(cat)),
  deleteCat: (id: number) => dispatch(deleteCat(id)),
  updateCat: (cat: Cat) => dispatch(updateCat(cat)),
});

export default connect<StateProps, DispatchProps, {}, AppMainState>(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);

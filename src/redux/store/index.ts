import {applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import reducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['myCats'],
};

const rootReducer = combineReducers({
  reducer: persistReducer(persistConfig, reducer),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

export default {store, persistor};

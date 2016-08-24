import { createStore } from 'redux';
import RootReducer from '../reducers';
import MasterMiddleware from '../middleware';

const configureStore = () => createStore(RootReducer, MasterMiddleware);

export default configureStore;

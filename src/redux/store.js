import { createStore } from 'redux';
import data_Reducer from './reducers';

export const store = createStore(data_Reducer);


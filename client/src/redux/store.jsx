import { creatStore } from 'redux';
import Reducer from './reducer';
const store = creatStore(Reducer);
export default store;
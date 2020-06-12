import { createStore, applyMiddleware } from 'redux'
import Reducer from './Reducer.js'


const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
   }
   
   
  
const Store = createStore(Reducer, applyMiddleware(logger));

export default Store
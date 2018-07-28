import {applyMiddleware,createStore,compose} from 'redux'
import thunk from 'redux-thunk';
import {persistStore,persistCombineReducers} from 'redux-persist'
import reconciler from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/es/storage'
// import {logger,crashReporter} from '../middleware/loggerMiddleware'
import rootReducers from '../reducer'
// import sagas from '../sagas'


const middleware = [thunk];

const middleWares = [
    // logger,
    // crashReporter,
    middleware
]

const config = {
    key: 'root',
    storage,
    stateReconciler: reconciler, //合并模式
    debug: false
}

const reducers = persistCombineReducers(config,rootReducers)
const enhances = [applyMiddleware(...middleWares)]

export default configureStore = (initialState) => {
    const store = createStore(reducers,initialState,compose(...enhances))
    // persistStore(store)
    // sagaMiddleware.run(sagas)
    return store
}





import { createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const persistConfig={
  key:'root',
  storage,
  stateReconciler: hardSet,
}

 const persistedReducer=persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk)));
export const persistor= persistStore(store)
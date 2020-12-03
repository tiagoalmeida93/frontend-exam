import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const persistConfig = {
  key: "the-witcher-auth",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancer =
  process.env.NODE_ENV === "development"
    ? compose(
        console.tron.createEnhancer(),
        composeWithDevTools(applyMiddleware(sagaMiddleware))
      )
    : applyMiddleware(sagaMiddleware);

const store = createStore(persistedReducer, enhancer);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };

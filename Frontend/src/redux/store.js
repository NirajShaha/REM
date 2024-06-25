import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './User/userSlice';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import 

const rootReducer = combineReducers({user: userReducer})

const persistConfig = {
    key: "root",
    storage,
    version: 1
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})

export const persistor = persistStore(store);
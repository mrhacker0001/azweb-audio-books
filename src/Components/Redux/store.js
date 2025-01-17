import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import navbarReducer from './navbarSlice';
import lang from "./lang";


const persistConfig = {
    key: 'navbar',
    storage,
};

const persistedReducer = persistReducer(persistConfig, navbarReducer);

const store = configureStore({
    reducer: {
        navbar: persistedReducer, // Faqat navbar uchun reducer
        lang
    },
});

export const persistor = persistStore(store);

export default store;

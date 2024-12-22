import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Brauzer localStorage ishlatadi
import navbarReducer from './navbarSlice';

// Persist konfiguratsiyasi faqat navbar uchun
const persistConfig = {
    key: 'navbar',
    storage,
};

const persistedReducer = persistReducer(persistConfig, navbarReducer);

const store = configureStore({
    reducer: {
        navbar: persistedReducer, // Faqat navbar uchun reducer
    },
});

export const persistor = persistStore(store);

export default store;

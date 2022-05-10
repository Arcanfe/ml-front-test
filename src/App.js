import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView } from './containers/HomeView/HomeView';
import { ItemResultView } from './containers/ItemResultView/ItemResultView';
import { SearchResultView } from './containers/SearchResultView/SearchResultView';
import './App.scss';

/**
 * Funcion principal de la aplicación
 * @returns Rutas de la aplicación
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/items/search=:item" element={<SearchResultView />} />
        <Route path="/items/:id" element={<ItemResultView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

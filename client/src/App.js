// import './App.css';
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Gio from "./pages/gio/Gio";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { filmColumns, ticketColumns } from "./datatablesource";
import New from "./pages/new/New";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <Home />
            }
          />
          <Route path="film">
            <Route
              index
              element={
                <List columns={filmColumns} />
              }
            />
            <Route
              path=":filmId"
              element={
                <Single />
              }
            />
            <Route
              path="new"
              element={
                <New />
              }
            />
          </Route>
          <Route path="ticket">
            <Route
              index
              element={
                <List columns={ticketColumns} />
              }
            />
            <Route
              path="gio"
              element={
                <Gio />
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

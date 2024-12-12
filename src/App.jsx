
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Layout from "./components/Navbar/Layout.jsx";
import MainPage from "./components/Mainpage/MainPage.jsx";



function App() {
  return (
    <ErrorBoundary>
      <div>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<MainPage />} />
          </Route>
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;

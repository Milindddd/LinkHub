<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ThemeSwitcher from './components/ThemeSwitcher';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import CreatePage from './pages/CreatePage';
import PublicProfile from './pages/PublicProfile';

const AboutPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
    <h2 className="text-2xl font-semibold mb-2">About KonnectUs</h2>
    <p className="text-gray-600 dark:text-gray-300">A modern linktree alternative for creators and professionals.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/u/:username" element={<PublicProfile />} />
      </Routes>
    </Router>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> fa2e839cca21269ec855ff0502e6f61114309e80
  );
}

export default App;

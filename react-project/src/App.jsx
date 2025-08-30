import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Master from './pages/master/Master';
import Player from './pages/player/Player';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import styled from 'styled-components';
import CssGlobal from './components/CSSGlobal';

const App = () => {
  return (

    <Router>

      <CssGlobal />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/master" element={<Master />} />
        <Route path="/player" element={<Player />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </Router>

  );
};

export default App;
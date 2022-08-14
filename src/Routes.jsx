import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import pages
import PostImage from './pages/PostImage';

// Import configs
import { RouteLinks } from './config/routes';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PostImage />} />
        <Route path={RouteLinks.PostImage} element={<PostImage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

import { Route } from 'react-router-dom';

import AlbumPage from "./pages/AlbumPage";
import Layout from "./components/Layout/Layout";
import ContentGrid from "./components/Grid/ContentGrid";

function App() {
  return (
    <Layout>
      <Route path="/" exact>
        <ContentGrid />
      </Route>
      <Route path="/albums/:iD">
        <AlbumPage />
      </Route>
    </Layout>
  );
};

export default App;

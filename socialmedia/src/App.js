import ContentGrid from "./components/Grid/ContentGrid";
import Layout from "./components/Layout/Layout";
import AlbumPage from "./pages/AlbumPage";
import { Route } from 'react-router-dom';

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
}

export default App;

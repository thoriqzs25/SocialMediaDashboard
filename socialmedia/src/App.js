import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AlbumPage from "./pages/AlbumPage";
import Layout from "./components/Layout/Layout";
import ContentGrid from "./components/Grid/ContentGrid";
import { userActions } from './components/store/user-slice';

function App() {
  var isLogin = localStorage.getItem("isLogin");

  const dispatch = useDispatch();

  if(isLogin) {
    var userData = localStorage.getItem("userData");

    dispatch(userActions.changeUser(userData));
  };

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

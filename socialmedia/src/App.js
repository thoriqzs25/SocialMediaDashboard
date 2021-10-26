import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userActions } from './components/store/user-slice';
import { authActions } from './components/store/auth-slice';

import AlbumPage from "./pages/AlbumPage";
import Layout from "./components/Layout/Layout";
import ContentGrid from "./components/Grid/ContentGrid";

function App() {
  var isLogin = localStorage.getItem("isLogin");
  var subPage = localStorage.getItem("subPage");
  var userData = JSON.parse(localStorage.getItem("userData"));

  const dispatch = useDispatch();

  if(isLogin) {
    dispatch(userActions.changeUser(userData));
  };
  
  if(subPage) {
    dispatch(authActions.toggleSubPage());
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

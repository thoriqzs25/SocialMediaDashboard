import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AlbumPage from "./pages/AlbumPage";
import Layout from "./components/Layout/Layout";
import ContentGrid from "./components/Grid/ContentGrid";
import { userActions } from './components/store/user-slice';

function App() {
<<<<<<< HEAD
  localStorage.setItem("isLogin", false)
=======
  var isLogin = localStorage.getItem("isLogin");
  var userData = JSON.parse(localStorage.getItem("userData"));
  
  const dispatch = useDispatch();

  if (isLogin) {
    console.log("masuk")
    dispatch(userActions.changeUser(userData));
  };

>>>>>>> loading
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

import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet, } from '@ionic/react';
import React, { useState } from 'react';
import { IonReactRouter } from '@ionic/react-router';
import AppTabs from './AppTabs';
import LoginPage from './pages/LoginPage';
import { AuthContext } from './auth';
import NotFoundPage from './pages/NotFoundPage';


const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(`loggedIn= ${loggedIn}`);

  return (
    <IonApp>
      <AuthContext.Provider value={{ loggedIn }}>
        <IonReactRouter>
          <Switch>
            <Route exact path="/login"  >
              <LoginPage onLogin={() => setLoggedIn(true)}/>
            </Route>
            <Route path="/my">
              <AppTabs />
            </Route>
            <Redirect exact path="/" to="/my/entries" />
            <Route>
              <NotFoundPage/>
            </Route>
          </Switch>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  )
};
export default App;
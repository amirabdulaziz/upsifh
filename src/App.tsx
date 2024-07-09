import { Redirect, Route, Switch } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Profile from "./pages/profile";
import Homepage from "./pages/Homepage/homepage";
import Feedback from "./pages/Feedback/Feedback";
import Bmi from "./pages/BMI/Bmi";
import AdminLogin from "./pages/Admin/AdminLogin";
import AddUser from "./pages/Homepage/AddUser";
import BarbellList from "./pages/Homepage/BarbellList";
import DumbellList from "./pages/Homepage/DumbellList";
import Musclegroup from "./pages/Homepage/muscle-group";
import BarDumbSelection from "./pages/Homepage/bardumbselection";
import Dashboard from "./pages/Admin/Dashboard";
import ExerciseDetail from "./pages/Homepage/ExerciseDetail"; // Adjust the import path based on your project structure

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/tailwind.css";
import { AuthProvider } from "./Auth/admin-auth";
// import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <AuthProvider>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/adduser">
            <AddUser />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/homepage">
            <Homepage />
          </Route>
          <Route exact path="/musclegroup/:group/:equipment">
            <Musclegroup />
          </Route>
          <Route exact path="/bardumbselection/:group">
            <BarDumbSelection />
          </Route>
          <Route exact path="/barbelllist">
            <BarbellList />
          </Route>
          <Route exact path="/dumbellList">
            <DumbellList />
          </Route>
          <Route exact path="/feedback">
            <Feedback />
          </Route>
          <Route exact path="/bmi">
            <Bmi />
          </Route>
          <Route exact path="/adminlogin">
            <AdminLogin />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route
            exact
            path="/exercise/:name"
            render={(props) => <ExerciseDetail {...props} />}
          />
        </IonRouterOutlet>
      </IonReactRouter>
    </AuthProvider>
  </IonApp>
);

export default App;

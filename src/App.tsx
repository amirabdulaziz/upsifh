import { Redirect, Route } from "react-router-dom";
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

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/tailwind.css";
// import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
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
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

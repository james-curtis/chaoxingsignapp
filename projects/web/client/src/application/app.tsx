"use client";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactHashRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";

import Index from "./pages";

setupIonicReact({});

const AppShell = () => {
  return (
    <IonApp>
      <IonReactHashRouter>
        <IonRouterOutlet id="main">
          <Route path="/" render={() => <Index />} />
        </IonRouterOutlet>
      </IonReactHashRouter>
    </IonApp>
  );
};

export default AppShell;

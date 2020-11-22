import React from "react";
import { FC, memo } from "react";
import { MDBContainer, MDBBox, MDBCol } from "mdbreact";
import { Route, Switch } from "react-router-dom";
import LicensePlateProfile from "../license-plate-profile";

const _ApplicationRouter: FC = (props) => {
  return (
    <MDBContainer fluid>
      <MDBBox display="flex" justifyContent="center">
        <MDBCol xs="12" sm="10" md="8" lg="6">
          <Switch>
            <Route path="/:plate">
              <LicensePlateProfile />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </MDBCol>
      </MDBBox>
    </MDBContainer>
  );
};

const Home = () => {
  return <h2>home</h2>;
};

export const ApplicationRouter = memo(_ApplicationRouter);

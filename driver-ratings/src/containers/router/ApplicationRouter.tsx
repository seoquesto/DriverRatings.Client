import React from "react";
import { FC, memo } from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import { Route, Switch } from "react-router-dom";
import LicensePlateProfile from "../license-plate-profile";
import Posts from "../posts";

const _ApplicationRouter: FC = (props) => {
  return (
    <MDBContainer>
      <MDBRow center>
        <MDBCol md="10">
          <Switch>
            <Route path="/:plate">
              <LicensePlateProfile />
            </Route>
            <Route path="/">
              <Posts />
            </Route>
          </Switch>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export const ApplicationRouter = memo(_ApplicationRouter);

import React from "react"
import { Route, Switch } from "react-router"
import Official from "./OfficialPage"
import ThirdParty from "./ThirdPartyPage"
import Gokin from "./GokinPage"
import Home from "./Home"
import {
  THIRD_PARTY_URL,
  OFFICIAL_URL,
  GOKIN_URL,
  HOME_URL,
} from "./URL"

const Routes = () => {
  return (
    <Switch>
      <Route exact path={HOME_URL} component={Home} /> 
      <Route exact path={THIRD_PARTY_URL} component={ThirdParty} />
      <Route exact path={OFFICIAL_URL} component={Official} />
      <Route exact path={GOKIN_URL} component={Gokin} />
    </Switch>
  )
}

export default Routes
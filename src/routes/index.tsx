import React, { FC } from 'react'
import { Route, Switch } from 'react-router'
import { HomePage } from '../pages/home'
import { LoginPage } from '../pages/login'

interface Props {
  
}

export const AppRoutes: FC = (props: Props) => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  )
}

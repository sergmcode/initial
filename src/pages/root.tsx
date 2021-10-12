import React from "react";
import { AppFooter } from "../components/AppFooter/AppFooter";
import AppHeader from "../components/AppHeader/AppHeader";

interface Props {}

export const RootPage = (props: any) => {
  return <div>
    <AppHeader />
    {/* sidebar */}
    {props.children}

    <AppFooter />
  </div>;
};

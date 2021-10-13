import React, { FC } from "react";
import HomeContent from "../components/HomeContent/HomeContent";
import { RootPage } from "./root";

interface Props {}

export const HomePage: FC = (props: Props) => {
  return <RootPage>
    <HomeContent />
  </RootPage>;
};

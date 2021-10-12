import React, { FC, useEffect, useState } from "react";
import { Redirect } from "react-router";

interface Props {}

export const auth: FC = (props: any) => {
  const [needLoginPage, setNeedLoginPage] = useState(false);
  useEffect(() => {
    if (window.localStorage.getItem("authToken")) {
      setNeedLoginPage(true);
    } else {
      setNeedLoginPage(false);
    }
  }, []);
  return (
    <div>
      {needLoginPage && <Redirect to="/login" />}
      {!needLoginPage && <div>{props.children}</div>}
    </div>
  );
};

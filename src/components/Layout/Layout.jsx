import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

import css from "./Layout.module.css";
import Loading from "../Loading/Loading";

export default function Layout() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loading />}>
        <main className={css.main}>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
}


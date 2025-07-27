import { Outlet } from "react-router-dom";
import  style  from "./Root.module.css";
import MainNavigator from "../components/MainNavigator";

export default function RootLayout() {
  return (
    <>
      <MainNavigator />
      <main className={style.content}>
        <Outlet />
      </main>
    </>
  );
}

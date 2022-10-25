import React, {useContext} from "react";
import AuthContext from "../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = (props) => {

  //TODO: Context Hook
  const ctx = useContext(AuthContext);
  return (
    // TODO: Context consumer to listen to changes in the context
    // <AuthContext.Consumer>
    //   {(ctx) => {
    //     return (
    //       <nav className={classes.nav}>
    //         <ul>
    //           {ctx.isLoggedIn && (
    //             <li>
    //               <a href="/">Users</a>
    //             </li>
    //           )}
    //           {ctx.isLoggedIn && (
    //             <li>
    //               <a href="/">Admin</a>
    //             </li>
    //           )}
    //           {ctx.isLoggedIn && (
    //             <li>
    //               <button onClick={props.onLogout}>Logout</button>
    //             </li>
    //           )}
    //         </ul>
    //       </nav>
    //     );
    //   }}
    // </AuthContext.Consumer>

    // TODO: Context consumer to listen to changes in the context using react context hook
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
            {/* TODO: Using method in context */}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

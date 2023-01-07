import React from "react";

import MainHeader from "./MainHeader/MainHeader";
import Card from "./UI/Card/Card";

function App() {
  return (
    <React.Fragment>
      <MainHeader title="Food Menu"></MainHeader>
      <body>
        <Card>
          <h2>Let's get started!</h2>
        </Card>
      </body>
    </React.Fragment>
  );
}

export default App;

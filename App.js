import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeading = (
  <h1 className="heading" tabIndex="5">
    Namaste React!
  </h1>
);

// React Component

const HeadingComponent = () => {
  return (
    <h1 className="heading" tabIndex="5">
      Namaste React from functional component 1
    </h1>
  );
};


//  COMPONENT Composition
const HeadingComponent2 = () => (
  <div className="container">
    <HeadingComponent />
    <h1 className="heading" tabIndex="5">
      Namaste React from functional component 2
    </h1>
  </div>
);






const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);

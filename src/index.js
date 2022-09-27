import App from "./App";
import InvoiceProvider from "./context/InvoiceProvider";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

<React.StrictMode>
<Router>
    <InvoiceProvider>
        <App />
    </InvoiceProvider>
    </Router>

  </React.StrictMode>
);

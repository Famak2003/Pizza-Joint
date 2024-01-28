import { Route, Routes, useLocation } from "react-router-dom";
import * as Component from "./components/index";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };
  return (
    <>
      <Component.Header />
      <Component.Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence mode="wait" onExitComplete={() => setShowModal(false)}>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Component.Home />} />
          <Route
            path="/base"
            element={<Component.Base addBase={addBase} pizza={pizza} />}
          />
          <Route
            path="/toppings"
            element={
              <Component.Toppings addTopping={addTopping} pizza={pizza} />
            }
          />
          <Route
            path="/order"
            element={
              <Component.Order pizza={pizza} setShowModal={setShowModal} />
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

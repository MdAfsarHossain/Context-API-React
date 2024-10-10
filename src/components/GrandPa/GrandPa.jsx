import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./GrandPa.css";

export const AssetContext = createContext("Gold");
export const MoneyContext = createContext(1000);

const GrandPa = () => {

  const [money, setMoney] = useState(1000);

   return (
    <div className="grandpa">
      <h1>Grandpa</h1>
      <p>Money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="Mobile">
          <section className="flex">
            <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default GrandPa;

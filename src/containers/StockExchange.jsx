import React from "react";

import jsonData from "../data/chatbot_stock_data.json";
import GeneralComponent from "../components/GeneralComponent";

const StockExchange = (props) => {
  
  const options = jsonData.map((item, index) => ({
    name: item.stockExchange,
    handler: (selectedValue) =>
      props.actionProvider.handleStockExchangeSelection(selectedValue),
    id: index + 1,
  }));

  const message = `Please select a Stock Exchange`;
  const handler = (selectedValue) => props.actionProvider.handleStockExchangeSelection(selectedValue);

  return (
    <GeneralComponent data={options} handler={handler} message={message} />
  );
};

export default StockExchange;

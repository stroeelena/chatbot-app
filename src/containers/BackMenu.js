import React from "react";

import GeneralComponent from "../components/GeneralComponent";
import jsonData from "../data/chatbot_stock_data.json";

const BackMenu = (props) => {
  const { actionProvider, selectedStockExchange, selectedTopStocks } = props;

  const topStocks = jsonData
    .filter((item) => item.stockExchange.includes(selectedStockExchange))
    .map((item) => item.topStocks);

  const finalSelection = topStocks[0].find(
    (item) => item.stockName === selectedTopStocks
  );

  const data = [{ name: "Main menu", id: 1 }, { name: "Go back", id: 2 }];
  const message = `Stock Price of ${selectedTopStocks} is ${finalSelection?.price}. Please select an option.`;
  const handler = (selectedValue) => actionProvider.handleGoBack(selectedValue);

  return <GeneralComponent data={data} handler={handler} message={message} />;
};

export default BackMenu;

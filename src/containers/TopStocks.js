import React from "react";

import jsonData from "../data/chatbot_stock_data.json";
import GeneralComponent from "../components/GeneralComponent";

const TopStocks = (props) => {
  const { actionProvider, selectedStockExchange } = props;

  const topStocks = jsonData
    .filter((item) => item.stockExchange.includes(selectedStockExchange))
    .map((item) => item.topStocks);

  const options = topStocks[0].map(item => ({ name: item.stockName }));
  const message = `Please select a stock.`;
  const handler = (selectedValue) =>actionProvider.handleTopStocksSelection(selectedValue);

  return (
    <GeneralComponent data={options} handler={handler} message={message} />
  );
};

export default TopStocks;

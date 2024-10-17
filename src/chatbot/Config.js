import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import chatbotIcon from "../assets/chatbot.png";

import StockExchange from "../containers/StockExchange";
import TopStocks from "../containers/TopStocks";
import LastOption from "../containers/BackMenu";
import BackMenu from "../containers/BackMenu";

const BotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div
        className="react-chatbot-kit-chat-bot-avatar-container"
        style={{ background: "none" }}
      >
        <img src={chatbotIcon} alt="Chatbot Avatar" className="chatbot-image" />
      </div>
    </div>
  );
};

const config = {
  botName: "LSEG chatbot",
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "rgb(196 218 241)",
    },
  },
  initialMessages: [
    createChatBotMessage("Hello! Wellcome to LSEG. I'm here to help you.", {
      withAvatar: true,
      delay: 500,
      widget: "stockExchange",
    }),
  ],
  state: {
    selectedStockExchange: "",
    selectedTopStocks: "",
  },
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  widgets: [
    {
      widgetName: "stockExchange",
      widgetFunc: (props) => <StockExchange {...props} />,
      mapStateToProps: ["selectedStockExchange"],
    },
    {
      widgetName: "topStocks",
      widgetFunc: (props) => <TopStocks {...props} />,
      mapStateToProps: ["selectedStockExchange", "selectedTopStocks"],
    },
    {
      widgetName: "lastOption",
      widgetFunc: (props) => <LastOption {...props} />,
      mapStateToProps: [
        "selectedStockExchange", "selectedTopStocks" ],
    },
    {
      widgetName: "backMenu",
      widgetFunc: (props) => <BackMenu {...props} />,
      mapStateToProps: [ "selectedStockExchange", "selectedTopStocks"],
    },
  ],
};

export default config;

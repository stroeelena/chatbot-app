class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello friend.");
    this.addMessageToState(message);
  };

  handleStockExchangeSelection = (selectedValue) => {
    this.setState((prevState) => ({
        ...prevState,
        selectedStockExchange: selectedValue,
      }));

    const message = this.createChatBotMessage(
      `Great! You selected: ${selectedValue}.`,
      { widget: "topStocks", withAvatar: true}
    );

    this.addMessageToState(message);
  };

  handleTopStocksSelection = (selectedValue) => {
    this.setState((prevState) => ({
        ...prevState,
        selectedTopStocks: selectedValue,
      }));

    const message = this.createChatBotMessage(
      `Great! You selected: ${selectedValue}. `,
      { widget: "lastOption", withAvatar: true }
    );

    this.addMessageToState(message);
  };

  handleGoBack = (selectedValue) => {
    let localWidget = "topStocks";

    if (selectedValue === "Main menu"){
        localWidget = "stockExchange";
        this.setState((prevState) => ({
            ...prevState,
            selectedTopStocks: "",
            selectedStockExchange: "",
          }))}
    else {
        this.setState((prevState) => ({
            ...prevState,
            selectedTopStocks: ""
          }))}

    const message = this.createChatBotMessage(`Done! `, {
      widget: localWidget,
      withAvatar: true,
    });

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;

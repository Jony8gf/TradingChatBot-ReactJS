class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

  handleSymbolStats = (symbol) => {
    const message = this.createChatBotMessage(
      "Here's the symbol stats.",
      {
        widget: "symbolStatistics",
        loading: true,
        terminateLoading: true,
        ...symbol
      }
    );

    this.addMessageToState(message);
  };


  handleIndexMarketStats = (region) => {
    const message = this.createChatBotMessage(
      "Here's the index market stats.",
      {
        widget: "indexMarketStatistics",
        loading: true,
        terminateLoading: true,
        ...region
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message]
    }));
  };


}

export default ActionProvider;
import { createChatBotMessage } from 'react-chatbot-kit';
import SymbolStatistics from "./widgets/SymbolStatistics";
import IndexMarketStatistics from "./widgets/IndexMarketStatistics";

const config = {
  lang: "no",
  botName: "TradingBot",
  initialMessages: [
    createChatBotMessage(
      `Hi, my name is Trading Bot (Owned by Jong Coding).`
      ),
    createChatBotMessage(
      `So that I can help you, you must write the name of the company or the name of the market index.
      For example: (1) Type "Apple" to receive information from the Apple company.
      (2) Type "Nasdaq" to receive information from the Nasdaq index.`
    ),
  ],
  state: {},
  widgets: [
    {
      widgetName: "symbolStatistics",
      widgetFunc: (props) => <SymbolStatistics {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "indexMarketStatistics",
      widgetFunc: (props) => <IndexMarketStatistics {...props} />,
      mapStateToProps: ["messages"]
    },
  ]
};

export default config;
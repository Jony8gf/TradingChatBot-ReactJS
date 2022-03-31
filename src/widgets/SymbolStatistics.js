import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { getDataSymbol } from "../data";

const SymbolStatistics = (props) => {

  const initialProps = {
    "finance": {
      "result": {
        "symbol": "AAPL",
        "instrumentInfo": {
          "technicalEvents": {
            "provider": "Trading Central",
            "shortTerm": "up",
            "midTerm": "down",
            "longTerm": "up"
          },
          "keyTechnicals": {
            "provider": "Trading Central",
            "support": 149.57,
            "resistance": 175.96,
            "stopLoss": 155.317855
          },
          "valuation": {
            "color": 0,
            "description": "Overvalued",
            "discount": "13%",
            "relativeValue": "Premium",
            "provider": "Trading Central"
          },
          "recommendation": {
            "targetPrice": 180,
            "provider": "Argus Research",
            "rating": "BUY"
          }
        },
        "reports": [
          {
            "id": "2660_Analyst Report_1646982996000",
            "title": "Analyst Report: Apple Inc",
            "provider": "Argus Research",
            "publishedOn": "2022-03-11T07:16:36Z",
            "summary": "Apple manufactures smartphones, tablets, P6Cs, software and peripherals for a worldwide customer base. Its products include Mac desktop and mobile PCs, iPhone, iPad, Apple Watch, and various consumer products, including AirPods, Beats headphones and Apple TV. Apple services include App Store, iTunes, iCloud, Apple TV+, Apple Arcade, Apple Music, Apple Pay, and more."
          },
          {
            "id": "32360_Market Summary_1646982096000",
            "title": "Market Digest: AAPL, MDB",
            "provider": "Argus Research",
            "publishedOn": "2022-03-11T07:01:36Z",
            "summary": "Stocks finished lower on Thursday amid continued concerns about the war in Ukraine and surging consumer prices. The Labor Department said that its consumer price index rose 7.9% year-over-year in February, up from 7.5% in January and the fastest increase in 40 years. On the employment front, first-time claims for state unemployment benefits rose by 11,000 to 227,000 for the week ended March 5 and topped the consensus forecast. The Dow fell 0.34%, the S&P 0.43%, and the Nasdaq 0.95%. Crude oil traded near $106 per barrel, while gold rose $12 to $2001 per ounce."
          },
          {
            "id": "2660_Analyst Report_1643376565000",
            "title": "Analyst Report: Apple Inc",
            "provider": "Argus Research",
            "publishedOn": "2022-01-28T13:29:25Z",
            "summary": "Apple manufactures smartphones, tablets, P6Cs, software and peripherals for a worldwide customer base. Its products include Mac desktop and mobile PCs, iPhone, iPad, Apple Watch, and various consumer products, including AirPods, Beats headphones and Apple TV. Apple services include App Store, iTunes, iCloud, Apple TV+, Apple Arcade, Apple Music, Apple Pay, and more."
          },
          {
            "id": "2660_Analyst Report_1582207026000",
            "title": "Analyst Report: Apple Inc",
            "provider": "Argus Research",
            "publishedOn": "2020-02-20T13:57:06Z",
            "summary": "Apple manufactures Smartphones, tablets, PCs, software and peripherals for a worldwide customer base. Its products include Mac desktop and mobile PCs, iPhone, iPad, Apple Watch, and various consumer products, including AirPods, Beats headphones and Apple TV. Apple services include App Store, iTunes, iCloud, Apple TV+, Apple Arcade, Apple Music, Apple Pay, and more."
          }
        ],
        "companySnapshot": {
          "sectorInfo": "Technology",
          "company": {
            "innovativeness": 0.9982,
            "hiring": 0.9512999999999999,
            "sustainability": 0.4508,
            "insiderSentiments": 0.26780000000000004,
            "earningsReports": 0.8468000000000001,
            "dividends": 0.1157
          },
          "sector": {
            "innovativeness": 0.5,
            "hiring": 0.5,
            "sustainability": 0.5,
            "insiderSentiments": 0.5,
            "earningsReports": 0.5,
            "dividends": 0.5
          }
        }
      },
      "error": null
    }
  }

  const [stats, setStats] = useState(initialProps);
  const [loading, setLoading] = useState(true);
  const [symbol, setSymbol] = useState(props);

  useEffect(() => {
    const getStats = async (symbol) => {
      const msg = symbol.messages.filter(m => m.type === 'bot');
      let lastMsg = msg[msg.length - 1];
      let numeroLengthAux = Object.keys(lastMsg).length - 7;
      let textoMSG = "";
      for(let x = 0; x < numeroLengthAux; x++){
        textoMSG = textoMSG + lastMsg[x];
      }
      const resultado = await getDataSymbol(textoMSG);
      setStats(resultado); 
      setLoading(false);
    };
    getStats(symbol);
  }, []);

  return (
    <div className="stats">

      {stats.finance.result.instrumentInfo ?
      <>
        <div className="column-left">
          <p> Symbol:</p>
          <p> Support :</p>
          <p> Resistance :</p>
          <p> StopLoss :</p>
          <p> Recommendation :</p>
          <p> Rec Short :</p>
          <p> Rec Mid:</p>
          <p> Rec Long:</p>
        </div>

        <div className="column-right">
          <ClipLoader color={"#fff"} loading={loading} />          
          <>
            <p>{stats.finance.result.symbol}</p>
            <p>{stats.finance.result.instrumentInfo.keyTechnicals.support}</p>
            <p>{stats.finance.result.instrumentInfo.keyTechnicals.resistance}</p>
            <p>{stats.finance.result.instrumentInfo.keyTechnicals.stopLoss}</p>
            {stats.finance.result.instrumentInfo.recommendation  !== undefined ? <p>{stats.finance.result.instrumentInfo.recommendation.rating}</p> : <p>-</p>}
            <p>{stats.finance.result.instrumentInfo.technicalEvents.shortTerm}</p>
            <p>{stats.finance.result.instrumentInfo.technicalEvents.midTerm}</p>
            <p>{stats.finance.result.instrumentInfo.technicalEvents.longTerm}</p>
          </>        
        </div> 
      </>

      : <p>This symbol is not available</p>}
      
    </div>
  );
};

export default SymbolStatistics;

import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { getDataIndexMarket } from "../data";

const IndexMarketStatistics = (props) => {

    const initialPropsStats = 
    {
      "marketSummaryResponse":
        {"result":
          [
            {
              "fullExchangeName": "SNP",
              "symbol":"^GSPC",
              "gmtOffSetMilliseconds":-14400000,
              "language":"es-ES","regularMarketTime":{"raw":1648575629,"fmt":"1:40PM EDT"},
              "regularMarketChangePercent":
              {
                "raw":0.5970868,
                "fmt":"0,60%"
              },
              "quoteType":"INDEX",
              "typeDisp":"Índice",
              "tradeable":false,
              "regularMarketPreviousClose":{
                "raw":4575.52,
                "fmt":"4.575,52"
              },
              "exchangeTimezoneName":"America/New_York",
              "regularMarketChange":
              {
                "raw":27.319824,
                "fmt":"27,32"
              },
              "firstTradeDateMilliseconds":-1325583000000,
              "exchangeDataDelayedBy":0,
              "exchangeTimezoneShortName":"EDT",
              "marketState":"REGULAR",
              "regularMarketPrice":
              {
                "raw":4602.84,
                "fmt":"4.602,84"
              },"customPriceAlertConfidence":"LOW",
              "market":"us_market",
              "quoteSourceName":"Free Realtime Quote",
              "priceHint":2,
              "exchange":"SNP",
              "sourceInterval":15,
              "region":"ES",
              "shortName":"S&P 500",
              "triggerable":false
            }
          ],
          "error":null
        }
    }

    const initialPropsStatsComplete = {"fullExchangeName":"MCE","symbol":"^IBEX","gmtOffSetMilliseconds":7200000,"language":"es-ES","regularMarketTime":{"raw":1648644055,"fmt":"2:40PM CEST"},"regularMarketChangePercent":{"raw":-0.95535266,"fmt":"-0,96%"},"quoteType":"INDEX","typeDisp":"Índice","tradeable":false,"regularMarketPreviousClose":{"raw":8614.6,"fmt":"8.614,60"},"exchangeTimezoneName":"Europe/Madrid","regularMarketChange":{"raw":-82.299805,"fmt":"-82,30"},"exchangeDataDelayedBy":15,"firstTradeDateMilliseconds":742460400000,"exchangeTimezoneShortName":"CEST","customPriceAlertConfidence":"LOW","regularMarketPrice":{"raw":8532.3,"fmt":"8.532,30"},"marketState":"REGULAR","market":"es_market","quoteSourceName":"Delayed Quote","priceHint":2,"exchange":"MCE","sourceInterval":15,"region":"ES","shortName":"IBEX 35","triggerable":false};
  
    const [stats, setStats] = useState(initialPropsStats);
    const [statsComplete, setStatsComplete] = useState(initialPropsStatsComplete);
    const [loading, setLoading] = useState(true);
    const [indexMarkets, setIndexMarkets] = useState(props);
    const [mensaje, setMensaje] = useState('');
  
    useEffect(() => {
      const getStats = async (symbol) => {
        const msg = symbol.messages.filter(m => m.type === 'bot');
        let lastMsg = msg[msg.length - 1];
        let numeroLengthAux = Object.keys(lastMsg).length - 7;
        let textoMSG = "";
        for(let x = 0; x < numeroLengthAux; x++){
          textoMSG = textoMSG + lastMsg[x];
        }
        setMensaje(textoMSG);
        const resultado = await getDataIndexMarket();
        setStats(resultado); 
        setLoading(false);
      };
      getStats(indexMarkets);
    }, []);


    useEffect(() => {
      const indicadorIndexMarket  = async (stats, mensaje) => {
        let json_data = stats.marketSummaryResponse.result;
        let result = [];

        for(let e in json_data)
            result.push([e, json_data [e]]);
        
        let resultCheck;

        //Encontrar Index
        for(let i = 0; i < result.length ; i++){
          if(JSON.stringify(result[i]).includes(mensaje)){
            resultCheck = result[i];
          }
        }
        setStatsComplete(resultCheck[1]);           
        }; 
      indicadorIndexMarket(stats, mensaje);
    }, [stats]);
  
    return (
      <div className="stats">
        
        {statsComplete ?
        <>
          <div className="column-left">
            <p>Name:</p>
            <p>Zona:</p>
            <p>Market Price:</p>
            <p>Change Percent:</p>
            <p>Change Market:</p>
          </div>

          <div className="column-right">
            <ClipLoader color={"#fff"} loading={loading} />          
            <>
              <p>{statsComplete.shortName}</p>
              <p>{statsComplete.exchangeTimezoneName}</p>  
              <p>{statsComplete.regularMarketPrice.fmt}</p>
              <p>{statsComplete.regularMarketChangePercent.fmt}</p>
              <p>{statsComplete.regularMarketChange.fmt}</p>
            </>        
          </div> 
        </>

      : <p>This index market is not available</p>}
        
      </div>
    );
  };
  
  export default IndexMarketStatistics;
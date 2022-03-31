import { getDataIndexMarket } from "./data";

class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      message = message.toLowerCase();
      // console.log(message);
      if (message.includes('3m') || 
        message.includes('mmm')) {
        return this.actionProvider.handleSymbolStats("MMM")
      }

      if (message.includes('acenture') || 
        message.includes('acn') ||
        message.includes('accenture')) {
        return this.actionProvider.handleSymbolStats("ACN")
      }

      if (message.includes('acciona') || 
        message.includes('ana') ||
        message.includes('aciona')) {
        return this.actionProvider.handleSymbolStats("ANA")
      }

      if (message.includes('activision') || 
        message.includes('activision blizzard') || 
        message.includes('atvi') ||
        message.includes('call of duty')) {
        return this.actionProvider.handleSymbolStats("ATVI")
      }

      if (message.includes('adidas') || 
      message.includes('adsgn')) {
      return this.actionProvider.handleSymbolStats("ADSG")
      }

      if (message.includes('adobe') || 
        message.includes('adbe')) {
        return this.actionProvider.handleSymbolStats("ADBE")
      }

      if (message.includes('advanced micro devices') || 
        message.includes('amd')) {
        return this.actionProvider.handleSymbolStats("AMD")
      }

      if (message.includes('airbnb') || 
        message.includes('abnb')) {
        return this.actionProvider.handleSymbolStats("ABNB")
      }

      if (message.includes('amazon') || 
        message.includes('amazon prime') || 
        message.includes('amzn') || 
        message.includes('amazon.com') ||
        message.includes('twitch')) {
        return this.actionProvider.handleSymbolStats("AMZN")
      }  

      if (message.includes('american airlines')) {
        return this.actionProvider.handleSymbolStats("AAL")
      }

      if (message.includes('american international group') || 
      message.includes('IAG')) {
        return this.actionProvider.handleSymbolStats("IAG")
      }

      if (message.includes('apple') || 
        message.includes('aple') || 
        message.includes('aapl')) {
        return this.actionProvider.handleSymbolStats("AAPL")
      }

      if (message.includes('at&t') || 
        message.includes('atyt')) {
        return this.actionProvider.handleSymbolStats("T")
      }

      if (message.includes('astrazeneca') || 
        message.includes('azn')) {
        return this.actionProvider.handleSymbolStats("AZN")
      }

      if (message.includes('autodesk') || 
        message.includes('adsk')) {
        return this.actionProvider.handleSymbolStats("ADSK")
      }

      if (message.includes('banco sabadell') ||
        message.includes('sabadell') ||
        message.includes('sabe ')) {
        return this.actionProvider.handleSymbolStats("SABE")
      }

      if (message.includes('bank of america')) {
        return this.actionProvider.handleSymbolStats("BAC")
      }

      if (message.includes('bankinter') ||
        message.includes('bkt')) {
        return this.actionProvider.handleSymbolStats("BKT")
      }

      if (message.includes('bbva')|| 
        message.includes('banco bilbao vizcaya argentaria')) {
        return this.actionProvider.handleSymbolStats("BBVA")
      }

      if (message.includes('boeing')) {
        return this.actionProvider.handleSymbolStats("BA")
      }

      if (message.includes('booking') || 
        message.includes('bkng')) {
        return this.actionProvider.handleSymbolStats("BKNG")
      }

      if (message.includes('caixabank') || 
        message.includes('cabk')) {
        return this.actionProvider.handleSymbolStats("CABK")
      }

      if (message.includes('carnival')) {
        return this.actionProvider.handleSymbolStats("CCL")
      }

      if (message.includes('cisco') || 
        message.includes('csco')) {
        return this.actionProvider.handleSymbolStats("CSCO")
      }

      if (message.includes('citigroup')) {
        return this.actionProvider.handleSymbolStats("C")
      }

      if (message.includes('cloudflare') || 
        message.includes('nubeflare') || 
        message.includes('net')) {
        return this.actionProvider.handleSymbolStats("NET")
      }

      if (message.includes('coca cola') || 
        message.includes('ko')) {
        return this.actionProvider.handleSymbolStats("KO")
      }

      if (message.includes('disney') ||
        message.includes('walt disney') || 
        message.includes('dis')) {
        return this.actionProvider.handleSymbolStats("DIS")
      }

      if (message.includes('dow')) {
        return this.actionProvider.handleSymbolStats("DOW")
      }

      if (message.includes('electronic arts') || 
        message.includes('ea')) {
        return this.actionProvider.handleSymbolStats("EA")
      }

      if (message.includes('ebay')) {
        return this.actionProvider.handleSymbolStats("EBAY")
      }

      if (message.includes('endesa') || 
        message.includes('ele')) {
        return this.actionProvider.handleSymbolStats("ELE")
      }

      if (message.includes('exxon')|| 
        message.includes('exon')) {
        return this.actionProvider.handleSymbolStats("XOM")
      }
      
      if (message.includes('fb') ||
        message.includes('facebook') ||
        message.includes('meta') || 
        message.includes('metaverso') || 
        message.includes('instagram') ||
        message.includes('whatsapp')) {
        return this.actionProvider.handleSymbolStats("FB")
      }

      if (message.includes('ford')) {
        return this.actionProvider.handleSymbolStats("F")
      }

      if (message.includes('grifols') || 
        message.includes('grls')) {
        return this.actionProvider.handleSymbolStats("GRLS")
      }

      if (message.includes('google.com') || 
        message.includes('alphabet') || 
        message.includes('gogle') ||
        message.includes('android') ||
        message.includes('google')) {
        return this.actionProvider.handleSymbolStats("GOOGL")
      }

      if (message.includes('hp')) {
        return this.actionProvider.handleSymbolStats("HPQ")
      }

      if (message.includes('iberdrola')) {
        return this.actionProvider.handleSymbolStats("IBE")
      }

      if (message.includes('ibm') || 
        message.includes('ivm') || 
        message.includes('international business machines')) {
        return this.actionProvider.handleSymbolStats("IBM")
      }

      if (message.includes('inditex') || 
        message.includes('itx')) {
        return this.actionProvider.handleSymbolStats("ITX")
      }

      if (message.includes('intel') || 
        message.includes('intc')) {
        return this.actionProvider.handleSymbolStats("INTC")
      }

      if (message.includes('jp morgan') ||
        message.includes('jpmorgan') ||  
        message.includes('morgan') ||
        message.includes('jpm')) {
        return this.actionProvider.handleSymbolStats("JPM")
      }
 
      if (message.includes('mastercard')) {
        return this.actionProvider.handleSymbolStats("MA")
      }

      if (message.includes('mc donald s') ||
        message.includes('mcdonalds') ||  
        message.includes('mc') ||
        message.includes('mcd')) {
        return this.actionProvider.handleSymbolStats("MCD")
      }

      if (message.includes('mapfre') ||
        message.includes('map')) {
        return this.actionProvider.handleSymbolStats("MAP")
      }

      if (message.includes('micron')) {
        return this.actionProvider.handleSymbolStats("MU")
      }

      if (message.includes('microsoft') || 
        message.includes('windows') || 
        message.includes('msft') ||
        message.includes('microsoft.com')) {
        return this.actionProvider.handleSymbolStats("MSFT")
      }

      if (message.includes('moderna') || 
        message.includes('mrna')) {
        return this.actionProvider.handleSymbolStats("MRNA")
      }

      if (message.includes('monster') || 
        message.includes('mnst')) {
        return this.actionProvider.handleSymbolStats("MNST")
      }

      if (message.includes('naturgy') || 
        message.includes('ntgy')) {
        return this.actionProvider.handleSymbolStats("NTGY")
      }

      if (message.includes('netflis') || 
        message.includes('neflis') ||
        message.includes('netflix') || 
        message.includes('nflx')) {
        return this.actionProvider.handleSymbolStats("NFLX")
      }

      if (message.includes('nike') || 
        message.includes('nke')) {
        return this.actionProvider.handleSymbolStats("NKE")
      }

      if (message.includes('nio')) {
        return this.actionProvider.handleSymbolStats("NIO")
      }

      if (message.includes('nvidia') || 
        message.includes('nvda')) {
        return this.actionProvider.handleSymbolStats("NVDA")
      }

      if (message.includes('occidental')) {
        return this.actionProvider.handleSymbolStats("OXY")
      }

      if (message.includes('paypal') || 
        message.includes('pypl')) {
        return this.actionProvider.handleSymbolStats("PYPL")
      }

      if (message.includes('pepsi') || 
        message.includes('pepisico') ||
        message.includes('pep')) {
        return this.actionProvider.handleSymbolStats("PEP")
      } 

      if (message.includes('pfizer')) {
        return this.actionProvider.handleSymbolStats("PFE")
      }

      if (message.includes('puma')) {
        return this.actionProvider.handleSymbolStats("PUMG")
      }

      if (message.includes('qualcomm') || 
        message.includes('qualcom') ||
        message.includes('qcom')) {
        return this.actionProvider.handleSymbolStats("QCOM")
      }

      if (message.includes('repsol') || 
        message.includes('rep')) {
        return this.actionProvider.handleSymbolStats("REP")
      }

      if (message.includes('salesforce.com') || 
        message.includes('salesforce') || 
        message.includes('crm')) {
        return this.actionProvider.handleSymbolStats("CRM")
      } 

      if (message.includes('san')|| 
        message.includes('santander')) {
        return this.actionProvider.handleSymbolStats("SAN")
      }

      if (message.includes('spotify')|| 
        message.includes('spot')) {
        return this.actionProvider.handleSymbolStats("SPOT")
      }
      

      if (message.includes('starbucks') || 
        message.includes('sbux')) {
        return this.actionProvider.handleSymbolStats("SBUX")
      }

      if (message.includes('telefonica') || 
        message.includes('movistar') || 
        message.includes('tef')) {
        return this.actionProvider.handleSymbolStats("TEF")
      }

      if (message.includes('tesla') || 
        message.includes('tsln') || 
        message.includes('tsla')) {
        return this.actionProvider.handleSymbolStats("TSLA")
      }

      if (message.includes('twitter') || 
        message.includes('tweet') || 
        message.includes('twetter') ||
        message.includes('twtr') ||
        message.includes('twitter.com')) {
        return this.actionProvider.handleSymbolStats("TWTR")
      }

      if (message.includes('uber') || 
        message.includes('uver')) {
        return this.actionProvider.handleSymbolStats("UBER")
      }

      if (message.includes('verizon') || 
        message.includes('vz')) {
        return this.actionProvider.handleSymbolStats("VZ")
      }

      if (message.includes('visa')) {
        return this.actionProvider.handleSymbolStats("V")
      }

      if (message.includes('wallmart') || 
        message.includes('walmark') || 
        message.includes('walmart') ||
        message.includes('wmt')) {
        return this.actionProvider.handleSymbolStats("WMT")
      }

      if (message.includes('wells fargo')|| 
        message.includes('wells fargo & company')) {
        return this.actionProvider.handleSymbolStats("XOM")
      }

      if (message.includes('wwe')) {
        return this.actionProvider.handleSymbolStats("WWE")
      }

      if (message.includes('zalando')) {
        return this.actionProvider.handleSymbolStats("ZALG")
      }

      if (message.includes('zebra')) {
        return this.actionProvider.handleSymbolStats("ZBRA")
      }

      if (message.includes('zoom') || 
        message.includes('zm')) {
        return this.actionProvider.handleSymbolStats("ZM")
      }
      
      //Indices
      if (message.includes('madrid') || 
        message.includes('ibex35') || 
        message.includes('spain')) {
        return this.actionProvider.handleIndexMarketStats("IBEX 35")
      }

      if (message.includes('zurich') || 
        message.includes('stoxx 50') || 
        message.includes('euro')) {
        return this.actionProvider.handleIndexMarketStats("Euro Stoxx 50")
      }

      if (message.includes('ftse') || 
        message.includes('london') || 
        message.includes('ftse 100')) {
        return this.actionProvider.handleIndexMarketStats("FTSE 100")
      }

      if (message.includes('s%p') || 
        message.includes('syp 500') || 
        message.includes('s&p 500')) {
        return this.actionProvider.handleIndexMarketStats("S&P 500")
      }

      if (message.includes('osaka') || 
        message.includes('nikkei') || 
        message.includes('nikkei 225')) {
        return this.actionProvider.handleIndexMarketStats("NIKKEI 225")
      }

      if (message.includes('nasdaq')) {
        return this.actionProvider.handleIndexMarketStats("Nasdaq")
      }

      if (message.includes('dow jones"')) {
        return this.actionProvider.handleIndexMarketStats("Dow Jones")
      }

      if (message.includes('berlin') || 
        message.includes('germany') ||
        message.includes('dax')) {
        return this.actionProvider.handleIndexMarketStats("DAX")
      }

      //Extra BITCOIN
      // if (message.includes('bitcoin')||
      //   message.includes('btc')) {
      //   return this.actionProvider.handleIndexMarketStats("BTC")
      // }
      
    }
  }
  
  export default MessageParser;
  
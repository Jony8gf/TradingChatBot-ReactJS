export const getDataSymbol = async (symbol) => {

    const key = ""+process.env.REACT_APP_API_KEY_GMAIL2

    let url = 'https://yfapi.net/ws/insights/v1/finance/insights?symbol='+symbol;
    const response = await fetch(url, {
        method: 'GET',
        params: {modules: 'defaultKeyStatistics,assetProfile'},
        headers: {
          'x-api-key': 'dt7gPOriehMqWJFdBRTJ4uso3b8BDqv8LIIOB3ig'
        }
      })
  
      const json = await response.json()
      return json;
};

export const getDataIndexMarket = async () => {

  const key = ""+process.env.REACT_APP_API_KEY_GMAIL2

  let url = 'https://yfapi.net/v6/finance/quote/marketSummary?lang=es&region=ES';
  const response = await fetch(url, {
      method: 'GET',
      params: {modules: 'defaultKeyStatistics,assetProfile'},
      headers: {
        'x-api-key': 'dt7gPOriehMqWJFdBRTJ4uso3b8BDqv8LIIOB3ig'
      }
    });
    
    const json = await response.json();
    return json;
};
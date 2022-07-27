const url = "https://api.apilayer.com/exchangerates_data/latest?base=TRY";

const myHeaders = new Headers();
myHeaders.append("apikey", "WjIXefZ2GRLg9PrlSeagJLyYBunNoTFp");



const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

// -- Async function
async function getData() {
  try{
   const response = await fetch(url, requestOptions);
   const data = await response.json();
  
   const TRY = data.rates.TRY;
   const USD = TRY / data.rates.USD;
   const EUR = TRY / data.rates.EUR;
   const GBP = TRY / data.rates.GBP;

    setData(USD,EUR,GBP);
  } catch(error) {
    console.warn(error)
  };

}

// -- Callback function
function setData(USD,EUR,GBP){

    const dollar = document.getElementById('dollar');
    const euro = document.getElementById('euro');
    const sterlin = document.getElementById('sterlin');

    dollar.innerText = USD.toFixed(3);
    euro.innerText = EUR.toFixed(3);
    sterlin.innerText = GBP.toFixed(3);
}

getData();

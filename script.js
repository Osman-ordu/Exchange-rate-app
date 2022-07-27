const myHeaders = new Headers();
myHeaders.append("apikey", "WjIXefZ2GRLg9PrlSeagJLyYBunNoTFp");


const url = "https://api.apilayer.com/exchangerates_data/latest?base=TRY";

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};


function getData() {
   fetch(url, requestOptions)
  .then(response => response.json())
  .then(data => {
    const TRY = data.rates.TRY;
    const USD = TRY / data.rates.USD;
    const EUR = TRY / data.rates.EUR;
    const GBP = TRY / data.rates.GBP;

    setData(USD,EUR,GBP)

  })
  .catch(err => console.warn(err));

}

function setData(USD,EUR,GBP){

    const dollar = document.getElementById('dollar');
    const euro = document.getElementById('euro');
    const sterlin = document.getElementById('sterlin');

    dollar.innerText = USD.toFixed(3);
    euro.innerText = EUR.toFixed(3);
    sterlin.innerText = GBP.toFixed(3);
}

getData();
const counters = document.querySelectorAll('.counter')
const url = "https://api.apilayer.com/exchangerates_data/latest?base=TRY";

const myHeaders = new Headers();

myHeaders.append("apikey", "3YfOwVHN2ygGQ1JP8dxaK4aQJHdXPKEZ");


const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

// -- Async function 
async function getData() {
  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    const 
    TRY = data.rates.TRY,
    USD = TRY / data.rates.USD,
    EUR = TRY / data.rates.EUR,
    GBP = TRY / data.rates.GBP;


  setData(USD,EUR,GBP)
  } catch(err) {console.warn(err)}; 
}
getData();

// -- Callback function
function setData(USD,EUR,GBP){

    const 
     dollar = document.getElementById('dollar'),
     euro = document.getElementById('euro'),
     sterlin = document.getElementById('sterlin'); 

    const
     parsedUSD = USD.toFixed(3),
     parsedEUR = EUR.toFixed(3),
     parsedGBP = GBP.toFixed(3);

    dollar.innerText = parsedUSD;
    euro.innerText = parsedEUR;
    sterlin.innerText = parsedGBP;
        
    dollar.setAttribute(`data-target`,`${parsedUSD}`);
    euro.setAttribute(`data-target`,`${parsedEUR}`);
    sterlin.setAttribute(`data-target`,`${parsedGBP}`)

    counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText ;
        const increment = target / 50;
        if(c < target ) { 
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 10)
        } else {
            counter.innerText = target
        }
    }
  updateCounter();
})
}

// -- Js animation
window.sr = new ScrollReveal();

sr.reveal('.card',{
  opacity:0,
  scale:0.8,
  duration:2000
})

sr.reveal('h2',{
  opacity:0,
  scale:0.8,
  duration:2000
})

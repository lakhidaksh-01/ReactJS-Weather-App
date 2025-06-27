import { useState } from 'react'


function App() {
  const [city, setCity] = useState(' ')
  const [weather,setweather] = useState(null)

   const api_key = '2690b28d6b241854247d17c3662915e5';
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const search= async ()=>{
    if(city){
      try{
      const response=await fetch(url);
      const data=await response.json();
      console.log(data);
      if(data.cod==200){
        setweather(data)
      }
      }catch(err){
        console.error("there is some error:",err)
      }
      
    }else{
      console.log("pls add valid city name");
    }
  }

  return (
    <>
      <div className="container">
      <h1 className='title'>weather app</h1>
      <h5>Made by <a href='https://www.linkedin.com/in/daksh-lakhi/'>Daksh Lakhi</a></h5>
      <div className='input-section'><input type="text" value={city} onChange={(e)=>setCity(e.target.value)} onKeyDown={(e)=>e.key==='Enter' && search()}  placeholder='enter city name'/><button onClick={search} className='search-btn'>search</button></div>
      {weather&&(<>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="weather icon" className='weather-icon'/>
      <p className='temp'>City Name: {weather.name}</p>
      <p className='humidity'>Temperature : {weather.main.temp} °C</p>
      <p className='weather'>Weather: {weather.weather[0].description}</p></>)
      }
      </div>
      
    </>
  )
}

export default App
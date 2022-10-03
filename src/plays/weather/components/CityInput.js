export default function CityInput({
  cityInput,
  setCityInput,
  setWeatherDetails,
  setForecastData,
  setIsLoading,
}) {
  const handleCityInput = (e) => {
    setCityInput(e.target.value);
  };

  const fetchForecast = async (lat, long) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );
      const data = await res.json();
      setForecastData(data);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchWeather = async (e) => {
    e.preventDefault();

    try {
      // Show loading messae
      setIsLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );
      const json = await res.json();

      // Fetch forecast only for valid city name
      if (json.cod !== "404") {
        await fetchForecast(json.coord.lat, json.coord.lon);
      }

      setWeatherDetails(json);

      // Hide loading message

      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={fetchWeather}>
      <input
        value={cityInput}
        className="p-2 text-sm rounded-lg"
        onChange={handleCityInput}
        placeholder="Search your city here..."
      />
    </form>
  );
}

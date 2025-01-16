import { useEffect } from "react";
import "./App.css";

// 1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다
// 2. 날씨 정보에는 도시, 섭씨와 화씨, 날씨 상태가 보인다.
// 3. 5개의 버튼 (1개는 현재 위치, 4개는 다른 도시)
// 4. 도시 버튼을 클릭할 때마다 도시 별 날씨 정보가 보인다.
// 5. 현재 위치 버튼을 클릭하면 다시 현재 위치 기반의 날씨가 나온다.
// 6. 데이터를 가져오는 동안 로딩 스피너가 보인다.

function App() {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    let response = await fetch(url);
    let data = response.json();
    console.log(data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <>
      <div>하잉</div>
    </>
  );
}

export default App;

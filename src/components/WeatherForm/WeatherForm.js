function WeatherForm({ data }) {
    const weatherViewObject = data
    const location_name = weatherViewObject.location.city
    const temp_c = weatherViewObject.tempCelsius
    const temp_f = weatherViewObject.tempFahrenheit
    const is_day = weatherViewObject.isDay
    const condition_text = weatherViewObject.condition.name
    const condition_icon = weatherViewObject.condition.imageUrl
    const feelslike_c = weatherViewObject.tempCelsiusFeelLike
    const feelslike_f = weatherViewObject.tempFahrenheitFeelLike
    return (
        <div>
            <h6>Weather Form</h6>
            {/* <div>{JSON.stringify(data, null, 2)}</div> */}
            <div>{location_name}</div>
            <div>Actual temperature: {temp_c} Celsius</div>
            <div>Actual temperature: {temp_f} Fahrenheit</div>
            <div>Is Day: {is_day}</div>
            <div>{condition_text}</div>
            <img src = {condition_icon} alt={condition_text}></img>
            <div>Feels like: {feelslike_c} Celsius</div>
            <div>Feels like: {feelslike_f} Fahrenheit</div>
            {/* JSON.stringify(data, null, 2) as a way to figure out the structure of data  */}
        </div>
    )
}

export default WeatherForm
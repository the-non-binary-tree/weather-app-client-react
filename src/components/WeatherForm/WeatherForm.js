function WeatherForm({ data }) {
    const location_name = data.data.location.name
    const temp_c = data.data.current.temp_c
    const temp_f = data.data.current.temp_f
    const is_day = data.data.current.is_day
    const condition_text = data.data.current.condition.text
    const condition_icon = data.data.current.condition.icon
    const feelslike_c = data.data.current.feelslike_c
    const feelslike_f = data.data.current.feelslike_f
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
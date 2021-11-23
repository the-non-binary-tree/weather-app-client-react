import React, { useState } from 'react'
import './QueryForm.css'
import axios from 'axios'
import WeatherForm from '../WeatherForm/WeatherForm'

function QueryForm() {
  
  const [values, setValues] = useState({
    aqi: '',
    q: ''
  })

  const [weatherData, setWeatherData] = useState(null)

  const onChange = name => {
    return ({ target: { value } }) => {
      setValues(oldValues => ({ ...oldValues, [name]: value }))
    }
  }

  const onClick = name => {
    return ({ target: { checked } }) => {
      setValues(oldValues => ({ ...oldValues, [name]: checked }))
    }
  }

  const saveFormData = (req, res) => {
    axios.post('http://127.0.0.1:3001/', values )
    .then(res => {
      console.log(res.data)
      setWeatherData(res.data)
    })
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    await saveFormData() //pause the code, and wait for the saveFormData to return
    console.log(`Post request success: ${values}`)
    setValues({
      aqi: '',
      q: ''
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Get Air Quality Index:
          <input
            name="aqi"
            type="checkbox"
            checked={values.aqi}
            onChange={onClick('aqi')} />
        </label>
        <br />
        <label>
          Postal Code:
          <input
            name="q"
            type="text"
            placeholder='Location or Postal Code'
            value={values.q}
            onChange={onChange('q')} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>

      {weatherData && <WeatherForm data={weatherData}/> } 
      {weatherData === null && <span>Please wait ...</span>}
      {/* if data === null then render a loading spinner */}
    </div>
  )
}

export default QueryForm
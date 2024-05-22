import { useQuery } from 'react-query'

const fetchGlobalData = async () => {
  const res = await fetch('https://disease.sh/v3/covid-19/all')
  return res.json()
}

const fetchCountryData = async () => {
  const res = await fetch('https://disease.sh/v3/covid-19/countries')
  return res.json()
}

const fetchHistoricalData = async () => {
  const res = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
  return res.json()
}

export const useGlobalData = () => useQuery('globalData', fetchGlobalData)
export const useCountryData = () => useQuery('countryData', fetchCountryData)
export const useHistoricalData = () => useQuery('historicalData', fetchHistoricalData)

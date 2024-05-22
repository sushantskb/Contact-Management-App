import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useCountryData } from '../hooks/useCovidData'
import 'leaflet/dist/leaflet.css'

const CovidMap = () => {
  const { data, isLoading, error } = useCountryData()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error fetching data</div>

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">COVID-19 Map</h2>
      <MapContainer center={[20, 0]} zoom={2} style={{ height: '600px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.map(country => (
          <Marker key={country.countryInfo._id} position={[country.countryInfo.lat, country.countryInfo.long]}>
            <Popup>
              <div>
                <h3>{country.country}</h3>
                <p>Active: {country.active}</p>
                <p>Recovered: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default CovidMap

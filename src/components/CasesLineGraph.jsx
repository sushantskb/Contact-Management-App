import { Line } from 'react-chartjs-2'
import { useHistoricalData } from '../hooks/useCovidData'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const CasesLineGraph = () => {
  const { data, isLoading, error } = useHistoricalData()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error fetching data</div>

  const dates = Object.keys(data.cases)
  const cases = Object.values(data.cases)
  const deaths = Object.values(data.deaths)
  const recovered = Object.values(data.recovered)

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Cases',
        data: cases,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Deaths',
        data: deaths,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
      {
        label: 'Recovered',
        data: recovered,
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
      },
    ],
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">COVID-19 Cases Fluctuations</h2>
      <Line data={chartData} />
    </div>
  )
}

export default CasesLineGraph

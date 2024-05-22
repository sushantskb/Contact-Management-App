import CasesLineGraph from '../components/CasesLineGraph'
import CovidMap from '../components/CovidMap'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1 className="text-3xl font-bold mb-6">COVID-19 Dashboard</h1>
      <CasesLineGraph />
      <div className="mt-10">
        <CovidMap />
      </div>
    </div>
  )
}

export default Dashboard

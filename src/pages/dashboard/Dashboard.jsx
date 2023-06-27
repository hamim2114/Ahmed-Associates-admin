import './Dashboard.scss';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="wrapper">
        <div className="total"><span> Total Blog:</span> 6</div>
        <div className="total"><span>Total Job:</span>  5</div>
        <div className="total"><span>Total Team:</span>  6</div>
      </div>
    </div>
  )
}

export default Dashboard
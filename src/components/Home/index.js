import {Component} from 'react'

import './index.css'

class Home extends Component {
  componentDidMount() {
    this.getIplDashboardData()
  }

  getIplDashboardData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)

    const updatedData = data.map(eachObject => ({
      id: eachObject.id,
      name: eachObject.name,
      teamImageUrl: eachObject.team_image_url,
    }))

    console.log(updatedData)
  }

  render() {
    return (
      <div className="app-container">
        <div className="dashboard-heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
      </div>
    )
  }
}

export default Home

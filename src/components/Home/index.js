import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamData: [], isLoading: true}

  componentDidMount() {
    this.getIplDashboardData()
  }

  getIplDashboardData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamsData = await response.json()
    console.log(teamsData)
    const {teams} = teamsData
    // console.log(teams)
    const updatedTeamsData = teams.map(eachObject => ({
      id: eachObject.id,
      name: eachObject.name,
      teamImageUrl: eachObject.team_image_url,
    }))
    console.log(updatedTeamsData)
    this.setState({teamData: updatedTeamsData, isLoading: false})
  }

  render() {
    const {teamData, isLoading} = this.state

    return (
      <div className="app-container">
        <div className="dashboard-heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="image"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <div className="team-details-container">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            teamData.map(eachTeam => (
              <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default Home

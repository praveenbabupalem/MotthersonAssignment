import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'

import ProjectPage from '../ProjectPage'
import './index.css'

const initialSlidesList = [
  {
    id: 1,
    name: 'Nxt Trendz',
    image: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png',
    description: `Developed a cutting-edge e-commerce platform inspired by Amazon and Flipkart.
Built pages for Login, Products, and Product details with React Router, React components, form inputs,
and event handlers.
Enabled secure authentication and authorization with JWT tokens and REST API calls.
Technologies used: React JS, JS, CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token,
Authorization, Authentication`,
    link: 'https://nxttrendzpb.ccbp.tech/login',
  },

  {
    id: 2,
    name: 'Todos Application',
    image:
      'https://res.cloudinary.com/dtm7axq9b/image/upload/v1704444889/yce3cgbjc6x9vb4uimnv.webp',
    description: `A comprehensive todo management tool designed to enhance productivity.
User-friendly interface with HTML, CSS, and Bootstrap for ease of use.
Effortless task management through JavaScript-based CRUD operations with dynamic UI updates.
Your tasks are always safe with local storage methods to ensure task persistence.
Technologies used: HTML, CSS, JS, Bootstrap`,
    link: 'https://praveentodosap.ccbp.tech/',
  },
  {
    id: 3,
    name: 'Typing Speed Test',
    image:
      'https://res.cloudinary.com/dtm7axq9b/image/upload/v1704453041/vgrjvjr0ahniqsd1ejle.jpg',
    description: `A comprehensive typing speed assessment tool.
  Employs advanced JavaScript techniques to fetch and display the paragraph, and track the timer.
  Offers real-time results and form validation to ensure accuracy and completeness.
  Technologies used: HTML, CSS, JS, REST API Calls, Bootstrap`,
    link: 'https://praveentypingsp.ccbp.tech/',
  },
]

class FormPage extends Component {
  state = {
    listDetails: initialSlidesList,
    projectName: '',
    projectLink: '',
    projectDescription: '',
  }

  onSubmittingForm = event => {
    event.preventDefault()
    const {projectName, projectLink, projectDescription} = this.state

    const newForm = {
      id: uuidV4(),
      name: projectName,
      link: projectLink,
      description: projectDescription,
      image:
        'https://res.cloudinary.com/dtm7axq9b/image/upload/v1704454363/zu8bcwyu7umts6c5dori.png',
    }

    this.setState(prevState => ({
      listDetails: [...prevState.listDetails, newForm],
      projectName: '',
      projectLink: '',
      projectDescription: '',
    }))
  }

  onChangingName = event => this.setState({projectName: event.target.value})

  onChangingLink = event => this.setState({projectLink: event.target.value})

  onChangingDescription = event =>
    this.setState({projectDescription: event.target.value})

  render() {
    const {
      listDetails,
      projectName,
      projectLink,
      projectDescription,
    } = this.state
    return (
      <div id="project" className="formPageDetails">
        <h1>Add Project</h1>
        <form onSubmit={this.onSubmittingForm}>
          <label htmlFor="forProjectN">Project Name</label>
          <br />
          <input
            type="text"
            id="forProjectN"
            value={projectName}
            placeholder="Enter project name"
            onChange={this.onChangingName}
          />
          <br />
          <label htmlFor="forProjectL">Project Link</label>
          <br />
          <input
            type="text"
            id="forProjectL"
            placeholder="Enter link"
            onChange={this.onChangingLink}
            value={projectLink}
          />
          <br />
          <label htmlFor="forProjectD">Description</label>
          <br />
          <textarea
            cols="30"
            rows="10"
            id="forProjectD"
            onChange={this.onChangingDescription}
            value={projectDescription}
            placeholder="Enter decription"
          />
          <br />
          <div className="align-right">
            <button type="submit" className="addButtonDetails">
              Add
            </button>
          </div>
        </form>
        <img
          src="https://res.cloudinary.com/dojn2omox/image/upload/v1704392370/z0p5flr9o5k2jxb1tmri.png"
          alt="border"
        />
        <br />
        <h1 className="head-details-of-project">Projects</h1>
        <ul className="detailsOfProjects" id="projectPage">
          {listDetails.map((eachItem, index) => (
            <ProjectPage eachItem={eachItem} key={eachItem.id} number={index} />
          ))}
        </ul>
      </div>
    )
  }
}

export default FormPage

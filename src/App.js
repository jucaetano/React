import React, { Component } from 'react';
import api from './api';

class App extends Component{

  state={
    repos: [],
  }

  async componentDidMount(){
    const response = await api.get('');
//console.log(response.data);

    this.setState({repos: response.data});
  }

  render(){
    const {repos}= this.state;

    return(
      <div>
        <h1>Listar os repositórios</h1>
        {console.log(repos)}
        {repos.map(repo => (
          <li key={repo.id}>
          <h2><strong>Título:</strong>
          {repo.description}
          </h2>
          <p>{repo.html_url}</p>
          </li>
          
        ))}
      </div>
    )
  }
}


export default App;

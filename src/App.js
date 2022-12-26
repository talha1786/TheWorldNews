
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize=9;
  apiKey = process.env.REACT_APP_NEWS_API
  constructor() {
    super();
    this.state = {
      progress: 0
    };
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
      <BrowserRouter>
      
      <NavBar />
      <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />

      <Routes>
      <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.props.pageSize} country='us' category="general" />}/>
      <Route exact path="business/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.props.pageSize} country="us" category="business" />}/>
      <Route exact path="entertainment/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.props.pageSize} country="us" category="entertainment" />}/>
      <Route exact path="general/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.props.pageSize} country="us" category="general" />}/>
      <Route exact path="health/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.props.pageSize} country="us" category="health" />}/>
      <Route exact path="science/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.props.pageSize} country="us" category="science" />}/>
      <Route exact path="sports/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.props.pageSize} country="us" category="sports" />}/>
      <Route exact path="technology/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.props.pageSize} country="us" category="technology" />}/>
        
        </Routes>
      
      </BrowserRouter>
      
      </>
    )
  }
}

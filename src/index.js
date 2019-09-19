import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import APIService from "./APIClient/api";
import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Categories from "./Components/Categories/Categories";
import Lifestyle from "./Components/Lifestyle/Lifestyle";
import Posts from "./Components/Posts/Posts";
import Video from "./Components/Video/Video";
import Blog from "./Components/Blog/Blog";
import Events from "./Components/Events/Events";
import Faq from "./Components/Faq/Faq";
import Navbar from "./Components/Navbar/Navbar";
import NewsList from "./Components/NewsList/NewsList";

class App extends React.Component {
  apiService = new APIService();

  state = {
    NewsList: []
  }

  constructor() {
    super();
    this.updateNews();
  }


  updateNews() {
    this.apiService.getNews("ua")
      .then(({ articles }) => {
        //console.log(articles);
        this.setState({
          NewsList: articles
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const List = this.state.NewsList;
    //console.log( "STATE => ",this.state.NewsList);
    return (
      <Fragment>
        <header>
          <div className="container-fluid ">
            <div className="container">
              <Header />
              <Router>
                <Navbar />
                <Switch>
                  <Route path="/About" exact render={() => <About/>} />
                  <Route path="/Categories" exact render={() => <Categories/>} />
                  <Route path="/Lifestyle" exact render={() => <Lifestyle/>} />
                  <Route path="/Posts" exact render={() => <Posts/>} />
                  <Route path="/Video" exact render={() => <Video />} />
                  <Route path="/Blog" exact render={() => <Blog />} />
                  <Route path="/Events" exact render={() => <Events/>} />
                  <Route path="/Faq" exact render={() => <Faq/>} />
                </Switch>
              </Router>

            </div>
          </div>
        </header>
        <NewsList List={List} />
      </Fragment>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));



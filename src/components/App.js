import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../APIs/youtube";

class App extends React.Component {
  constructor() {
    super();
    this.state = { videos: [], selectedVideo: null };
    this.onTermSubmit = async term => {
      const response = await youtube.get("/search", {
        params: {
          q: term
        }
      });
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0]
      });
    };
    this.onVideoSelect = video => {
      this.setState({ selectedVideo: video });
    };
  }

  componentDidMount() {
    this.onTermSubmit('buildings')
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar formSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                vidSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

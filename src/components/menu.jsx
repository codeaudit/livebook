var React = require("react");

var Menu = React.createClass({

  notebook() {
    return this.props.notebook;
  },

  getInitialState() {
    return {
      active: false,
      download: false,
    };
  },

  home() {
    let {setCurrentPage} = this.notebook();
    window.history.pushState({}, "Home", "/");
    setCurrentPage("landing");
  },

  handleDownload(event) {
    this.setState({download: true});
  },

  handleClick(event) {
    this.setState({active: !this.state.active});
  },

  downloadPayload() {
    return ""
//    return 'data:application/octet-stream;charset=utf-8,' + encodeURIComponent(JSON.stringify(iPython));
  },

  handleUpload(event) {
    var setCurrentPage = this.notebook().setCurrentPage
    this.setState({active: false});
    window.history.pushState({}, "Upload", "/upload");
    setCurrentPage("upload");
  },

  render() {
    let activeClass = this.state.active ? "active" : "";
    return (
      <div className={"menu " + activeClass}>
        <img src="/menu.png" alt="menu" onClick={this.handleClick} />
        <ul className="menu-content">
          <li onClick={this.home}><a>Home</a></li>
          <li><a href={this.downloadPayload()} id="downloader" download="notebook.ipynb">Download</a></li>
          <li onClick={this.handleUpload}>Upload</li>
          <li>Cheatsheet</li>
          <li>About</li>
        </ul>
      </div>
    )
  },
});

module.exports = Menu;

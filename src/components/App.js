import React from 'react';
import NavBar from './NavBar.js';
import ModeTabs from './ModeTabs.js';
import LoginPage from './LoginPage.js';
import AppMode from './AppMode.js';
import FeedPage from './FeedPage.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {mode: AppMode.LOGIN,
                  menuOpen: false,
                  modalOpen: false,
                  userId: ""};
  }

  setMode = (newMode) => {
    
    this.setState({mode: newMode});
  }

  toggleMenuOpen = () => {
    this.setState(prevState => ({menuOpen: !prevState.menuOpen}));
  }

  toggleModalOpen = () => {
    this.setState(prevState => ({dialogOpen: !prevState.dialogOpen}));
  }

  setUserId = (Id) => {
    this.setState({userId: Id});
  }

  handleLogin = () => {
    
    this.setState({mode: "FeedMode"})
  }

  render() {
    return (
      <>
        <NavBar mode={this.state.mode}
                menuOpen={this.state.menuOpen}
                toggleMenuOpen={this.state.toggleMenuOpen}
                modalOpen={this.state.modalOpen}
                toggleModalOpen={this.toggleModalOpen}
                userId={this.state.userId}
                setUserId={this.setUserid} />
        {this.state.mode !== AppMode.LOGIN ? 
          <ModeTabs mode={this.state.mode}
                    setMode={this.setMode} 
                    menuOpen={this.state.menuOpen}
                    modalOpen={this.state.modalOpen}/> 
            :
        <LoginPage changeMode={this.handleChangeMode}
                   menuOpen={this.state.menuOpen}
                   modalOpen={this.state.dialogOpen}
                   toggleModalOpen={this.state.toggleModalOpen} 
                   handleLogin={this.handleLogin}
                   userid={this.state.userId}/>}
            {this.state.mode == AppMode.FEED &&
            <FeedPage/>}
      </>
    ); 
  }

}
export default App;

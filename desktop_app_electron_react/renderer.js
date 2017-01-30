// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
import React from 'react'
import ReactDOM from 'react-dom'

var ipc = require('electron').ipcRenderer;

class ContainerForm extends React.Component {
  render() {
    return (
      <div>
        <div className="form-item log-in">
          <div className="table">
            <div className="table-cell">
              <input id="login_Username" name="Username" placeholder="Username" type="text"/>
              <input id="login_Password" name="Password" placeholder="Password" type="Password"/>
              <div id="log-in-btn" className="btn" onClick={()=> this.props.start()}>
                Log in
              </div>
            </div>
          </div>
        </div>
        <div className="form-item sign-up">
          <div className="table">
            <div className="table-cell">
              <input name="email" placeholder="Email" type="text"/>
              <input name="fullName" placeholder="Full Name" type="text"/>
              <input id="sign_up_Username" name="Username" placeholder="Username" type="text"/>
              <input name="Password" placeholder="Password" type="Password"/>
              <div id="sign-up-btn" className="btn">
                Sign up
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ContainerInfo extends React.Component {
  render() {
    return (
      <div>
      <div className="info-item">
        <div className="table">
          <div className="table-cell">
            <p>
              Have an account?
            </p>
            <div id="toggle-log-in-btn" className="btn" onClick={() => this.props.foo()}>
              Log in
            </div>
          </div>
        </div>
      </div>
      <div className="info-item">
        <div className="table">
          <div className="table-cell">
            <p>
              Don't have an account? 
            </p>
            <div id="toggle-sign-up-btn" className="btn" onClick={() => this.props.foo()}>
              Sign up
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }

  handleClick() {
    console.log("hi");
    document.getElementById('app').classname += "log-in";
  }
}

class SignIn extends React.Component{
  constructor() {
    super();
    this.state = 
    {
      mode: 'sign-in'
    }
  }
  render() {
    return (
        <div className={'container ' + this.state.mode} >
          <div className="box"></div>
          <div className="container-forms">
            <div className="container-info">
              <ContainerInfo foo={() => this.toggle_mode()}/>
            </div>
            <div className="container-form">
              <ContainerForm start={() => this.props.start_app()}/>
            </div>
          </div>
        </div>  
        );
  }

  toggle_mode ()
  {
    console.log("toggling sign-in mode");
    if (this.state.mode === 'sign-up')
    {
      this.setState({mode: 'log-in'});
    }
    else
    {
      this.setState({mode: 'sign-up'});
    }
  }
}

class AppMain extends React.Component{
  constructor() {
    super();
    this.text = 'output';
    this.state =
    {
      mode: 'app'
    }
  }
  render()
  {
    return (
      <div className="table app-container">
        <div className="table-cell raw-edit">
          <input id="raw-text"/>
          <button onClick={() => this.saveText()}>Submit</button>
        </div>
        <div className="table-cell rendered-edit">
          <p className="rendered-edit-text">{this.text}</p>
        </div>
      </div>
    );
  }

  setRenderText(text) {
    this.text = text;
    this.forceUpdate();
  }

  renderText(text) {
    ipc.send('render-text', text);
    ipc.on('render-text-reply', (event, arg) => {
      console.log('received render result: ' + arg);
      this.setRenderText(arg);
    })
  }

  saveText() {
    console.log('Saving Text');
    this.renderText(this.text);
  }

}

class App extends React.Component {
  constructor() {
    super();
    this.state = 
    {
      mode: 'sign-in'
    }
  }
  render() {
    if (this.state.mode === 'sign-in'){
      return (
        <SignIn start_app={() => this.start_app()}/>
      );
    }
    else{
      return (
        <AppMain/>
      );
    }
  }

  start_app() {
    console.log("toggling app mode");
    this.setState({mode: 'app'});
  }
}
ReactDOM.render(<App/>,document.getElementById('app'))

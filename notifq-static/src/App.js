import './App.css';
import logo from './notifq.svg';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">        
          <div className="App-title">
            <span className="App-logo"><img src={logo} alt="NotifQ" /></span>
            <span>NotifQ</span>
          </div>          
        </header>
        <div className="App-body">
          <div className="message-box">
            <div className="text title">
              Tailored notifications and opted reminders straight to your devices. 
              Your personalized notification queue.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

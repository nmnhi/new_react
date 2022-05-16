import logo from './logo.svg';
import './App.scss';

// import MyComponent from './Example/MyComponent';
// import Welcome from '../components/testComponent';
import Form from './Example/formComponent';


// 2 component: class component / function component(function, arrow)
// JSX

function App() {
  // Arrow function
// const App() = () =>{
  return (
    <div className="App">
      <header className="App-header">
        {/* <Welcome/> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World. This is React project of Minh Nhi
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/*shortcut style*/}
        {/* <MyComponent/>  */}
        {/* <MyComponent></MyComponent> */}

        {/* Test With Component formComponent */}
        <Form/>
        
      </header>
    </div>
  );
}

export default App;

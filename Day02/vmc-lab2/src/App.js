import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Thông tin cá nhân</h1>
        <p><strong>Họ và tên:</strong>Vũ Mai ChiChi</p>
        <p><strong>Mã sinh viên:</strong> 231090001313</p>
        <p><strong>Ngày sinh:</strong> 20/12/2005</p>
        <p><strong>Điện thoại:</strong> 0336352122</p>
        <p><strong>Tên lớp:</strong> K23CNT1</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React maichi 2310900013 20122005 

        </a>
      </header>
    </div>
  );
}

export default App;

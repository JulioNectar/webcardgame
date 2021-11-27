import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import styled from 'styled-components';
import Sidemenu from './Components/Sidemenu';
import Footer from './Components/Footer';

const DashboardField = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100vw;

      background-color: #666;
      height: fit-content;

    `



function App() {
  return (
    <div className="App">
      <Header />
      <DashboardField>
        <Sidemenu />
        <Dashboard />
      </DashboardField>
      <Footer />

    </div>
  );
}

export default App;

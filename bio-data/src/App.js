import logo from './logo.svg';
import './App.css';
import UserInfo from './components/UserInfo';
import Title from './components/title';
import Reference from './components/Reference';
import Skills from './components/Skills';
import Interests from './components/Interests';

function App() {
  return (
    <div className="App">
      <Title
      name="ABC"
      />
      <UserInfo 
      name="ABC"
      email="abc@gmail.com"
      number="01999999999"
      />
      <Skills
      skills={["React","Node","Vue"]}
      />
      <Interests
      interests={["NFT","Crypto","Blockchain"]}
       />
       <hr/>
       <Reference
       referenceBy="XYZ"
       />
    </div>
    
  );
}

export default App;

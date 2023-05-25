import './App.css';
import styles from './App.module.css';

import FadeIn from './FadeIn';
import Input from './Input';
import Tab from './Tab';
import Reducer from './Reducer';
import UseReducer from './UseReducer';
import UseReducer2 from './UseReducer2';

function App() {
  return (
    <div className="App"> 
      {/* <div className="name_box">안녕하세요.</div>
      <div className={styles.naming_box}>안녕하세요.</div> */}
      {/* <FadeIn />  */}
      {/* <Tab /> */}
      {/* <Input /> */}
      {/* <Reducer /> */}
      <UseReducer />
     
    </div>
  );
}

export default App;

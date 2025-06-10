import { useState } from 'react'
import './App.css'
import Search from './components/Search';
import Records from './components/Records';

const App = () => {
  const [records, setRecords] = useState({});
  const [selectedId, setSelectedId] = useState(0);

  console.log(selectedId);
  console.log(records);
  return (
    <div className="App">      
      <div className="content">
        <Search id={selectedId} setId={setSelectedId} setRecord={setRecords} />
        <Records  />
      </div>
    </div>
  );
};

export default App;

import { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table';
import FileSelect from './components/FileSelect';
import "bootstrap-icons/font/bootstrap-icons.css";
import FlashSize from './components/FlashSize';
import {Partition} from './components/Row';
import Papa from 'papaparse';

async function getCSV() {
  const fileName = "huge_app.csv";
  const res = await fetch(`${process.env.PUBLIC_URL}/tables/${fileName}`);
  if (!res.ok) {
    throw res;
  }
  return res.text();
}


function App() {
  const [flashSize, setFlashSize] = useState<number>(4096);
  const [table, setTable] = useState<Partition[]>([]);


  return (
    <div className="App">
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <FlashSize flashSize={flashSize} setFlashSize={setFlashSize} />
        <br></br>
        <Table table={table} setTable={setTable} flashSize={flashSize*1024} />
        <FileSelect setTable={setTable} />
      </div>
    </div>
  );
}

export default App;

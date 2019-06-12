import React from 'react';
import fileDownload from 'js-file-download';

import NumbersTable from './NumbersTable';
import { generatePhoneNumbers, formatDataForDownload, findMaxAndMin } from '../utils';
import '../styles/App.css';

class App extends React.Component {
  state = {
    numberCount: 10,
    numbersList: []
  }

  onNumberCountChange = (event) => {
    this.setState({ numberCount: event.target.value });
  }

  onNumberCountSubmit = (event) => {
    const { numberCount } = this.state;
    event.preventDefault();
    this.setState({ numbersList: generatePhoneNumbers(Number(numberCount)) });
  }

  handleDownloadClick = (event) => {
    const { numbersList } = this.state;
    return fileDownload(formatDataForDownload(numbersList), 'numbersList.txt');
  }

  renderTableAndDownloadButton = () => {
    const { numbersList } = this.state;
    const [minNumber, maxNumber] = findMaxAndMin(numbersList);
    return (
      <div className="rc-NumberTable">
        <div className="download-section">
          <button className="download" onClick={this.handleDownloadClick}>
            Click Here To Download Number List
          </button>
        </div>
        <div className="report">
          <span> Max Number: {maxNumber}</span>
          <br/>
          <span> Min Number: {minNumber}</span>
        </div>
        <br/>
        <NumbersTable numbersList={numbersList}/>
      </div>
    )
  }

  renderNumberCountForm = () => {
    const { numberCount } = this.state;
    return (
      <div className="rc-NumberCountForm">
        <form className="numberCountForm" onSubmit={this.onNumberCountSubmit}>
          <label htmlFor="numberCount">Amount of Numbers to Generate: </label>
          <br />
          <input className="numberCountInput" name="numberCount" type="number" value={numberCount} max="10000" min="0" onChange={this.onNumberCountChange} />
          <br/>
          <button className="generateButton" type="submit">Generate Phone Numbers</button>
          <br />
        </form>
      </div>
    );
  }

  render() {
    const { numbersList } = this.state;
    return (
      <div className="App">
        <h3>Phone Number Generator</h3>
        { this.renderNumberCountForm() }
        { numbersList.length > 0 && this.renderTableAndDownloadButton() }
      </div>
    );
  }
}

export default App;

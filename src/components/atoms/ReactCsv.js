import { Component, createRef } from 'react';
import axios from 'axios';
import { CSVLink } from 'react-csv';
import faker from 'faker';
import { IconContext } from 'react-icons';
import { FaBeer } from 'react-icons/fa';
import { DiAndroid } from 'react-icons/di';

class ReactCsv extends Component {
  constructor() {
    super();
    this.csvRef = createRef(); // useRef for function components
  }

  /*  purposely added empty array inside array, so that there is a spacing
        of 1 line between headers & data */
  state = {
    dynamicData: [[]],
    startDownload: false,
  };

  staticData = [
    [],
    ['Joy', 'joy@gmail.com', 24],
    ['Tim', 'tim@gmail.com', 15],
    ['Max', 'max@gmail.com', 8],
  ];

  headers = ['Name', 'Email', 'Age'];
  bankHeaders = ['Name', 'IFSC'];

  downloadApiData = async () => {
    // this.setState({ dynamicData: data, startDownload: false })
    /*  Let the async opn of changing state be done, then download the updated
            data, else prev state data wud b downloaded */
    const resp = await axios.get('https://ifsc.razorpay.com/KARB0000001');
    const arr = [[]];
    arr.push([resp?.data?.bank, resp?.data?.ifsc]);

    this.setState({
      dynamicData: arr,
      startDownload: true,
    });

    setTimeout(() => {
      this.csvRef.current.link.click();
    }, 3000);
  };

  render() {
    return (
      <div style={{ margin: '10px 0px' }}>
        <div>
          Lets go for a
          {' '}
          <span>
            <FaBeer />
          </span>
          ?
        </div>
        <IconContext.Provider
          value={{
            color: 'green',
            size: 25,
            title: 'android',
            className: 'global-class-name',
          }}
        >
          <DiAndroid />
        </IconContext.Provider>
        <p>
          <b>Faker dummy data</b>
        </p>
        <p>
          {' '}
          Faker Name -
          {faker.name.findName()}
        </p>
        <p>
          {' '}
          Faker Company Name -
          {faker.company.companyName()}
        </p>
        <CSVLink
          data={this.staticData}
          headers={this.headers}
          filename="Static-Data.csv"
          target="_blank"
          style={{
            textDecoration: 'none',
            backgroundColor: '#fe979c',
            marginRight: 20,
          }}
        >
          Download static CSV Data
        </CSVLink>

        <button
          onClick={this.downloadApiData}
          style={{
            backgroundColor: '#007aba',
            color: 'white',
          }}
        >
          Download data from API
        </button>
        {this.startDownload && (
          <CSVLink
            ref={this.csvRef}
            data={this.dynamicData}
            headers={this.bankHeaders}
            filename="Dynamic-Data.csv"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <div className="text-red-400">clik me</div>
          </CSVLink>
        )}
      </div>
    );
  }
}

export default ReactCsv;

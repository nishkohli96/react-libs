import { Component, createRef } from 'react';
import axios from 'axios';
import { CSVLink } from 'react-csv';
import faker from 'faker';

class ReactCsv extends Component {
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
    csvRef = createRef(); // useRef for function components

    downloadApiData = () => {
        // this.setState({ dynamicData: data, startDownload: false })
        /*  Let the async opn of changing state be done, then download the updated 
            data, else prev state data wud b downloaded */
        setTimeout(() => {
            this.csvRef.current.link.click();
        }, 1000);
    };

    render() {
        return (
            <div style={{ margin: '10px 0px' }}>
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
                    Download static CSV ßData
                </CSVLink>

                <button
                    onClick={this.downloadApiData}
                    style={{ backgroundColor: '#007aba', color: 'white' }}
                >
                    Download data from API
                </button>
                {this.startDownload && (
                    <CSVLink
                        ref={this.csvRef}
                        data={this.dynamicData}
                        headers={this.headers}
                        filename="Dynamic-Data.csv"
                        target="_blank"
                        style={{ textDecoration: 'none' }}
                    ></CSVLink>
                )}
            </div>
        );
    }
}

export default ReactCsv;

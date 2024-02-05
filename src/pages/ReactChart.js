import React from 'react';
import { Chart } from 'react-charts';
import Button from '@material-ui/core/Button';
import useChartConfig from '_Utils/useChartConfig';

const getRandomInt = () => {
  const min = 0;
  const max = 100;
  const nullChance = 0;
  const randomNum
    = Math.random() < nullChance
      ? null
      : min + Math.round(Math.random() * (max - min));
  return randomNum;
};

const ReactChart = () => {
  const [dataSet, setDataSet] = React.useState([0]);

  const randomizeData = React.useCallback(() => {
    const arr = new Array(10).fill(0);
    for (let i = 0; i < 9; i++) {
      arr[i] = getRandomInt();
    }
    setDataSet(arr);
  }, []);

  React.useEffect(() => {
    randomizeData();
  }, [randomizeData]);

  const getYMax = arr => {
    let res = Math.max.apply(null, arr);
    /* Round to the nearest multiple of 10 */
    res = res % 10 === 0 ? res + 10 : 10 * (Math.round(res / 10) + 1);
    return res;
  };

  const { data, getSeriesStyle, getDatumStyle, onFocus, dataSeries, axes }
    = useChartConfig({
      series: 1 /* Values for each label */,
      datums: dataSet.length /* Num of labels */,
      yMax: getYMax(dataSet),
      dataType: 'integer',
      dataSet,
    });

  return (
    <div className="fullscreen">
      <div style={styles.chartContainer}>
        <Chart
          data={data}
          series={dataSeries}
          axes={axes}
          getSeriesStyle={getSeriesStyle}
          getDatumStyle={getDatumStyle}
          onFocus={onFocus}
          tooltip
        />
      </div>
      <Button style={styles.btn} onClick={randomizeData}>
        Randomize Data
      </Button>
    </div>
  );
};

const styles = {
  chartContainer: {
    width: 500,
    height: 500,
    marginLeft: 40,
    margin: 20,
  },
  btn: {
    backgroundColor: '#E85B5A',
    color: 'white',
  },
};

export default ReactChart;

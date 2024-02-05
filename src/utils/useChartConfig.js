import { useState, useEffect, useCallback, useMemo } from 'react';

const options = {
  elementType: [
    'line', 'area', 'bar', 'bubble',
  ],
  primaryAxisType: [
    'linear', 'time', 'log', 'ordinal',
  ],
  secondaryAxisType: [
    'linear', 'time', 'log', 'ordinal',
  ],
  primaryAxisPosition: [
    'top', 'left', 'right', 'bottom',
  ],
  secondaryAxisPosition: [
    'top', 'left', 'right', 'bottom',
  ],
  secondaryAxisStack: [true, false],
  primaryAxisShow: [true, false],
  secondaryAxisShow: [true, false],
  grouping: [
    'single', 'series', 'primary', 'secondary',
  ],
  tooltipAnchor: [
    'closest',
    'top',
    'bottom',
    'left',
    'right',
    'center',
    'gridTop',
    'gridBottom',
    'gridLeft',
    'gridRight',
    'gridCenter',
    'pointer',
  ],
  tooltipAlign: [
    'auto',
    'top',
    'bottom',
    'left',
    'right',
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'center',
  ],
  snapCursor: [true, false],
};

const optionKeys = Object.keys(options);

function makeDataFrom(dataType, series, datums, dataSet) {
  return [...new Array(series || Math.max(Math.round(Math.random() * 5), 1))].map(() => makeSeries(dataType, datums, dataSet));
}

function makeSeries(dataType, datums, dataSet) {
  const start = 0;
  const length = datums;

  return {
    label: 'Value',
    data: [...new Array(length)].map((_, i) => {
      let x = start + i;
      /* You can define your custom data type here, & pass
                from the parent component */
      if (dataType === 'integer') {
        x = `${i + 1}`;
      }
      const y = `${dataSet[i]}`;
      return {
        primary: x,
        secondary: y,
      };
    }),
  };
}

export default function useChartConfig({
  series,
  show = [],
  count = 1,
  yMax = 100,
  resizable = true,
  canRandomize = true,
  dataType = 'time',
  elementType = 'line',
  primaryAxisType = 'time',
  secondaryAxisType = 'linear',
  primaryAxisPosition = 'bottom',
  secondaryAxisPosition = 'left',
  primaryAxisStack = false,
  secondaryAxisStack = true,
  primaryAxisShow = true,
  secondaryAxisShow = true,
  tooltipAnchor = 'closest',
  tooltipAlign = 'auto',
  grouping = 'primary',
  snapCursor = true,
  datums = 10,
  dataSet = [],
}) {
  const [state, setState] = useState({
    count,
    yMax,
    resizable,
    canRandomize,
    dataType,
    elementType,
    primaryAxisType,
    secondaryAxisType,
    primaryAxisPosition,
    secondaryAxisPosition,
    primaryAxisStack,
    secondaryAxisStack,
    primaryAxisShow,
    secondaryAxisShow,
    tooltipAnchor,
    tooltipAlign,
    grouping,
    snapCursor,
    datums,
    data: makeDataFrom(dataType, series, datums, dataSet),
  });

  useEffect(() => {
    setState(old => ({
      ...old,
      data: makeDataFrom(dataType, series, datums, dataSet),
    }));
  }, [
    count, yMax, dataType, datums, series, dataSet,
  ]);

  /* Common config for all charts */

  const [{ activeSeriesIndex, activeDatumIndex }, setActiveState]
    = useState({
      activeSeriesIndex: -1,
      activeDatumIndex: -1,
    });

  const getSeriesStyle = useCallback(
    series => ({
      color: '#478dca',
      opacity:
        activeSeriesIndex > -1
          ? series.index === activeSeriesIndex
            ? 1
            : 0.3
          : 1,
    }),
    [activeSeriesIndex],
  );

  const getDatumStyle = useCallback(
    datum => ({ color: activeDatumIndex === datum.index ? '#c9406c' : '#478dca' }),
    [activeDatumIndex],
  );

  const onFocus = useCallback(
    focused =>
      setActiveState({
        activeSeriesIndex: focused ? focused.series.id : -1,
        activeDatumIndex: focused ? focused.index : -1,
      }),
    [setActiveState],
  );

  const dataSeries = useMemo(
    () => ({ type: 'bar' }),
    [],
  );

  const axes = useMemo(
    () => [
      {
        primary: true,
        type: 'ordinal',
        position: 'bottom',
        showTicks: true,
        id: 'date',
      },
      {
        position: 'left',
        type: 'linear',
        stacked: false,
        hardMin: 0,
        hardMax: yMax,
      },
    ],
    [yMax],
  );

  const Options = optionKeys
    .filter(option => show.indexOf(option) > -1)
    .map(option => (
      <div key={option}>
        {option}
        : &nbsp;
        <select
          value={state[option]}
          onChange={({ target: { value } }) =>
            setState(old => ({
              ...old,
              [option]:
                typeof options[option][0] === 'boolean'
                  ? value === 'true'
                  : value,
            }))}
        >
          {options[option].map(d => (
            <option value={d} key={d.toString()}>
              {d.toString()}
            </option>
          ))}
        </select>
        <br />
      </div>
    ));

  return {
    ...state,
    Options,
    getSeriesStyle,
    getDatumStyle,
    onFocus,
    dataSeries,
    axes,
  };
}

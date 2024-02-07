import axios from 'axios';
import { useQuery, useQueries } from 'react-query';
import CircularProgress from '@mui/material/CircularProgress';

const SingleQueryEg = () => {
  /* isError, error also included below, can use as per requirement */
  const { isLoading, data } = useQuery('karb', () =>
    axios('https://ifsc.razorpay.com/KARB0000001').then(res => res.data));

  /* Need to use QueryClient Provider at root level, check index.js */
  return (
    <div>
      <div className="text-blue-400">React-Query Example</div>
      {isLoading ? (
        <CircularProgress variant="indeterminate" />
      ) : (
        <div>
          Data Fetched
          {' '}
          <b>Bank Name</b>
          :
          {' '}
          {data?.BANK}
        </div>
      )}
    </div>
  );
};

const MultipleQueryEg = () => {
  const results = useQueries([
    {
      queryKey: ['bank', 1],
      queryFn: () =>
        axios('https://ifsc.razorpay.com/KARB0000001').then(res => res.data),
    },
    {
      queryKey: ['bank', 2],
      queryFn: () =>
        axios('https://ifsc.razorpay.com/HDFC0001380').then(res => res.data),
    },
    {
      queryKey: ['bank', 3],
      queryFn: () =>
        axios('https://ifsc.razorpay.com/HDFC001380').then(res => res.data),
    },
  ]);


  return (
    <div>
      <div className="my-5 text-red-600">
        ** You are looking at the v3 version of react-query. Starting with v4, react-query is now available as @tanstack/react-query
      </div>
      <div className="text-blue-400">Multiple React-Query Example</div>
      {results.map((res, idx) =>
        res?.isSuccess ? (
          <div className="text-blue-800" key={idx}>
            Data:
            {res?.data?.BANK}
          </div>
        ) : (
          <div className="text-red-300" key={idx}>ERROR</div>
        ))}
    </div>
  );
};

const ReactQueryEg = () => (
  <>
    <SingleQueryEg />
    <MultipleQueryEg />
  </>
);

export default ReactQueryEg;

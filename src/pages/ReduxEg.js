import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    decreaseAmt,
    increment,
    incrementByAmount,
} from '_Store/counter.slice';
import { fetchBankInfo } from '_Store/bankInfo.slice';
import { useGetBankInfoQuery } from '_Store/api.slice';

const ReduxEg = () => {
    const count = useSelector((state) => state.counter.value);
    const bankInfo = useSelector((state) => state.bank.bankInfo);

    const dispatch = useDispatch();

    /*  Refer these links for more info on fetching data using thunks,
        and say filtering from an arrayObj in state 

        - https://redux.js.org/tutorials/essentials/part-5-async-logic
        - https://redux.js.org/tutorials/essentials/part-6-performance-normalization
    */

    const {
        data: bankInfoData,
        isLoading: bankInfoLoading,
        isSuccess: bankInfoFetchSuccess,
        // isError,
        // error,
        // refetch
    } = useGetBankInfoQuery();

    return (
        <div className="fullscreen">
            <div>
                <div className="text-blue-400">
                    Counter Example ( Synchronous){' '}
                </div>
                <button
                    className="link"
                    onClick={() => dispatch(decreaseAmt({ amt: 4 }))}
                >
                    Decrease By 4
                </button>
                <button className="link" onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
                <span>{count}</span>
                <button className="link" onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <button
                    className="link"
                    onClick={() => dispatch(incrementByAmount(5))}
                >
                    Increment By 5
                </button>
            </div>

            <div>
                <div className="text-blue-400">BankInfo Example ( Async ) </div>
                <button
                    className="link"
                    onClick={() =>
                        dispatch(fetchBankInfo({ ifsc: 'KARB0000001' }))
                    }
                >
                    Get Bank Info
                </button>

                {/* <button onClick={refetch}>Refetch Posts</button> */}
                <div className="text-red-400">
                    <b>Data fetched using createAsyncThunk:</b> {bankInfo.BANK}
                </div>
                {bankInfoLoading && (
                    <div className="text-pink-500">Fetching Data....</div>
                )}
                {bankInfoFetchSuccess && (
                    <div className="text-red-400">
                        <b>Data fetched using RTK-Query:</b> {bankInfoData.BANK}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReduxEg;

import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    decreaseAmt,
    increment,
    incrementByAmount,
} from '_Store/counter.slice';
import { printInfo, fetchBankInfo } from '_Store/bankInfo.slice';

const ReduxEg = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

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
                    onClick={() => dispatch(fetchBankInfo())}
                >
                    Get Bank Info
                </button>
                <button className="link" onClick={() => dispatch(printInfo())}>
                    Console.log Bank Info
                </button>
            </div>
        </div>
    );
};

export default ReduxEg;

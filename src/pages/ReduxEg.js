import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    decreaseAmt,
    increment,
    incrementByAmount,
} from '_Store/counterSlice';

const ReduxEg = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="fullscreen">
            <div>
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
        </div>
    );
};

export default ReduxEg;

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '_Store/counterSlice';

const ReduxEg = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="fullscreen">
            <div>
                <button className="link" onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <span>{count}</span>
                <button className="link" onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default ReduxEg;

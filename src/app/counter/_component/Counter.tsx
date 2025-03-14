'use client';
import { counterActions } from '@/store/slice/counter';
import { useAppDispatch, useAppSelector } from '@/store';

const Counter = () => {
  const { increment, incrementX, incrementY } = counterActions;
  const counter = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      x is {counter.x} y is {counter.y}
      <button onClick={() => dispatch(incrementX())}>x+</button>
      <button onClick={() => dispatch(incrementY())}>y+</button>
      <button onClick={() => dispatch(increment({ which: 'x', amount: 100 }))}>
        x+100
      </button>
    </div>
  );
};
export default Counter;

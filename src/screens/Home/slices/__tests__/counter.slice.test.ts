// counterSlice.test.ts
import counterReducer, {increment, decrement, clearCount, update} from '../counter.slice';

describe('counterSlice', () => {
  it('should increment the counter', () => {
    const nextState = counterReducer({value: 0}, increment());
    expect(nextState).toStrictEqual({value: 1});
  });

  it('should decrement the counter', () => {
    const nextState = counterReducer({value: 3}, decrement());
    expect(nextState).toStrictEqual({value: 2});
  });

  it('should add 5 to counter', () => {
    const nextState = counterReducer({value: 3}, update(5));
    expect(nextState).toStrictEqual({value: 8});
  });

  it('should substract 5 from counter', () => {
    const nextState = counterReducer({value: 3}, update(-5));
    expect(nextState).toStrictEqual({value: -2});
  });

  it('decrement should not go below 0', () => {
    const nextState = counterReducer({value: 0}, decrement());
    expect(nextState).toStrictEqual({value: 0});
  });

  it('should clear the counter', () => {
    const nextState = counterReducer({value: 3}, clearCount());
    expect(nextState).toStrictEqual({value: 0});
  });
});

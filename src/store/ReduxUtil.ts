import { useAppDispatch, useAppSelector } from '@/store';
import type { Slice, SliceCaseReducers } from '@reduxjs/toolkit';
import type { ActionCreatorsMapObject } from 'redux';

export default class ReduxUtil {
  static createUseSlice<
    TState,
    TActions extends SliceCaseReducers<TState>,
    TThunkActions extends ActionCreatorsMapObject,
  >({
    slice,
    thunkActions,
  }: {
    slice: Slice<TState, TActions>;
    thunkActions: TThunkActions;
  }) {
    const useActions = ReduxUtil.createUseActions(slice.actions, thunkActions);
    const useSelector = ReduxUtil.createUseSelector(
      slice.reducerPath,
      slice.actions.initialize,
    );

    return (
      initialState,
    ): [
      TState,
      TReduxUtil.WrappedActions<typeof slice.actions & typeof thunkActions>,
    ] => {
      const actions = useActions();
      const state = useSelector(initialState);
      return [state, actions];
    };
  }

  static createUseSelector(reducerPath: string, initAction) {
    let initialized = false;
    return initialState => {
      const dispatch = useAppDispatch();
      if (!initialized) {
        dispatch(initAction(initialState));
        initialized = true;
      }
      return useAppSelector(state => state[reducerPath]);
    };
  }

  static createUseActions<
    T extends Record<string, any>,
    U extends Record<string, any>,
  >(sliceActions: T, thunkActions: U) {
    const actions = ReduxUtil.mergeActions(sliceActions, thunkActions);
    return () => {
      const dispatch = useAppDispatch();
      return ReduxUtil.wrapActions(dispatch, actions);
    };
  }

  static mergeActions<
    T extends Record<string, any>,
    U extends Record<string, any>,
  >(sliceActions: T, thunkActions: U): TReduxUtil.MergeActions<T, U> {
    return { ...sliceActions, ...thunkActions };
  }

  static wrapActions = function <
    T extends Record<string, (...args: any[]) => any>,
  >(dispatch, actions: T) {
    return Object.keys(actions).reduce((acc, key) => {
      const actionCreator = actions[key];
      acc[key as keyof T] = function useAction(
        ...args: Parameters<typeof actionCreator>
      ) {
        return dispatch(actionCreator(...args));
      };
      return acc;
    }, {} as { [K in keyof T]: (...args: Parameters<T[K]>) => ReturnType<T[K]> });
  };
}

export namespace TReduxUtil {
  export type MergeActions<
    T extends Record<string, any>,
    U extends Record<string, any>,
  > = T & U;

  export type WrappedActions<T extends ActionCreatorsMapObject> = {
    [K in keyof T]: (...args: Parameters<T[K]>) => ReturnType<T[K]>;
  };
}

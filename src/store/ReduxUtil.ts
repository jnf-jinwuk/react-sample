import { useAppDispatch } from '@/store';

export default class ReduxUtil {
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
}

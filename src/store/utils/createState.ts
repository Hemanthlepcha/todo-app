import { atom, atomFamily, DefaultValue, selectorFamily } from "recoil";
import { uniqBy } from "../../utils/uniqBy";

type Props<T> = {
  key: (str: string) => string;
  initialState: () => T;
  set?: (params: { newVal: T }) => void;
};

type State = {
  id: string;
};

export const createState = <T extends State>(props: Props<T>) => {
  // Define atomFamily for individual state items
  const atomState = atomFamily<T, string>({
    key: props.key("atomState"),
    default: props.initialState(),
  });

  // Define atom for maintaining a list of state items
  const listState = atom<T[]>({
    key: props.key("listState"),
    default: [],
  });

  // Define atom for maintaining a list of IDs
  const idsState = atom<string[]>({
    key: props.key("idsState"),
    default: [],
  });

  // Define selectorFamily for accessing and modifying state items
  const state = selectorFamily<T, string>({
    key: props.key("state"),
    get:
      (id) =>
      ({ get }) =>
        get(atomState(id)),
    set:
      (id) =>
      ({ get, set, reset }, newVal) => {
        // Remove an item from the list when reset function will be called.
        if (newVal instanceof DefaultValue) {
          reset(atomState(id));
          set(listState, (prev) => {
            return prev.filter((p) => p.id !== id);
          });
          set(idsState, (prev) => prev.filter((prevId) => prevId !== id));
          return;
        }

        // Update the atom state with the new value
        set(atomState(id), newVal);

        // Update the listState with the updated value, ensuring uniqueness
        set(listState, (prev) =>
          uniqBy([...prev, newVal], "id").map((p) =>
            p.id === newVal.id ? { ...p, ...newVal } : p
          )
        );

        // Add the new ID to idsState if it doesn't already exist
        if (get(idsState).find((projectId) => projectId === newVal.id)) return;
        set(idsState, (prev) => [...prev, newVal.id]);

        // Optionally call the set function from props to handle external updates
        props.set?.({ newVal });
      },
  });

  // Return the created state objects
  return {
    state,
    listState,
    idsState,
  };
};

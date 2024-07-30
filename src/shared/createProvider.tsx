import React, {
  createContext,
  useContext as useReactContext,
  memo,
  PropsWithChildren,
} from "react";

export function createProvider<
  ContextProps extends object,
  Props extends object,
>(useValue: (props: Props) => ContextProps) {
  const Context = createContext<ContextProps>({} as ContextProps);

  // Custom hook to consume the context
  const useCustomContext = () => {
    const context = useReactContext(Context);
    if (!Object.keys(context).length) {
      throw new Error(`Context must be consumed in the Provider`);
    }
    return context;
  };

  const Provider: React.FC<PropsWithChildren<Props>> = memo((props) => {
    // Calculate context value at the top level of the component
    const contextProps = useValue(props);
    // Provide the calculated value to the context
    return (
      <Context.Provider value={contextProps}>{props.children}</Context.Provider>
    );
  });

  Provider.displayName = "Provider";

  return {
    Provider,
    Context,
    useContext: useCustomContext,
  };
}

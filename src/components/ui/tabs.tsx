import * as React from "react";

import { cn } from "../../utils/cn";

type TabsContextValue = {
  value: string;
  setValue: (value: string) => void;
  baseId: string;
};

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabsContext(component: string) {
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error(`${component} must be used within <Tabs>`);
  }

  return context;
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(function Tabs(
  { defaultValue, value: valueProp, onValueChange, className, children, ...props },
  ref
) {
  const isControlled = valueProp !== undefined;
  const internalId = React.useId();
  const [valueState, setValueState] = React.useState(defaultValue ?? "");

  const value = isControlled ? valueProp ?? "" : valueState;

  const setValue = React.useCallback(
    (nextValue: string) => {
      if (!isControlled) {
        setValueState(nextValue);
      }

      onValueChange?.(nextValue);
    },
    [isControlled, onValueChange]
  );

  const contextValue = React.useMemo(() => ({
    value,
    setValue,
    baseId: internalId
  }), [internalId, setValue, value]);

  return (
    <TabsContext.Provider value={contextValue}>
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
});

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  function TabsList({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        role="tablist"
        className={className}
        {...props}
      />
    );
  }
);

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  function TabsTrigger({ value, className, children, onClick, ...props }, ref) {
    const { value: activeValue, setValue, baseId } = useTabsContext("TabsTrigger");
    const isActive = activeValue === value;
    const triggerId = `${baseId}-trigger-${value}`;
    const contentId = `${baseId}-content-${value}`;

    return (
      <button
        ref={ref}
        id={triggerId}
        role="tab"
        type="button"
        className={cn(className)}
        aria-selected={isActive}
        aria-controls={contentId}
        data-state={isActive ? "active" : "inactive"}
        onClick={(event) => {
          onClick?.(event);
          if (!isActive) {
            setValue(value);
          }
        }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  function TabsContent({ value, className, children, ...props }, ref) {
    const { value: activeValue, baseId } = useTabsContext("TabsContent");
    const isActive = activeValue === value;
    const triggerId = `${baseId}-trigger-${value}`;
    const contentId = `${baseId}-content-${value}`;

    return (
      <div
        ref={ref}
        id={contentId}
        role="tabpanel"
        aria-labelledby={triggerId}
        hidden={!isActive}
        className={cn(className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export declare namespace MenuItemNamespace {
  export interface MenuOption extends React.HTMLAttributes<HTMLDivElement> {
    value: string | number;
    label: string | number;
    selected?: boolean;
  }
  export interface MenuOptionProps
    extends React.HTMLAttributes<HTMLDivElement> {
    value: string | number;
    children: React.ReactNode;
    selected?: boolean;
  }
}

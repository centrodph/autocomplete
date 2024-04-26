/* eslint-disable-next-line */

export declare namespace MenuItemNamespace {
  export interface MenuOption extends React.HTMLAttributes<HTMLDivElement> {
    value: string | number;
    label: React.ReactNode;
    selected?: boolean;
  }
}

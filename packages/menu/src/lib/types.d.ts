import React from 'react';

export declare namespace MenuNamespace {
  export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
    triggerRef: React.RefObject<HTMLInputElement>;
    isOpen: boolean;
    children: React.ReactNode;
  }
}

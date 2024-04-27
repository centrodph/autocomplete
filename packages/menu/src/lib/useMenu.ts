import { MenuNamespace } from './types';

export const useMenu = (config: MenuNamespace.MenuProps) => {
  const { isOpen, triggerRef } = config;

  const { innerHeight } = window;
  const { top, width, bottom, left } =
    triggerRef.current?.getBoundingClientRect() ?? {
      top: 0,
      width: 0,
      bottom: 0,
      left: 0,
    };
  const remainingSpaceTop = top;
  const remainingSpaceBottom = innerHeight - bottom;
  const positionToOpen =
    remainingSpaceTop > remainingSpaceBottom ? 'bottom' : 'top';
  const valueToOpen = positionToOpen === 'top' ? bottom : innerHeight - top;

  const maxHeight = innerHeight - (valueToOpen + 10);

  return {
    valueToOpen,
    isOpen,
    width,
    positionToOpen,
    maxHeight,
    left,
  };
};

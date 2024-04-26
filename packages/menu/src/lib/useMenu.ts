import { MenuNamespace } from './types';

export const useMenu = (config: MenuNamespace.MenuProps) => {
  const { isOpen, triggerRef, options } = config;

  const { innerHeight } = window;
  const { top, width, bottom } = triggerRef.current?.getBoundingClientRect() ?? {
    top: 0,
    width: 0,
    bottom: 0,
  };
  const remainingSpaceTop = top;
  const remainingSpaceBottom = innerHeight - bottom;
  const positionToOpen =
    remainingSpaceTop > remainingSpaceBottom ? 'bottom' : 'top';
  const valueToOpen = positionToOpen === 'top' ? bottom : innerHeight - top;
  const hasOptions = options && options.length > 0;
  

  return {
    valueToOpen,
    isOpen,
    hasOptions,
    width,
    positionToOpen,
  };
};

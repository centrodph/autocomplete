import styles from './highlight.module.css';
import type { HighlightNamespace } from './types';

export function Highlight(props: HighlightNamespace.HighlightProps) {
  if (!props.selection) return props.text;
  const search = new RegExp(`(${props.selection})`, 'gi');
  const textArray = String(props.text).split(search);
  return textArray.map((part) =>
    part.toLocaleLowerCase() === props.selection.toLocaleLowerCase() ? (
      <span className={styles['highlight']}>{part}</span>
    ) : (
      `${part}`
    )
  );
}

export default Highlight;

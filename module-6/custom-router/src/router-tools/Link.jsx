import { navigate } from './navigate';

export function Link({ target, to, ...props }) {
  const handleClick = (e) => {
    const isMainEvent = e.button === 0; // primary click
    const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey; // modifiers
    const isManageableEvent = target === undefined || target === '_self';

    console.log({ isMainEvent, isManageableEvent, isModifiedEvent });

    if (isMainEvent && !isModifiedEvent && isManageableEvent) {
      console.log('not handled');

      e.preventDefault();
      navigate(to);
    }
  };

  return <a onClick={handleClick} href={to} target={target} {...props} />;
}

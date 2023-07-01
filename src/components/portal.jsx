import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children }) => {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      setContainer(document?.createElement('div'));
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined' && container) {
      container.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;z-index:70;pointer-events:none;';
      document?.body?.appendChild(container);
    }
    return () => {
      if (typeof document !== 'undefined' && container) {
        document.body.removeChild(container);
      }
    };
  }, [container]);

  return container ? ReactDOM.createPortal(children, container) : null;
};

export { Portal };

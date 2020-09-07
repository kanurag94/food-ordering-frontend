import React, { useEffect, useRef } from 'react';
import onIntersect from 'on-intersect';
import PropTypes from 'prop-types';

export default function NotifyingLoader(props) {
  const elementRef = useRef(null);

  useEffect(() => {
    const stopObserving = onIntersect(
      elementRef.current,
      props.onEnterViewport
    );
    return () => {
      stopObserving();
    };
  }, [props.onEnterViewport]);

  return <div ref={elementRef}>Loading...</div>;
}
NotifyingLoader.propTypes = {
  onEnterViewport: PropTypes.func.isRequired,
};

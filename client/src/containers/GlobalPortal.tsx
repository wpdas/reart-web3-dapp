import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Allows adding a child in a node above the app root element. This is useful to overlay the main site content.
 * Can be used with Modals and others.
 *
 * Example:
 * import GlobalPortal from '@containers/GlobalPortal';
 *
 * <GlobalPortal>
 *    <MyModal {...props} />
 * </GlobalPortal>
 *
 * @param {{ children: React.ElementType | Node }} param
 * @returns
 */
const GlobalPortal: React.FC<{ children: React.ReactNode | any }> = ({
  children,
}) => {
  const globalReactPortal = document.getElementById('global-react-portal');
  return ReactDOM.createPortal(children, globalReactPortal!);
};

export default GlobalPortal;

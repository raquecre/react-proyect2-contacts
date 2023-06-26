import React from 'react';
import { shallow, render, mount } from 'enzyme';
import AddRandomContact from './AddRandomContact';

describe('AddRandomContact', () => {
  let props;
  let shallowAddRandomContact;
  let renderedAddRandomContact;
  let mountedAddRandomContact;

  const shallowTestComponent = () => {
    if (!shallowAddRandomContact) {
      shallowAddRandomContact = shallow(<AddRandomContact {...props} />);
    }
    return shallowAddRandomContact;
  };

  const renderTestComponent = () => {
    if (!renderedAddRandomContact) {
      renderedAddRandomContact = render(<AddRandomContact {...props} />);
    }
    return renderedAddRandomContact;
  };

  const mountTestComponent = () => {
    if (!mountedAddRandomContact) {
      mountedAddRandomContact = mount(<AddRandomContact {...props} />);
    }
    return mountedAddRandomContact;
  };  

  beforeEach(() => {
    props = {};
    shallowAddRandomContact = undefined;
    renderedAddRandomContact = undefined;
    mountedAddRandomContact = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});

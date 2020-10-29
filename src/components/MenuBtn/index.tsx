/**
 * @format
 */

import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';

const MenuBtn = () => {
  return (
    <TouchableWithoutFeedback>
      <Image
        source={require('assets/icons/menu.png')}
        style={{ width: 30, height: 30 }}
      />
    </TouchableWithoutFeedback>
  );
};

export default MenuBtn;

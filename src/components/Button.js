import React from 'react';
import propsForType from '../utils/propsForType';
import { Button as BaseButton } from './Base';

const types = [
  {
    type: 'primary',
    props: {
      bg: { base: 'teal5', hover: 'teal6' },
      color: 'white',
      border: '1:transparent'
    }
  },
  {
    type: 'secondary',
    props: {
      color: { base: 'teal7', hover: 'teal8' },
      border: { base: '1:teal5', hover: '1:teal7' }
    }
  },
  {
    type: 'secondary-danger',
    props: {
      color: { base: 'red7', hover: 'red8' },
      border: { base: '1:red5', hover: '1:red7' }
    }
  },
  {
    type: 'danger',
    props: {
      bg: { base: 'red5', hover: 'red6' },
      color: 'white',
      border: '1:transparent'
    }
  }
];

const defaultProps = {
  ff: 'sans.0',
  ls: 'wider',
  fs: 'lg',
  rd: 'md',
  py: 2,
  px: 4,
  cursor: 'pointer',
  border: 'none',
  bs: { base: 'sm', hover: 'md' },
  display: 'inline-flex',
  ai: 'center',
  jc: 'center'
};

const additionalStyles = ({ disabled, small, type }) => {
  let styles = {};
  if (disabled && !['secondary', 'secondary-danger'].includes(type)) {
    styles = {
      ...styles,
      bg: { base: 'grey4', hover: 'grey5' },
      cursor: 'not-allowed'
    };
  }

  if (disabled && ['secondary', 'secondary-danger'].includes(type)) {
    styles = {
      ...styles,
      border: { base: '1:grey4', hover: '1:grey5' },
      color: { base: 'grey5', hover: 'grey6' },
      cursor: 'not-allowed'
    };
  }

  if (small) {
    styles = {
      ...styles,
      fs: 'sm',
      py: 2,
      px: 3
    };
  }

  return styles;
};

export default function Button(props) {
  return (
    <BaseButton
      {...defaultProps}
      {...propsForType(types, props.type)}
      {...additionalStyles(props)}
      {...props}>
      {props.children}
    </BaseButton>
  );
}

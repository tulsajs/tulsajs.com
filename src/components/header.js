import React from 'react';
import propsForType from '../utils/propsForType';
import { Span } from './Base';

const types = [
  { type: 1, props: { as: 'h1', fs: '5xl' } },
  { type: 2, props: { as: 'h2', fs: '4xl' } },
  { type: 3, props: { as: 'h3', fs: '3xl' } },
  { type: 4, props: { as: 'h4', fs: '2xl' } },
  { type: 5, props: { as: 'h5', fs: 'xl' } }
];

const defaultProps = {
  ff: 'sans.0',
  ls: 'wider',
  color: 'grey7'
};

export default function Header({ type, children, ...rest }) {
  return (
    <Span {...defaultProps} {...propsForType(types, type)} {...rest}>
      {children}
    </Span>
  );
}

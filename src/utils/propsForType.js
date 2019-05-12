import find from 'lodash/find';

export default (types, type) => (find(types, { type }) || types[0]).props;

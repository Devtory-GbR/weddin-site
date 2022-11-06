import sal from 'sal.js';

import 'sal.js/dist/sal.css';

export default (context, inject) => {
  const scrollAnimmation = sal();
  inject('updateSal', () => scrollAnimmation.update());
};

import test from 'ava';
import validation from '../lib/validation';


const input = {
  target: {
    name: 'url',
    value: 'ibm.com',
  },
};

// Valid input
test('valid input', t => {
  t.true(validation(input), 'Valid input returns true');
});

test('validate text is url', t => {
  t.true(validation(input), 'Must be an actual url');
});

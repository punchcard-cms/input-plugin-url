import test from 'ava';
import validation from '../lib/validation';


const input = {
  target: {
    name: 'url',
    value: 'cats.com',
  },
};

const badInput = {
  target: {
    name: 'url',
    value: 'lol no',
  },
};

// Valid input
test('valid input', t => {
  t.true(validation(input), 'Valid input returns true');
});

test('validate text is url', t => {
  t.true(validation(input), 'Must be an actual url');
});

test('validate bad url throws error', t => {
  t.is(validation(badInput), 'Not a valid url.', 'Return error if url is invalid');
});

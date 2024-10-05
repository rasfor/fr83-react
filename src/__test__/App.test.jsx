import renderer from 'react-test-renderer';
import { expect, it } from 'vitest'
import App from '../App';

it('toUpperCase', () => {
    const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot()
})
// @flow
import createTestContext from 'react-cosmos-test/enzyme';
import fixtures from '../fixtures/fixtures';

const defaultFixture = fixtures.find(it => it.name === 'Default');
const fixtureWithTabs = fixtures.find(it => it.name === 'withSubNav');

if (!defaultFixture || !fixtureWithTabs)
  throw new Error('Test requires a Default and withSubNav fixture');

function mountWithCallback(fixture, onDisplayTabs) {
  const wrappedFixture = {
    ...fixture,
    props: {
      ...fixture.props,
      onDisplayTabs,
    },
  };
  const { mount, getWrapper } = createTestContext({ fixture: wrappedFixture });
  mount();
  return getWrapper();
}

test('PrimaryNavigation should invoke onDisplayTabs iff tabs are shown', () => {
  const onDisplayTabs = jest.fn(() => {});
  mountWithCallback(defaultFixture, onDisplayTabs);
  expect(onDisplayTabs).toHaveBeenCalledTimes(0);
  mountWithCallback(fixtureWithTabs, onDisplayTabs);
  expect(onDisplayTabs).toHaveBeenCalledTimes(1);
});

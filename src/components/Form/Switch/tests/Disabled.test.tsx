import createTestContext from 'react-cosmos-test/enzyme';
import fixture from '../fixtures/Disabled.fixture';

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

test('<Switch /> rendered correctly with disabled fixture', () => {
  const wrapper = getWrapper();

  expect(wrapper).toMatchSnapshot();
});

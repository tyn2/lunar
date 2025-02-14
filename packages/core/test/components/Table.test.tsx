import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { unwrapHOCs } from '@airbnb/lunar-test-utils';
import Table from '../../src/components/Table';

function unwrap(element: React.ReactElement): Enzyme.ShallowWrapper {
  // Dont use shallowWithStyles because of TrackingBoundary
  return unwrapHOCs(shallow(element), 'Table', {}, { render: true });
}

describe('<Table />', () => {
  it('renders bordered', () => {
    const wrapper = unwrap(<Table bordered>Bordered</Table>);

    expect(wrapper.find('table').prop('className')).toMatch('table_bordered');
  });

  it('renders compact', () => {
    const wrapper = unwrap(<Table compact>Compact</Table>);

    expect(wrapper.find('table').prop('className')).toMatch('table_compact');
  });

  it('renders fixed', () => {
    const wrapper = unwrap(<Table fixed>Fixed</Table>);

    expect(wrapper.find('table').prop('className')).toMatch('table_fixed');
  });

  it('renders horizontal', () => {
    const wrapper = unwrap(<Table horizontal>Horizontal</Table>);

    expect(wrapper.find('table').prop('className')).toMatch('table_horizontal');
  });

  it('renders loading', () => {
    const wrapper = unwrap(<Table loading>Loading</Table>);

    expect(wrapper.find('table').prop('className')).toMatch('table_loading');
  });

  it('renders striped', () => {
    const wrapper = unwrap(<Table striped>Striped</Table>);

    expect(wrapper.find('table').prop('className')).toMatch('table_striped');
  });

  it('renders transparent', () => {
    const wrapper = unwrap(<Table transparent>Transparent</Table>);

    expect(wrapper.find('table').prop('className')).toMatch('table_transparent');
  });

  it('renders vertical', () => {
    const wrapper = unwrap(<Table vertical>Vertical</Table>);

    expect(wrapper.find('table').prop('className')).toMatch('table_vertical');
  });

  it('renders middleAlign', () => {
    const wrapper = unwrap(<Table middleAlign>Vertical</Table>);

    expect(wrapper.find('table').prop('className')).toMatch('content_middle_align');
  });
});

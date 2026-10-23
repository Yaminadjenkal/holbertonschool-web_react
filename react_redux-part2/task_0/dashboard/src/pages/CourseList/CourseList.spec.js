import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import CourseList from './CourseList';
import store from '../../app/store';

const renderCourseList = () =>
  render(
    <Provider store={store}>
      <CourseList />
    </Provider>
  );

test('renders course list table', () => {
  renderCourseList();

  expect(
    screen.getByRole('table')
  ).toBeInTheDocument();
});

test('renders course list heading', () => {
  renderCourseList();

  expect(
    screen.getByRole('heading', {
      name: /course list/i,
    })
  ).toBeInTheDocument();
});

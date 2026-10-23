import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../../app/store';
import CourseList from './CourseList';

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

test('renders no course available message', () => {
  renderCourseList();

  expect(
    screen.getByText(/no course available yet/i)
  ).toBeInTheDocument();
});

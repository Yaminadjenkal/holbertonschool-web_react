import coursesReducer, {
  selectCourse,
  unSelectCourse,
} from '../courses/coursesSlice';

describe('coursesSlice', () => {
  test('should select a course', () => {
    const state = {
      courses: [
        {
          id: 1,
          name: 'ES6',
          credit: 60,
          isSelected: false,
        },
      ],
    };

    const result = coursesReducer(
      state,
      selectCourse(1)
    );

    expect(result.courses[0].isSelected).toBe(true);
  });

  test('should unselect a course', () => {
    const state = {
      courses: [
        {
          id: 1,
          name: 'ES6',
          credit: 60,
          isSelected: true,
        },
      ],
    };

    const result = coursesReducer(
      state,
      unSelectCourse(1)
    );

    expect(result.courses[0].isSelected).toBe(false);
  });
});

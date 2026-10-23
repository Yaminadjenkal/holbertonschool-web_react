import { useSelector, useDispatch } from 'react-redux';
import CourseListRow from './CourseListRow/CourseListRow';
import WithLogging from '../../components/HOC/WithLogging';
import {
  selectCourse,
  unSelectCourse,
} from '../../features/courses/coursesSlice';

function CourseList() {
  const dispatch = useDispatch();

  const { courses } = useSelector(
    (state) => state.courses
  );

  const onChangeRow = (id, checked) => {
    if (checked) {
      dispatch(selectCourse(id));
    } else {
      dispatch(unSelectCourse(id));
    }
  };

  return (
    <div className='course-list-container overflow-x-auto'>
      <table id="CourseList">
        {courses.length === 0 ? (
          <tbody>
            <CourseListRow
              textFirstCell="No course available yet"
            />
          </tbody>
        ) : (
          <>
            <thead>
              <CourseListRow
                textFirstCell="Available courses"
                isHeader={true}
              />
              <CourseListRow
                textFirstCell="Course name"
                textSecondCell="Credit"
                isHeader={true}
              />
            </thead>

            <tbody>
              {courses.map((course) => (
                <CourseListRow
                  key={course.id}
                  id={course.id}
                  changeRow={onChangeRow}
                  textFirstCell={course.name}
                  textSecondCell={course.credit}
                />
              ))}
            </tbody>
          </>
        )}
      </table>
    </div>
  );
}

export default WithLogging(CourseList);

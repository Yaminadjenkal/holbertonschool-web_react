function CourseListRow({
  id,
  isHeader = false,
  textFirstCell = '',
  textSecondCell = null,
  changeRow = () => {},
}) {
  const isHeaderRow = isHeader || textSecondCell === null;

  if (isHeaderRow) {
    return (
      <tr className="bg-table-header opacity-[66%]">
        {textSecondCell === null ? (
          <th className="border border-gray-400" colSpan="2">
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className="border border-gray-400">{textFirstCell}</th>
            <th className="border border-gray-400">{textSecondCell}</th>
          </>
        )}
      </tr>
    );
  }

  return (
    <tr className="bg-table-rows opacity-45">
      <td className="border border-gray-400 pl-2">
        <input
          type="checkbox"
          onChange={(e) =>
            changeRow(id, e.target.checked)
          }
        />
        {' '}
        {textFirstCell}
      </td>
      <td className="border border-gray-400 pl-2">
        {textSecondCell}
      </td>
    </tr>
  );
}

export default CourseListRow;

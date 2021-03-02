export function TableData({ headers, body }) {
  return (
    <table>
      <thead>
        {headers.map((array, i) => {
          return (
            <tr key={i}>
              {array.map((el, i) => (
                <th key={i}>{el}</th>
              ))}
            </tr>
          );
        })}
      </thead>
      <tbody>
        {body.map((array, i) => {
          return (
            <tr key={i}>
              {array.map((el, i) => (
                <td key={i}>{el}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

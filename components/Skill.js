const Skill = ({ data, id }) => {
  // console.log(data);
  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{data.join(', ')}</td>
        <style jsx>{`
          td:first-child {
            font-weight: bold;
          }
        `}</style>
      </tr>
    </tbody>
  );
};
export default Skill;

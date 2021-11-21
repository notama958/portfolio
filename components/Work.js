const Work = ({ item }) => {
  const calcTime = () => {
    let yEnd = parseInt(item.to.split('/')[1]);
    let mEnd = parseInt(item.to.split('/')[0]);
    let yStart = parseInt(item.from.split('/')[1]);
    let mStart = parseInt(item.from.split('/')[0]);

    let len = Math.abs(mEnd - mStart) + 1 + (yEnd - yStart) * 12;
    return len;
  };
  return (
    <tr>
      <td>{item.title}</td>
      <td>
        {item.from}-{item.to} ({calcTime()} months)
      </td>
      <td>{item.desc}</td>
    </tr>
    
  );
};
export default Work;

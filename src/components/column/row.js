function row({ text, classMode }) {
  return (
    <tr>
      <td className={classMode}>{text}</td>
    </tr>
  );
}

export default row;

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contatc
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="enter text"
      />
    </label>
  );
};
export default Filter;

import "./filter.scss";

function FilterPanda({ changeFilter }) {
  return (
    <div className='filter-panda'>
      <label>Filter string: </label>
      <input type='text' name='filter' onChange={changeFilter} />
    </div>
  );
}

export default FilterPanda;

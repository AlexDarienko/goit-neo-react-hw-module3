import css from './SearchBox.module.css';

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={css.wrapper}>
      <label>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={e => onFilterChange(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;

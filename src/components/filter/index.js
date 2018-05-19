import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filters, onFilterChange }) =>
  <div>
    {filters.map((filter) =>
      (
        <div key={filter.id} className="filter">
          <span className="filter-category">{filter.category}</span>
          {
            filter.options.map((option) =>
              (
                <div key={option.id} className="filter-option">
                  <input checked={option.isApplied} type="checkbox" onChange={(event) => onFilterChange(filter.id, option.id, event.target.checked)}/>
                  <span className="filter-option-label">{option.label}</span>
                </div>
              )
            )
          }
        </div>
      )
    )}
  </div>;

Filter.defaultProps = {
  onFilterChange: () => { },
};

Filter.propTypes = {
  filters: PropTypes.array.isRequired,
  onFilterChange: PropTypes.func,
};

export default Filter;

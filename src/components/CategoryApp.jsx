import { useState } from "react";
import PropTypes from 'prop-types'

function CategoryApp({ setCategories }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica si el inputValue no está vacío antes de agregar una categoría
    if (inputValue.trim() !== "") {
      setCategories((prevCategories) => [inputValue.trim(),...prevCategories]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2 p-5">
      <input
        className="w-100 border border-3 border-danger p-3 rounded-pill"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a category"
      />
    </form>
  );
}

CategoryApp.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default CategoryApp;

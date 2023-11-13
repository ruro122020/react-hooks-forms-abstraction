import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: 'Henry',
    admin: false
  })

  function handleChange(event) {
    const name = event.target.value
    let value = event.target.value
    if (event.target.type === 'checkbox') {
      value = event.target.checked
    }
    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={formData.firstName} />
      <input type="text" onChange={handleChange} value={formData.lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

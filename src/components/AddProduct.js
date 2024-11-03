import React, { useEffect, useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const handleData = async (e) => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }
    // return false;
    e.preventDefault();
    console.log({ name, price, category, company });
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: "POST",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "16px",
      }}
    >
      <h2
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}
      >
        Add Product
      </h2>

      <p
        // onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        {/* Product Name */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add Product Name"
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            outline: "none",
          }}
        />
        {error && !name && <span>Invalid Name</span>}
        {/* Product Price */}
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter Product Price"
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            outline: "none",
          }}
        />
        {error && !price && <span>Invalid Name</span>}
        {/* Product Category */}
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter Product Category"
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            outline: "none",
          }}
        />
        {error && !category && <span>Invalid Name</span>}

        {/* Product Company */}
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Enter Product Company"
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            outline: "none",
          }}
        />
        {error && !company && <span>Invalid Name</span>}
        {/* Submit Button */}
        <button
          onClick={handleData}
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </p>
    </div>
  );
};

export default AddProduct;

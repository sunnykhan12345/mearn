import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [getdata, setGetData] = useState([]);
  const pro = async () => {
    try {
      const store = await fetch("http://localhost:5000/products");
      const data = await store.json();
      setGetData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    pro();
  }, []);
  return (
    <table
      style={{
        marginLeft: "20px",
        marginRight: "20px",
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <thead>
        <tr style={{ backgroundColor: "#f2f2f2", color: "#333" }}>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              fontWeight: "bold",
            }}
          >
            Product Name
          </th>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              fontWeight: "bold",
            }}
          >
            Product Price
          </th>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              fontWeight: "bold",
            }}
          >
            Product Category
          </th>
          <th
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              fontWeight: "bold",
            }}
          >
            Product Company
          </th>
        </tr>
      </thead>
      <tbody>
        {getdata?.map((item, index) => (
          <tr
            key={index}
            style={{
              textAlign: "center",
              border: "1px solid #ddd",
              backgroundColor: index % 2 === 0 ? "#fafafa" : "#fff", // Alternating row colors
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#f1f1f1")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor =
                index % 2 === 0 ? "#fafafa" : "#fff")
            }
          >
            <td style={{ padding: "12px", border: "1px solid #ddd" }}>
              {item.name}
            </td>
            <td style={{ padding: "12px", border: "1px solid #ddd" }}>
              {item.price}
            </td>
            <td style={{ padding: "12px", border: "1px solid #ddd" }}>
              {item.category}
            </td>
            <td style={{ padding: "12px", border: "1px solid #ddd" }}>
              {item.company}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;

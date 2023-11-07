// import React, { useState, useEffect } from "react";

// export default function ProductSearch() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [products, setProducts] = useState([]);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products`)
//       .then((response) => response.json())
//       .then((data) => {
//         const filteredProducts = data.filter((product) =>
//           product.title.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         setProducts(filteredProducts);
//       });
//   }, [searchTerm]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={searchTerm}
//         onChange={handleSearchChange}
//       />
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Image</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td>{product.title}</td>
//               <td>
//                 <img src={product.image} alt={product.title} width="50" />
//               </td>
//               <td>${product.price}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

export default function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(filteredProducts);
      });
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div key={product.id} style={{ margin: "5px", textAlign: "center", backgroundColor: "white", color: "black", padding: "5px", border: "4px solid black"}}>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} width="150" />
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
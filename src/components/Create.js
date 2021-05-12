// package import
import axios from "axios";
import { useState } from "react";

// fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Create = ({ server }) => {
    // states
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("brand", brand);
        formData.append("price", price);
        formData.append("quantity", quantity);
        try {
            if (name && brand && price && quantity) {
                const response = await axios.post(
                    `${server}/product/create`,
                    formData
                );
                console.log(response.data);
            } else {
                alert("Merci de remplir tous les champs !");
            }
        } catch (error) {
            console.log({ error: error.message });
            console.log(error);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Product name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <button type="submit">
                    <FontAwesomeIcon icon="plus" color="#21624b" />
                </button>
            </form>
        </div>
    );
};

export default Create;

// package import
import axios from "axios";
import { useState, useEffect } from "react";

// import components
import Create from "../components/Create";

// fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = ({ server }) => {
    // states
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // data refrech
    useEffect(({ server }) => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${server}/product`);

                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log({ error: error.message });
            }
        };
        fetchData();
    }, []);

    // delete a product.
    const handleDelete = async (index, id) => {
        let productsCopy = [...data];
        productsCopy.splice(productsCopy.indexOf(productsCopy[index], 1));
        setData(productsCopy);
        try {
            const response = await axios.get(`${server}/product/del/${id}`);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return isLoading ? (
        <div>Chargement en cours</div>
    ) : (
        <div className="container">
            {data.map((elem, index) => {
                return (
                    <div className="test">
                        <div>{elem.product_name}</div>
                        <div>{elem.product_brand}</div>
                        <div>{elem.product_price} €</div>
                        <div>{elem.product_quantity}</div>
                        <div className="icon">
                            <FontAwesomeIcon
                                style={{ marginRight: "30" }}
                                icon="edit"
                                color="#fbfaf2;"
                            />
                            <FontAwesomeIcon
                                icon="trash-alt"
                                color="#fbfaf2;"
                                onClick={() => handleDelete(index, elem._id)}
                            />
                        </div>
                    </div>
                );
            })}
            <div>
                <Create server={server} />
            </div>
        </div>
    );
};

export default Home;

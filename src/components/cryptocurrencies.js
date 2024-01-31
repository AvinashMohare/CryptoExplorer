import { useEffect, useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Row, Card, Col, Input } from "antd";
import millify from "millify";
import { Link } from "react-router-dom";

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState([]);

    //Taking searchTerm from the input and checking by iterating the list if the name contains the searchTerm or not
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        const filteredData = cryptosList?.data?.coins.filter((coin) =>
            coin.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setCryptos(filteredData);
    }, [cryptosList, searchTerm]);

    if (isFetching) return "Loading...";

    return (
        <>
            {!simplified && (
                <div className="search-crypto">
                    <Input
                        placeholder="Search Cryptocurrency"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            )}

            <Row gutter={[32, 32]} className="crypto-card-container">
                {cryptos?.map((currency) => (
                    <Col
                        xs={24}
                        sm={12}
                        lg={6}
                        className="crypto-card"
                        key={currency.id}
                    >
                        <Link to={`/crypto/${currency.id}`}>
                            <Card
                                title={`${currency.rank}. ${currency.name}`}
                                extra={
                                    <img
                                        src={currency.iconUrl}
                                        className="crypto-image"
                                    />
                                }
                                hoverable
                            >
                                <p>Price : {millify(currency.price)}</p>
                                <p>
                                    Market Cap : {millify(currency.marketCap)}
                                </p>
                                <p>Daily Change : {millify(currency.change)}</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Cryptocurrencies;

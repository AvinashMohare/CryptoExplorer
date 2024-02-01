import { Col, Row } from "antd";
import Statistic from "antd/es/statistic/Statistic";
import Typography from "antd/es/typography/Typography";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import Cryptocurrencies from "./cryptocurrencies";
import { Link } from "react-router-dom";
import News from "./news";

const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(10);

    var globalStats = data?.data.stats;

    if (isFetching) return "Loading...";
    console.log(data);
    return (
        <>
            <Title level={2} className="heading">
                Global Crypto Stats
            </Title>

            <Row>
                <Col span={12}>
                    <Statistic
                        title="Total Cryptocurrencies"
                        value={globalStats.totalCoins}
                    />
                </Col>

                <Col span={12}>
                    <Statistic
                        title="Total Exchanges"
                        value={millify(globalStats.totalExchanges)}
                    />
                </Col>

                <Col span={12}>
                    <Statistic
                        title="Total Market Cap"
                        value={millify(globalStats.totalMarketCap)}
                    />
                </Col>

                <Col span={12}>
                    <Statistic
                        title="Total 24hr Volume"
                        value={millify(globalStats.total24hVolume)}
                    />
                </Col>

                <Col span={12}>
                    <Statistic
                        title="Total Markets"
                        value={millify(globalStats.totalMarkets)}
                    />
                </Col>
            </Row>

            <div className="home-heading-container">
                <Title level={2} className="home-title">
                    Top 10 Cryptocurrencies in the world
                </Title>
                <Title level={4} className="show-more">
                    <Link to="/cryptocurrencies">Show More</Link>
                </Title>
            </div>
            <Cryptocurrencies simplified={true} />

            <div className="home-heading-container">
                <Title level={2} className="home-title">
                    Latest Crypto News
                </Title>
                <Title level={4} className="show-more">
                    <Link to="/news">Show More</Link>
                </Title>
            </div>
            <News simplified={true} />
        </>
    );
};

export default Homepage;

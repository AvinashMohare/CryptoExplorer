import React from "react";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { Typography, Select, Row, Col, Card, Avatar } from "antd";
import Loader from "./loader";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
    const count = simplified ? 5 : 50;
    const { data: cryptoNews, isLoading } = useGetCryptoNewsQuery(count);

    console.log(cryptoNews);
    if (isLoading) {
        return <Loader />;
    }

    if (!cryptoNews || cryptoNews.length === 0) {
        return <p>No news available.</p>;
    }

    return (
        <Row gutter={[24, 24]}>
            {cryptoNews.map((news) => (
                <Col xs={24} sm={12} lg={8} key={news.id}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>
                                    {news.title}
                                </Title>
                                <img src="http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg" />
                            </div>
                            <p>
                                {news.description > 100
                                    ? `${news.description.substring(0, 100)}...`
                                    : news.description}
                            </p>
                            <div className="provider-container">
                                <Avatar
                                    src="https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News"
                                    alt=""
                                />
                                <Text>
                                    {moment(news.date).startOf("ss").fromNow()}
                                </Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default News;

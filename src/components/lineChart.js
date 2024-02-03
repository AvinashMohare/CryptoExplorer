import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
import moment from "moment";

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        const coinPrice = [];
        const coinTimestamp = [];

        for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
            coinPrice.push(coinHistory?.data?.history[i].price);

            // Convert Unix timestamp to milliseconds and then format with moment
            const formattedTimestamp = moment(
                coinHistory?.data?.history[i].timestamp * 1000
            ).format("MMM D, YYYY HH:mm:ss");
            coinTimestamp.push(formattedTimestamp);
        }

        const data = {
            labels: coinTimestamp,
            datasets: [
                {
                    label: "Price In USD",
                    data: coinPrice,
                    fill: false,
                    backgroundColor: "#0071bd",
                    borderColor: "#0071bd",
                },
            ],
        };

        setChartData(data);
    }, [coinHistory]);

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <>
            <Row className="chart-header">
                <Title level={2} className="chart-title">
                    {coinName} Price Chart
                </Title>
                <Col className="price-container">
                    <Title level={5} className="price-change">
                        Change: {coinHistory?.data?.change}%
                    </Title>
                    <Title level={5} className="current-price">
                        Current {coinName} Price: $ {currentPrice}
                    </Title>
                </Col>
            </Row>
            <Line data={chartData} options={options} />
        </>
    );
};

export default LineChart;

import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Navbar from "./components/navbar";
import Exchanges from "./components/exchanges";
import Homepage from "./components/homepage";

import Cryptocurrencies from "./components/cryptocurrencies";
import CryptoDetails from "./components/cryptoDetails";
import News from "./components/news";

function App() {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>

            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route path="/" element={<Homepage />} />

                            <Route path="/exchanges" element={<Exchanges />} />

                            <Route
                                path="/cryptocurrencies"
                                element={<Cryptocurrencies />}
                            />

                            <Route
                                path="/crypto/:coinId"
                                element={<CryptoDetails />}
                            />

                            <Route path="/news" element={<News />} />
                        </Routes>
                    </div>
                </Layout>

                <div className="footer">
                    <Typography.Title
                        level={5}
                        style={{ color: "white", textAlign: "center" }}
                    >
                        Cryptoverse <br></br>
                        All rights reserved
                    </Typography.Title>

                    <Space>
                        <Link to="/">
                            <Typography.Text style={{ color: "white" }}>
                                Home
                            </Typography.Text>
                        </Link>
                        <Link to="/exchanges">
                            <Typography.Text style={{ color: "white" }}>
                                Exchanges
                            </Typography.Text>
                        </Link>
                        <Link to="/news">
                            <Typography.Text style={{ color: "white" }}>
                                News
                            </Typography.Text>
                        </Link>
                    </Space>
                </div>
            </div>
        </div>
    );
}

export default App;

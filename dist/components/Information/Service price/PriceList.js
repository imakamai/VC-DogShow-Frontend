var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Navbar from "../../NavBar comp/Navbar";
const PriceList = () => {
    const [prices, setPrices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchPrices = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield fetch("https://ksrs.rs/cenovnik");
                if (!response.ok) {
                    throw new Error("Failed to fetch price list");
                }
                const html = yield response.text();
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");
                const rows = Array.from(doc.querySelectorAll("table tr"));
                const priceData = rows.slice(1).map((row) => {
                    var _a, _b, _c, _d;
                    const cells = row.querySelectorAll("td");
                    return {
                        service: ((_b = (_a = cells[0]) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || "",
                        price: ((_d = (_c = cells[1]) === null || _c === void 0 ? void 0 : _c.textContent) === null || _d === void 0 ? void 0 : _d.trim()) || "",
                    };
                });
                setPrices(priceData);
            }
            catch (err) {
                setError(err instanceof Error ? err.message : String(err));
            }
            finally {
                setLoading(false);
            }
        });
        fetchPrices();
    }, []);
    if (loading)
        return _jsx("p", { style: { textAlign: "center" }, children: "Loading..." });
    if (error)
        return _jsxs("p", { style: { textAlign: "center" }, children: ["Error: ", error] });
    if (prices.length === 0)
        return _jsx("p", { style: { textAlign: "center" }, children: "Currently not available" });
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs("div", { style: { maxWidth: "800px", margin: "0 auto", padding: "20px", textAlign: "center" }, children: [_jsx("h2", { children: "Price List" }), _jsxs("table", { style: { width: "100%", borderCollapse: "collapse", textAlign: "center" }, children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { style: { border: "1px solid #ddd", padding: "8px" }, children: "Service" }), _jsx("th", { style: { border: "1px solid #ddd", padding: "8px" }, children: "Price" })] }) }), _jsx("tbody", { children: prices.map((item, index) => (_jsxs("tr", { children: [_jsx("td", { style: { border: "1px solid #ddd", padding: "8px" }, children: item.service }), _jsx("td", { style: { border: "1px solid #ddd", padding: "8px" }, children: item.price })] }, index))) })] })] })] }));
};
export default PriceList;

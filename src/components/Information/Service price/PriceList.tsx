import React, { useEffect, useState } from "react";
import Navbar from "../../NavBar comp/Navbar";

interface PriceItem {
    service: string;
    price: string;
}

const PriceList: React.FC = () => {
    const [prices, setPrices] = useState<PriceItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const response = await fetch("https://ksrs.rs/cenovnik");
                if (!response.ok) {
                    throw new Error("Failed to fetch price list");
                }
                const html = await response.text();

                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");
                const rows = Array.from(doc.querySelectorAll("table tr"));

                const priceData: PriceItem[] = rows.slice(1).map((row) => {
                    const cells = row.querySelectorAll("td");
                    return {
                        service: cells[0]?.textContent?.trim() || "",
                        price: cells[1]?.textContent?.trim() || "",
                    };
                });

                setPrices(priceData);
            } catch (err) {
                setError(err instanceof Error ? err.message : String(err));
            } finally {
                setLoading(false);
            }
        };

        fetchPrices();
    }, []);

    if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
    if (error) return <p style={{ textAlign: "center" }}>Error: {error}</p>;
    if (prices.length === 0) return <p style={{ textAlign: "center" }}>Currently not available</p>;

    return (
        <>
            <Navbar />
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", textAlign: "center" }}>
                <h2>Price List</h2>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}>
                    <thead>
                    <tr>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Service</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {prices.map((item, index) => (
                        <tr key={index}>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.service}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.price}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default PriceList;

// import React, { useEffect, useState } from "react";
//
// interface PriceItem {
//     service: string;
//     price: string;
// }
//
// const PriceList: React.FC = () => {
//     const [prices, setPrices] = useState<PriceItem[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");
//
//     useEffect(() => {
//         const fetchPrices = async () => {
//             try {
//                 const response = await fetch("https://ksrs.rs/cenovnik");
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch price list");
//                 }
//                 const html = await response.text();
//
//
//                 const parser = new DOMParser();
//                 const doc = parser.parseFromString(html, "text/html");
//                 const rows = Array.from(doc.querySelectorAll("table tr"));
//
//                 const priceData: PriceItem[] = rows.slice(1).map((row) => {
//                     const cells = row.querySelectorAll("td");
//                     return {
//                         service: cells[0]?.textContent?.trim() || "",
//                         price: cells[1]?.textContent?.trim() || "",
//                     };
//                 });
//
//                 setPrices(priceData);
//             } catch (err) {
//                 setError(err instanceof Error ? err.message : String(err));
//             } finally {
//                 setLoading(false);
//             }
//         };
//
//         fetchPrices();
//     }, []);
//
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;
//
//     return (
//         <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
//             <h2>Price List</h2>
//             <table style={{ width: "100%", borderCollapse: "collapse" }}>
//                 <thead>
//                 <tr>
//                     <th style={{ border: "1px solid #ddd", padding: "8px" }}>Service</th>
//                     <th style={{ border: "1px solid #ddd", padding: "8px" }}>Price</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {prices.map((item, index) => (
//                     <tr key={index}>
//                         <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.service}</td>
//                         <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.price}</td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
//
// export default PriceList;
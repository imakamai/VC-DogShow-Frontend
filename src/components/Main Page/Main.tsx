//

import React from "react";
import dogsImg from "../../img/main/camilo-fierro-z7rcwqCi77s-unsplash.jpg";
import agilityImg from "../../img/main/preillumination-seth-SLJn4Cpy0gI-unsplash.jpg";

const MainPage: React.FC = () => (
    <div style={{
        background: "#242322",
        minHeight: "100vh",
        padding: "40px 0",
        fontFamily: "Inter, Arial, sans-serif"
    }}>
        <div style={{
            background: "#fff",
            width: "90%",
            maxWidth: 900,
            margin: "0 auto",
            borderRadius: 0,
            padding: "0 0 40px 0",
            boxSizing: "border-box"
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                padding: "30px 0 0 32px"
            }}>
                <div style={{
                    width: 60,
                    height: 32,
                    background: "#CFCBC0",
                    borderRadius: "50%/40%",
                    marginRight: 20
                }} />
                <nav style={{
                    background: "#CFCBC0",
                    borderRadius: "0 0 32px 32px",
                    display: "flex",
                    flex: 1,
                    alignItems: "center",
                    height: 48,
                    position: "relative",
                    zIndex: 2
                }}>
                    {["Log in", "Sign up", "Forms", "Services", "FCI Standards", "News", "Contact"].map((label, idx) => (
                        <a
                            key={label}
                            href="#"
                            style={{
                                color: "#fff",
                                textDecoration: "none",
                                margin: "0 18px",
                                fontWeight: 400,
                                fontSize: 16,
                                lineHeight: "48px",
                                letterSpacing: 0.2,
                                ...(idx === 0 ? { marginLeft: 32 } : {})
                            }}
                        >
                            {label}
                        </a>
                    ))}
                </nav>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                margin: "30px 40px 0 40px"
            }}>
                <div style={{
                    position: "relative",
                    width: 370,
                    height: 210,
                    flexShrink: 0
                }}>
                    <svg
                        width={370}
                        height={210}
                        style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
                    >
                        <ellipse cx="180" cy="100" rx="150" ry="87" stroke="#CFCBC0" strokeWidth="2" fill="none" />
                        <polyline points="60,30 300,40 100,200 350,170" stroke="#CFCBC0" strokeWidth="2" fill="none" />
                        <polyline points="80,180 200,10 320,180" stroke="#CFCBC0" strokeWidth="2" fill="none" />
                    </svg>
                    <img
                        src={dogsImg}
                        alt="Group of dogs in a scenic setting"
                        style={{
                            width: 320,
                            height: 180,
                            objectFit: "cover",
                            borderRadius: 36,
                            position: "absolute",
                            left: 25,
                            top: 15,
                            zIndex: 1,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                        }}
                    />
                </div>
                <div style={{
                    background: "linear-gradient(145deg, #CFCBC0 60%, #9B8772 100%)",
                    borderRadius: 36,
                    width: 340,
                    minHeight: 180,
                    marginLeft: 30,
                    padding: "24px 26px",
                    boxSizing: "border-box",
                    color: "#222",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                }}>
                    <div style={{
                        borderBottom: "1px solid #7C7263",
                        fontWeight: 500,
                        fontSize: 18,
                        marginBottom: 10,
                        paddingBottom: 4,
                        letterSpacing: 0.2
                    }}>About us</div>
                    <div style={{
                        fontSize: 15,
                        lineHeight: 1.3
                    }}>
                        We are dedicated to providing the best services for dog enthusiasts, including training, agility courses, and expert advice. Join us to explore more about our offerings and community.
                    </div>
                </div>
            </div>
        </div>
        <div style={{
            display: "flex",
            justifyContent: "center",
            gap: 48,
            marginTop: 48,
            flexWrap: "wrap"
        }}>
            <div style={{
                background: "linear-gradient(145deg, #CFCBC0 70%, #9B8772 100%)",
                borderRadius: 36,
                width: 340,
                minHeight: 220,
                padding: "24px 26px",
                color: "#222",
                boxShadow: "0 2px 8px rgba(0,0,0,0.10)"
            }}>
                <div style={{
                    borderBottom: "1px solid #7C7263",
                    fontWeight: 500,
                    fontSize: 17,
                    marginBottom: 10,
                    paddingBottom: 4
                }}>
                    What can we do for you?
                </div>
                <div style={{ fontSize: 15, lineHeight: 1.3 }}>
                    We offer agility training, expert consultations, and a community for dog lovers to connect and grow.
                </div>
            </div>
            <div style={{
                width: 340,
                minHeight: 220,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <img
                    src={agilityImg}
                    alt="Dog performing an agility course"
                    style={{
                        width: 320,
                        height: 180,
                        objectFit: "cover",
                        borderRadius: "36px 80px 80px 36px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.10)"
                    }}
                />
            </div>
        </div>
        <div style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 24
        }}>
            <div style={{
                background: "linear-gradient(145deg, #CFCBC0 70%, #9B8772 100%)",
                borderRadius: 36,
                width: 340,
                minHeight: 140,
                padding: "24px 26px",
                color: "#222",
                boxShadow: "0 2px 8px rgba(0,0,0,0.10)"
            }}>
                <div style={{
                    borderBottom: "1px solid #7C7263",
                    fontWeight: 500,
                    fontSize: 17,
                    marginBottom: 10,
                    paddingBottom: 4
                }}>
                    News
                </div>
                <div style={{ fontSize: 15, lineHeight: 1.3 }}>
                    Stay updated with the latest news and events in the dog training world.
                </div>
            </div>
        </div>
        <div style={{
            background: "linear-gradient(145deg, #CFCBC0 60%, #9B8772 100%)",
            borderRadius: "36px 36px 0 0",
            width: "90%",
            maxWidth: 900,
            minHeight: 60,
            margin: "56px auto 0 auto",
            padding: "22px 34px",
            color: "#222",
            fontSize: 17,
            boxSizing: "border-box"
        }}>
            Contact
        </div>
    </div>
);

export default MainPage;

// import dogsImg from "../../img/main/camilo-fierro-z7rcwqCi77s-unsplash.jpg";
// import agilityImg from "../../img/main/preillumination-seth-SLJn4Cpy0gI-unsplash.jpg";
//
// const Main: React.FC = () => (
//     <div style={{
//         background: "#242322",
//         minHeight: "100vh",
//         padding: "40px 0",
//         fontFamily: "Inter, Arial, sans-serif",
//         boxSizing: "border-box",
//         overflowY: "auto",
//     }}>
//         <div style={{
//             background: "#fff",
//             width: "90%",
//             maxWidth: 900,
//             margin: "0 auto",
//             borderRadius: 0,
//             paddingBottom: 40,
//             boxSizing: "border-box",
//             position: "relative",
//             boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
//         }}>
//             {/* Header */}
//             <div style={{
//                 padding: "20px 0 0 32px",
//                 position: "relative",
//                 zIndex: 1,
//             }}>
//                 <div style={{
//                     fontSize: 16,
//                     fontWeight: 500,
//                     color: "#333",
//                     marginBottom: 10,
//                 }}>
//                     Frame 3
//                 </div>
//                 <div style={{
//                     width: 100,
//                     height: 50,
//                     background: "#CFCBC0",
//                     borderRadius: "50%/40%",
//                     position: "absolute",
//                     left: 32,
//                     top: 50,
//                     zIndex: 2,
//                 }} />
//                 <nav style={{
//                     background: "#CFCBC0",
//                     borderRadius: "0 0 32px 32px",
//                     display: "flex",
//                     alignItems: "center",
//                     height: 48,
//                     position: "absolute",
//                     left: 80,
//                     top: 50,
//                     right: 0,
//                     zIndex: 1,
//                     paddingLeft: 20,
//                 }}>
//                     {["Log in", "Sign up", "Forms", "Services", "FCI Standards", "News", "Contact"].map((label) => (
//                         <a
//                             key={label}
//                             href="#"
//                             style={{
//                                 color: "#fff",
//                                 textDecoration: "none",
//                                 margin: "0 18px",
//                                 fontWeight: 400,
//                                 fontSize: 16,
//                                 lineHeight: "48px",
//                                 letterSpacing: 0.2,
//                             }}
//                         >
//                             {label}
//                         </a>
//                     ))}
//                 </nav>
//             </div>
//
//             {/* Top Section */}
//             <div style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "flex-start",
//                 margin: "100px 40px 0 40px",
//                 position: "relative",
//                 zIndex: 0,
//             }}>
//                 <div style={{
//                     position: "relative",
//                     width: 370,
//                     height: 210,
//                     flexShrink: 0,
//                 }}>
//                     <svg
//                         width={370}
//                         height={210}
//                         style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
//                     >
//                         <ellipse cx="185" cy="105" rx="150" ry="87" stroke="#CFCBC0" strokeWidth="2" fill="none" />
//                         <polyline points="60,30 300,40 100,200 350,170" stroke="#CFCBC0" strokeWidth="2" fill="none" />
//                         <polyline points="80,180 200,10 320,180" stroke="#CFCBC0" strokeWidth="2" fill="none" />
//                     </svg>
//                     <img
//                         src={dogsImg}
//                         alt="Group of dogs in a scenic setting"
//                         style={{
//                             width: 320,
//                             height: 180,
//                             objectFit: "cover",
//                             borderRadius: 36,
//                             position: "absolute",
//                             left: 25,
//                             top: 15,
//                             zIndex: 1,
//                             boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
//                         }}
//                     />
//                 </div>
//                 <div style={{
//                     background: "linear-gradient(145deg, #CFCBC0 60%, #9B8772 100%)",
//                     borderRadius: 36,
//                     width: 340,
//                     minHeight: 180,
//                     marginLeft: 30,
//                     padding: "24px 26px",
//                     boxSizing: "border-box",
//                     color: "#222",
//                     boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
//                 }}>
//                     <div style={{
//                         borderBottom: "1px solid #7C7263",
//                         fontWeight: 500,
//                         fontSize: 18,
//                         marginBottom: 10,
//                         paddingBottom: 4,
//                         letterSpacing: 0.2,
//                     }}>
//                         About us
//                     </div>
//                     <div style={{
//                         fontSize: 15,
//                         lineHeight: 1.3,
//                     }}>
//                         We are dedicated to providing the best services for dog enthusiasts, including training, agility courses, and expert advice.
//                     </div>
//                 </div>
//             </div>
//
//             {/* Middle Section */}
//             <div style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 gap: 48,
//                 marginTop: 48,
//                 flexWrap: "wrap",
//                 padding: "0 40px",
//             }}>
//                 <div style={{
//                     background: "linear-gradient(145deg, #CFCBC0 70%, #9B8772 100%)",
//                     borderRadius: 36,
//                     width: 340,
//                     minHeight: 220,
//                     padding: "24px 26px",
//                     color: "#222",
//                     boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
//                 }}>
//                     <div style={{
//                         borderBottom: "1px solid #7C7263",
//                         fontWeight: 500,
//                         fontSize: 17,
//                         marginBottom: 10,
//                         paddingBottom: 4,
//                     }}>
//                         What can we do for you?
//                     </div>
//                     <div style={{ fontSize: 15, lineHeight: 1.3 }}>
//                         We offer agility training, expert consultations, and a community for dog lovers to connect and grow.
//                     </div>
//                 </div>
//                 <div style={{
//                     width: 340,
//                     minHeight: 220,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                 }}>
//                     <img
//                         src={agilityImg}
//                         alt="Dog performing an agility course"
//                         style={{
//                             width: 320,
//                             height: 180,
//                             objectFit: "cover",
//                             borderRadius: "36px 80px 80px 36px",
//                             boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
//                         }}
//                     />
//                 </div>
//             </div>
//
//             {/* Footer */}
//             <div style={{
//                 background: "linear-gradient(145deg, #CFCBC0 60%, #9B8772 100%)",
//                 borderRadius: "36px 36px 0 0",
//                 width: "90%",
//                 maxWidth: 900,
//                 minHeight: 60,
//                 margin: "56px auto 0 auto",
//                 padding: "22px 34px",
//                 color: "#222",
//                 fontSize: 17,
//                 boxSizing: "border-box",
//                 boxShadow: "0 -4px 15px rgba(0,0,0,0.1)",
//             }}>
//                 Contact
//             </div>
//         </div>
//     </div>
// );
//
// export default Main;
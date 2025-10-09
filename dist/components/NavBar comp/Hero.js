import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Hero = () => {
    return (_jsxs("section", { className: "flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-gray-100", children: [_jsxs("div", { className: "md:w-1/2 text-center md:text-left space-y-6", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-800", children: "Welcome to the official Dog Show website!" }), _jsx("p", { className: "text-lg text-gray-600", children: "Register your pet and become part of our dog show community." }), _jsx("button", { className: "bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition", children: "Register Dog" })] }), _jsx("div", { className: "md:w-1/2 mt-10 md:mt-0", children: _jsx("img", { src: "/dog-hero.png", alt: "Dog", className: "w-full max-w-md mx-auto" }) })] }));
};
export default Hero;

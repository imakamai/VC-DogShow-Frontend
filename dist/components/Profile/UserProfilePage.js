var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Modal, Button, Form, Input, message } from 'antd';
const UserProfilePage = () => {
    const [user, setUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    // Fetch user data
    const fetchUserData = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield api.get('/User/my');
            setUser(response.data);
        }
        catch (error) {
            message.error('Failed to fetch user data.');
        }
    });
    useEffect(() => {
        fetchUserData();
    }, []);
    // Handle update user
    const handleUpdate = (values) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setLoading(true);
            yield api.put(`/user/${user.id}`, Object.assign(Object.assign({}, user), values));
            message.success('User updated successfully.');
            setIsModalOpen(false);
            fetchUserData();
        }
        catch (error) {
            message.error('Failed to update user.');
        }
        finally {
            setLoading(false);
        }
    });
    // Handle delete user
    const handleDelete = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield api.delete(`/user/${user.id}`);
            message.success('Account deleted successfully.');
            // Redirect or handle post-deletion logic
        }
        catch (error) {
            message.error('Failed to delete account.');
        }
    });
    return (_jsxs("div", { style: { padding: '20px' }, children: [_jsx("h1", { children: "User Profile" }), user ? (_jsxs("div", { children: [_jsxs("p", { children: [_jsx("strong", { children: "Name:" }), " ", user.name] }), _jsxs("p", { children: [_jsx("strong", { children: "Last Name:" }), " ", user.lastName] }), _jsxs("p", { children: [_jsx("strong", { children: "Email:" }), " ", user.email] }), _jsxs("p", { children: [_jsx("strong", { children: "Username:" }), " ", user.username] }), _jsxs("p", { children: [_jsx("strong", { children: "Phone:" }), " ", user.phone || 'N/A'] }), _jsxs("p", { children: [_jsx("strong", { children: "Address:" }), " ", user.address || 'N/A'] }), _jsxs("p", { children: [_jsx("strong", { children: "City:" }), " ", user.city || 'N/A'] }), _jsxs("p", { children: [_jsx("strong", { children: "Postal Code:" }), " ", user.postalCode || 'N/A'] }), _jsxs("p", { children: [_jsx("strong", { children: "State:" }), " ", user.state || 'N/A'] }), _jsx(Button, { type: "primary", onClick: () => setIsModalOpen(true), style: { marginRight: '10px' }, children: "Update Profile" }), _jsx(Button, { type: "danger", onClick: handleDelete, children: "Delete Account" })] })) : (_jsx("p", { children: "Loading user data..." })), _jsx(Modal, { title: "Update Profile", open: isModalOpen, onCancel: () => setIsModalOpen(false), footer: null, children: _jsxs(Form, { layout: "vertical", initialValues: user, onFinish: handleUpdate, children: [_jsx(Form.Item, { label: "Name", name: "name", rules: [{ required: true, message: 'Please enter your name' }], children: _jsx(Input, {}) }), _jsx(Form.Item, { label: "Last Name", name: "lastName", rules: [{ required: true, message: 'Please enter your last name' }], children: _jsx(Input, {}) }), _jsx(Form.Item, { label: "Email", name: "email", rules: [{ required: true, message: 'Please enter your email' }], children: _jsx(Input, { type: "email" }) }), _jsx(Form.Item, { label: "Phone", name: "phone", children: _jsx(Input, {}) }), _jsx(Form.Item, { label: "Address", name: "address", children: _jsx(Input, {}) }), _jsx(Form.Item, { label: "City", name: "city", children: _jsx(Input, {}) }), _jsx(Form.Item, { label: "Postal Code", name: "postalCode", children: _jsx(Input, {}) }), _jsx(Form.Item, { label: "State", name: "state", children: _jsx(Input, {}) }), _jsx(Form.Item, { children: _jsx(Button, { type: "primary", htmlType: "submit", loading: loading, children: "Save Changes" }) })] }) })] }));
};
export default UserProfilePage;

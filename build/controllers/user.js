"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const createUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        response.json({
            message: "User created."
        });
    }
    catch (error) {
        response.json({ message: "Failed to create user." });
    }
});
const updateUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        response.json({
            message: "User updated."
        });
    }
    catch (error) {
        response.json({ message: "Failed to update user." });
    }
});
const deleteUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        response.json({
            message: "User deleted."
        });
    }
    catch (error) {
        response.json({ message: "Failed to delete user." });
    }
});
const getUserById = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        response.json({
            message: "User detail returned."
        });
    }
    catch (error) {
        console.log(":::::::::", JSON.stringify(error));
        response.json({ message: "Failed to return user details." });
    }
});
const getAllUsers = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        response.json({
            message: "Get all users."
        });
    }
    catch (error) {
        response.json({ message: "Failed to get all user." });
    }
});
const authenticateUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        response.json({
            message: "User authenticated."
        });
    }
    catch (error) {
        response.json({ message: "Failed to authenticate user." });
    }
});
exports.default = {
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    getAllUsers,
    authenticateUser
};

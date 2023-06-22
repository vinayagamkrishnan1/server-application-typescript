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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const user_1 = __importDefault(require("../controllers/user"));
const createUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    // userController.createUser(request, response);
    user_1.default.createUser(request, response);
});
const updateUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    user_1.default.updateUser(request, response);
});
const deleteUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    user_1.default.deleteUser(request, response);
});
const getUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    user_1.default.getUserById(request, response);
});
const getAllUsers = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    user_1.default.getAllUsers(request, response);
});
const authenticateUser = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    user_1.default.authenticateUser(request, response);
});
router.post('/create', createUser);
router.put('/update', updateUser);
router.delete('/delete', deleteUser);
router.get('/getuser', getUser);
router.get('/getallusers', getAllUsers);
router.post('/authentication', authenticateUser);
exports.default = router;

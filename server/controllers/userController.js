const APIFeatures = require("../utils/apiFeatures");
const User = require("./../models/userModel");
const hookAsync = require('./../utils/hookAsync');


exports.getAllUsers = hookAsync(async(req, res, next) => {

    const features = new APIFeatures(User.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();

    const users = await features.query;

    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
            users
        }
    })


})


exports.getUser = hookAsync(async(req, res, next) => {

    const users = await User.find();
    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
            users
        }
    })


})


exports.createUser = hookAsync(async(req, res, next) => {

    const users = await User.find();
    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
            users
        }
    })


})


exports.updateUser = hookAsync(async(req, res, next) => {

    const users = await User.find();
    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
            users
        }
    })


})

exports.deleteUser = hookAsync(async(req, res, next) => {

    const users = await User.find();
    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
            users
        }
    })


})
const db = require("../models/db");

const getUsers = async (req, res, next) => {
  try {
    const users = await db.get("users").value();
    res.send({ success: true, data: users });
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    db.get("users").push(req.body).write();
    res.send({ success: true, data: db.get("users").value() });
  } catch (error) {
    next(error);
  }
};

const updateUserPut = async (req, res, next) => {
  try {
    const user = await db
      .get("users")
      .find({ id: Number(req.params.id) })
      .assign({ ...req.body })
      .write();
    res.status(201).send({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

const updateUserPatch = async (req, res, next) => {
  try {
    const user = await db
      .get("users")
      .find({ id: Number(req.params.id) })
      .assign({ ...req.body })
      .write();
    res.status(201).send({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const user = await db
      .get("users")
      .find({ id: Number(req.params.id) })
      .value();
    db.get("users")
      .remove({ id: Number(req.params.id) })
      .write();
    res.status(201).send({ success: true, data: db.get("users").value() });
  } catch (error) {
    next(error);
  }
};

const getSingleUser = async (req, res, next) => {
  try {
    const user = await db
      .get("users")
      .find({ id: Number(req.params.id) })
      .value();
    res.status(201).send({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUserPut,
  updateUserPatch,
  deleteUser,
  getSingleUser,
};

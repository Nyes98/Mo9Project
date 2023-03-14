const router = require("express").Router();
const crypto = require("crypto-js");

const { User } = require("../models");

router.post("/regist", async (req, res) => {
  try {
    if (
      await User.findOne({
        where: { userId: req.body.registInfo.userId },
      })
    ) {
      res.send({ status: 401, msg: "already exist id" });
    } else {
      await User.create({
        userId: req.body.registInfo.userId,
        userPw: crypto.SHA256(req.body.registInfo.userPw).toString(),
        userEmail: req.body.registInfo.eamil,
      });
      res.send({ status: 200 });
    }
  } catch (err) {
    console.error(err);
    res.send({ status: 402, msg: "fail" });
  }
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  const IdData = await User.findOne({
    where: { userId: req.body.inputId },
  });
  const PwData = crypto.SHA256(req.body.inputPw).toString();

  console.log(IdData);
  console.log(PwData);
  try {
    if (!IdData) {
      res.send({ status: 400, msg: "not exist Id" });
    }
    if (IdData.userPw == PwData) {
      res.send({ status: 200, msg: "login complete" });
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;

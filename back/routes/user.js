const router = require("express").Router();
const jwt = require("jsonwebtoken");
const crypto = require("crypto-js");

const { User } = require("../models");

router.post("/regist", async (req, res) => {
  try {
    if (
      await User.findOne({
        where: { userId: req.body.registInfo.userId },
      })
    ) {
      res.send({
        status: 401,
        msg: "The ID that already exists. Please re-enter your ID",
      });
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
  try {
    if (
      await User.findOne({
        where: { userId: req.body.inputId },
      })
    ) {
      if (
        await User.findOne({
          where: {
            userPw: crypto.SHA256(req.body.inputPw).toString(),
          },
        })
      ) {
        console.log("이건된다니까");
        // res.cookie(
        //   "user_login",
        //   jwt.sign(
        //     {
        //       userId: req.body.inputId,
        //     },
        //     process.env.COOKIE_SECRET
        //   ),
        //   {
        //     // expires: new Date(Date.now() + 1000 * 60 * 300),
        //   }
        // );
        res.cookie("key", 1);
        res.end();
        // res.send({ status: 200 });
      } else {
        res.send({
          status: 401,
          msg: "Incorrect password. Please re-enter your password",
        });
      }
    } else {
      res.send({
        status: 400,
        msg: "This ID does not exist. please re-enter your ID",
      });
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;

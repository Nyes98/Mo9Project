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
        res.cookie(
          "user_login",
          jwt.sign(
            {
              userId: req.body.inputId,
            },
            process.env.COOKIE_SECRET
          ),
          { expires: new Date(Date.now() + 1000 * 60 * 30) }
        );
        res.send({ status: 200 });
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

router.post("/autologin", (req, res) => {
  if (req.cookies["user_login"]) {
    userInfo = jwt.verify(req.cookies.user_login, process.env.COOKIE_SECRET);
    res.send(userInfo);
  } else {
    res.end();
  }
});

router.post("/rememberId", (req, res) => {
  if (req.cookies["remember_ID"]) {
    userInfo = jwt.verify(req.cookies.remember_ID, process.env.COOKIE_SECRET);
    res.send(userInfo);
  } else {
    res.end();
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("user_login");
  res.end();
});

router.post("/remember", (req, res) => {
  res.cookie(
    "remember_ID",
    jwt.sign(
      {
        userId: req.body.inputId,
      },
      process.env.COOKIE_SECRET
    ),
    { expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7) }
  );
  res.end();
});

module.exports = router;

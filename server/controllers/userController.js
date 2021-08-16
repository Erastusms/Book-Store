const { User, Product, Order, Shopping_Cart } = require("../models");
const { decrypter, encrypter } = require("../helpers/endes");
const { tokenGenerator } = require("../helpers/jwt");
const { Op } = require("sequelize");
// const { upload } = require("../middlewares/multer");

class userController {
  static async show(req, res) {
    try {
      let users = await User.findAll({
        order: [["id", "ASC"]],
        include: [Product, Shopping_Cart, Order],
      });
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async showById(req, res) {
    try {
      let id = +req.UserData.id;
      let users = await User.findOne({
        include: [Product, Shopping_Cart, Order],
        where: { id },
      });
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async register(req, res) {
    try {
      let avatar = req.file.filename;
      //   let avatar = "abc";
      const { name, email, password, state, birthdate, gender } = req.body;
      let mail = email.toLowerCase();
      let findEmail = await User.findOne({
        where: { email },
      });

      if (findEmail) {
        res.status(403).json({
          message: "Email already exist!",
        });
      } else {
        // console.log("oke")
        let user = await User.create({
          name,
          email: mail,
          password,
          state,
          birthdate,
          gender,
          avatar,
          //   type,
        });
        res.status(201).json(user);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      let user = await User.findOne({
        where: { email },
      });

      if (user) {
        if (decrypter(password, user.password)) {
          let access_token = tokenGenerator(user);
          res.status(200).json({
            access_token,
          });
        } else {
          res.status(403).json({
            message: "password is Invalid!",
          });
        }
      } else {
        res.status(404).json({
          message: "user not found!",
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async update(req, res) {
    try {
      let idP = +req.UserData.id;

      const { name, email, state, birthdate, gender } = req.body;
      let mail = email.toLowerCase();
      let findEmail = await User.findAll({
        where: { id: { [Op.ne]: idP } },
      });
      let fE = findEmail.map((fe) => {
        return fe.email;
      });

      let flag = 0;
      fE.forEach((fe) => {
        if (fe === mail) {
          flag += 1;
        }
      });
      if (flag !== 0) {
        res.status(403).json({
          message: "Email already exist!",
        });
      } else {
        let result = await User.update(
          {
            name,
            email: mail,
            state,
            birthdate,
            gender,
          },
          {
            where: { id: idP },
          }
        );
        res.status(200).json({
          message: "success",
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async updatePwd(req, res) {
    try {
      let id = +req.UserData.id;
      const { password, newPwd, verPwd } = req.body;
      console.log(req.body);
      let user = await User.findOne({
        where: { id },
      });
      console.log(newPwd);
      if (decrypter(password, user.password)) {
        if (newPwd === verPwd) {
          let newPassword = encrypter(newPwd);
          console.log(newPassword);
          let upPwd = await User.update(
            {
              password: newPassword,
            },
            {
              where: { id },
            }
          );
          res.status(200).json({
            message: "password has been update",
          });
        } else {
          res.status(403).json({
            message: "new password is wrong!",
          });
        }
      } else {
        res.status(403).json({
          message: "password is Invalid!",
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = req.params.id;
      let result = await User.destroy({
        where: { id },
      });
      result === 1
        ? res.status(200).json({
            message: `id ${id} has been delete`,
          })
        : res.status(404).json({
            message: "id is not found!",
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async mult(req, res) {
    try {
      let avatar = req.file.filename;
      console.log(avatar);
      console.log(req.file);
      let id = +req.UserData.id;
      let users = await User.update(
        {
          avatar,
        },
        {
          where: { id },
        }
      );
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async upload(req, res) {
    try {
      let avatar = req.file.filename;
      let user = await User.create({
        avatar,
        //   type,
      });
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = userController;

// 安全模式创建的工厂方法函数
let UserFactory = function (role) {
  if (this instanceof UserFactory) {
    let s = new this[role]();
    return s;
  } else {
    return new UserFactory(role);
  }
};

//工厂方法函数的原型中设置素偶偶对象的构造函数
UserFactory.prototype = {
  SuperAdmin: function () {
    console.log("超级管理员");
    this.name = "超级管理员";
    this.viewPage = ["首页", "用户管理", "订单管理", "应用管理", "权限管理"];
  },

  Admin: function () {
    console.log("管理员");
    this.name = "管理员";
    this.viewPage = ["首页", "订单管理", "应用管理"];
  },

  NormalUser: function () {
    console.log("普通用户");
    this.name = "普通用户";
    this.viewPage = ["首页", "订单管理"];
  },
};

// 调用
let superAdmin = UserFactory("SuperAdmin");
let admin = UserFactory("Admin");
let normalUser = UserFactory("NormalUser");

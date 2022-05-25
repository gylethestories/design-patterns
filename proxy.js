(function () {
  // 目标对象，是真正被代理的对象

  function Subject() {}
  Subject.prototype.request = function () {};

  /**
   * 代理对象
   * @param {Object} realSubject
   */
  function Proxy(realSubject) {
    this.realSubject = readSubject;
  }
  Proxy.prototype.request = function () {
    this.realSubject.request();
  };
})();

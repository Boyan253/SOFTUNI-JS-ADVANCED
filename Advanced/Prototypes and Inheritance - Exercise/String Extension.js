(function solve() {
    String.prototype.ensureStart = function (str) {
      if (this.startsWith(str)) {
        return this + "";
      }
      return str + this;
    };
    String.prototype.ensureEnd = function (str) {
      if (this.endsWith(str)) {
        return this + "";
      }
      return this + str;
    };
    String.prototype.isEmpty = function () {
      return this.length === 0;
    };
    String.prototype.truncate = function (n) {
      if (this.length < n) {
        return this + "";
      }
      let value = this;
      while (value.length > n) {
        const index = value.lastIndexOf(" ");
        if (index > -1) {
          value = value.slice(0, index) + "...";
        } else {
          value = n >= 4 ? this.slice(0, n - 3) + "..." : ".".repeat(n);
        }
      }
      return value + ""
    };
    String.format = function (string, ...params) {
      const regExp = /{([0-9]+)}/;
      let match = regExp.exec(string)
      while (match != null) {
        if (!params[match[1]]) {
          return string;
        }
        string = string.replace(match[0], params[match[1]]);
        match = regExp.exec(string);
      }
      return string;
    };
  })();
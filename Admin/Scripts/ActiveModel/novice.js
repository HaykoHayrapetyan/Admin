Novice.prototype.insert = function () {
    this.NoviceID = sessionStorage.length;
    sessionStorage.setItem(this.NoviceID, JSON.stringify(this));
}
Novice.prototype.update = function () {
    sessionStorage.setItem(this.NoviceID, JSON.stringify(this));
}
Novice.select = function (id) {
    return JSON.parse(null == id ? sessionStorage : sessionStorage.getItem(id));
}
Novice.delete = function (id) {
    return sessionStorage.removeItem(id);
}
'use strict';
class SysUser extends UserModel {
    constructor(file, gender, isProfitA, isProfitB, isProfitC) {
        super(id, firstName, mI, lastName, loginName, password, cell, website, email);
        this.File = file;
        this.IsProfitA = isProfitA;
        this.IsProfitB = isProfitB;
        this.IsProfitC = isProfitC;
    }
}
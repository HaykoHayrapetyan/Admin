'use strict';
class UserModel extends BaseModel {
    constructor(id, firstName, mI, lastName, loginName, password, cell, website, email) {
        super(id);
        this.Firstname = firstname;
        this.MI = mI;
        this.LastName = lastName;
        this.LoginName = loginName;
        this.Password = password;
        this.Cell = cell;
        this.Website = website;
        this.Email = email;
    }
}
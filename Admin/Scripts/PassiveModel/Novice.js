//'use strict';
//class Novice extends UserModel {
//    constructor(id, firstName, mI, lastName, loginName, password, cell, website, email, age) {
//        super(id, firstName, mI, lastName, loginName, password, cell, website, email);
//        this.Age = age;
//    }
//}
function Novice(params) {
    null != params.NoviceID && (this.NoviceID = params.NoviceID);
    this.FirstName = params.FirstName;
    this.LastName = params.LastName;
    this.MiddleName = params.Middlename;
    this.Password = params.Password;
    this.CountryID = params.CountryID;
    this.PhoneNumber = params.PhoneNumber;
    this.CellNumber = params.CellNumber;
    this.Website = params.Website;
    this.Email = params.Email;
    this.Age = params.Age;
    this.State = params.State;
}
function Controller() {

}
Controller.prototype.insert = function () {
    var noviceParams = {};
    var form = $('#NoviceForm');
    noviceParams.FirstName = form.find('#FirstName').val();
    noviceParams.LastName = form.find('#LastName').val();
    noviceParams.MiddleName = form.find('#MiddleName').val();
    noviceParams.Password = form.find('#Password').val();
    noviceParams.CountryID = form.find('#CountryID').val();
    noviceParams.PhoneNumber = form.find('#PhoneNumber').val();
    noviceParams.CellNumber = form.find('#CellNumber').val();
    noviceParams.Website = form.find('#Website').val();
    noviceParams.Email = form.find('#Email').val();
    noviceParams.Age = form.find('#Age').val();
    noviceParams.State = form.find('#State').val();
    var novice = new Novice(noviceParams);
    novice.insert();
}
Controller.prototype.update = function () {
    var noviceParams = {};
    var form = $('#NoviceForm');
    noviceParams.NoviceID = form.find('#NoviceID').val();
    noviceParams.FirstName = form.find('#FirstName').val();
    noviceParams.LastName = form.find('#LastName').val();
    noviceParams.MiddleName = form.find('#MiddleName').val();
    noviceParams.Password = form.find('#Password').val();
    noviceParams.CountryID = form.find('#CountryID').val();
    noviceParams.PhoneNumber = form.find('#PhoneNumber').val();
    noviceParams.CellNumber = form.find('#CellNumber').val();
    noviceParams.Website = form.find('#Website').val();
    noviceParams.Email = form.find('#Email').val();
    noviceParams.Age = form.find('#Age').val();
    noviceParams.State = form.find('#State').val();
    var novice = new Novice(noviceParams);
    novice.update();
}
Controller.selectForm = function (id) {
    var form = $('#NoviceForm');
    var novice = Novice.select(id);
    form.find('#NoviceID').val(novice.NoviceID);
    form.find('#FirstName').val(novice.FirstName);
    form.find('#LastName').val(novice.LastName);
    form.find('#MiddleName').val(novice.MiddleName);
    form.find('#Password').val(novice.Password);
    form.find('#CountryID').val(novice.CountryID);
    form.find('#PhoneNumber').val(novice.PhoneNumber);
    form.find('#CellNumber').val(novice.CellNumber);
    form.find('#Website').val(novice.Website);
    form.find('#Email').val(novice.Email);
    form.find('#Age').val(novice.Age);
    form.find('#State').val(novice.State);
}
//Controller.selectGrid = function () {
//    var noviced = sessionStorage.novices;
//    var grid = $('#gvNovices tbody');
//    for (var i = 0; i < novices.length; i++) {

//    }
//}
function CustomerDTO(id, age, tp, sallery) {
    var _id = id;
    var _age = age;
    var _tp = tp;
    var __sallery = sallery;

    this.getCustomerID = function () {
        return _id;
    }
    this.getCustomerAge = function () {
        return _age;
    }
    this.getCustomerTP = function () {
        return _tp;
    }
    this.getCustomerSallery = function () {
        return __sallery;
    }

    this.setCustomerID = function (val) {
        _id = val;
    }
    this.setCustomerAge = function (val) {
        _age = val;
    }
    this.setCustomerTp = function (val) {
        _tp = val;
    }
    this.setCustomerSallery = function (val) {
        __sallery = val;
    }
}
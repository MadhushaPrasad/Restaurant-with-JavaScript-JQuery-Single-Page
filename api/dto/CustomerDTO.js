function CustomerDTO(nic, name, address, tp,sallery) {
    var _nic = nic;
    var _name = name;
    var _address = address;
    var __tp = tp;
    var __sallery = sallery;

    this.getCustomerNic = function () {
        return nic;
    }
    this.getCustomerName = function () {
        return _name;
    }
    this.getCustomerAddress = function () {
        return _address;
    }
    this.getCustomerTP = function () {
        return __tp;
    }
    this.getCustomerSallery = function () {
        return __sallery;
    }

    this.setCustomerNic= function (val) {
        _nic = val;
    }
    this.setCustomerName = function (val) {
        _name = val;
    }
    this.setCustomerAddress = function (val) {
        _address = val;
    }
    this.setCustomerTp = function (val) {
        __tp = val;
    }
    this.setCustomerSallery = function (val) {
        __sallery = val;
    }
}
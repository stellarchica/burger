var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    getMenu: function(cb){
        orm.selectAll("menu", function(res){
            cb(res);
        });
    },

    insertItem: function(val, cb){
        orm.insertItem("burgers", "burger_name", val, function(res){
            cb(res);
        });
    },

    // research more about Val
    updateItem: function(colVal, conditionVal, cb){
        orm.updateItem("burgers", "devoured", colVal, "id", conditionVal, function(res){
            cb(res);
        });
    },

    deleteItem: function(conditionVal, cb){
        orm.deleteItem("burgers", "id", conditionVal, function(res){
            cb(res);
        });
    }
};

module.exports = burger;
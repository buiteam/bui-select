
var $ = require('jquery'),
  expect = require('expect.js'),
  sinon = require('sinon'),
  Data = require('bui-data'),
  Select = require('../index');
require('bui-dpl/css/bs3/dpl.css');
require('bui-dpl/css/bs3/bui.css');



describe('show tag',function(){
  $('<div id="ct2"><input type="hidden" id="hide" value="txt2" name="hide"/></div>').appendTo('body');
  var data = ['选项1','选项2','选项3','选项4'],
    select = new Select.Combox({
    render:'#ct2',
    valueField : '#hide',
    elCls : 'bui-tag-follow',
    width: 500,
    //limit : 3,
    showTag : true,
    items : data
  });
  select.render();
  var picker = select.get('picker'),
    list = picker.get('list');
});

describe('suggest 只支持选择',function () {

  var store = new Data.Store({
    url : 'http://bumng.stable.alipay.net/commonlogin/nameSearch.json?_callback=?',
    proxy : {
        dataType : 'jsonp'
    },
    params: {
        _input_charset: 'utf-8',
        type: 'user'
    },
    root: 'list'
  });
  
  $('<div id="g1"><input type="hidden" id="hide1" value="24029:heping.xiang2(111)&ltheping.xiang2@alipay.com&gt" name="hide"/></div>').appendTo('body');

  var suggest = new Select.Suggest({
    render:'#g1',
    name:'keywords',
    showTag : true,
    valueField : '#hide1',
    elCls : 'bui-tag-follow',
    width : 500,
    limit : 3,
    forbitInput : true,
    store : store,
    tagFormatter : function(value){
      var arr = value.split(':');
      return arr[1];
    },
    list : {
      itemTpl : '<li>{displayName}</li>',
      textGetter : function(item){
        return item.id + ':' + item.displayName;
      },
      idField : 'id'
    }
  });
  suggest.render();

});
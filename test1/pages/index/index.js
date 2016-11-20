//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    newItemName: '',
    items:[
      {value: '美国'},
      {value: '中国', checked: 'true'},
      {value: '巴西'},
      {value: '日本'},
      {value: '英国'},
      {value: '法国'},
    ]
  },
  //事件处理函数
  checkboxChange: function(e){
    console.log('点击：' + e.detail.value);
  },
  getItemIndex: function(name){
    this.data.items.filter(function(elem,index){
      elem.value == name;
      return index;
    })
  },
  //input
  inputNewItem: function(e){

    this.setData( {
      newItemName: e.detail.value
    });
  },
  //add
  addItem: function(){
    console.log('add :' + this.data.newItemName);
    if(this.data.newItemName != ''){
      this.data.items = [{value: this.data.newItemName}].concat(this.data.items)
      this.setData({
        items: this.data.items
      })
    }
    
  },
  //delete-one
  deleteItem: function(e){
    console.log('delete :' + e.currentTarget.id);
    var cur_index = this.getItemIndex(e.currentTarget.id);
    this.data.items.splice(cur_index, 1);

  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
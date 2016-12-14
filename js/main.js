var myapp = new Vue({
  el: '#app',
  data:{
    showM: true,
    showR: true,
    showC: true,
    bicycles:[
    { gears:5, mountain:true,  road:false, cyclo:false, url:"img/bike1.png" },
    { gears:3, mountain:true,  road:false, cyclo:false, url:"img/bike2.png" },
    { gears:1, mountain:false, road:false, cyclo:true, url:"img/bike3.png" },
    { gears:1, mountain:false, road:true,  cyclo:false, url:"img/bike4.png" },
    ],
  },
})

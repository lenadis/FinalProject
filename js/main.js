var myapp = new Vue({
  el: '#app',
  data:{
    showM: true,
    showR: true,
    showC: true,
    bicycles:[
    { id:1, name:"Focus Paralane Factory Apex", price:50000,  gears:27, frame:"carbon", mountain:false,  road:false, cyclo:true, url:"img/bikes/Paralane-Factory.png" },
        
    { id:2, name:"Cervélo R3", price:50000, gears:27, frame:"carbon", mountain:false,  road:true, cyclo:false, url:"img/bikes/R3-ULT-Di2.jpg" },
        
    { id:3, name:"Cervélo R3 Disc", price:70000, gears:27, frame:"carbon", mountain:false,  road:true, cyclo:false, url:"img/bikes/R3_Disc.jpg" },
        
    { id:4, name:"Cervélo S2", price:50000, gears:27, frame:"carbon", mountain:false,  road:true, cyclo:false, url:"img/bikes/s2.jpg" },
        
    { id:5, name:"Focus Vice SL", price:50000, gears:27, frame:"carbon", mountain:true,  road:false, cyclo:false, url:"img/bikes/focusViceSL.jpg" },
        
    { id:6, name:"Focus Jam C Pro", price:50000, gears:27, frame:"carbon", mountain:true,  road:false, cyclo:false, url:"img/bikes/focusJamCPro.png" },
        
    { id:7, name:"Focus Raven LTD", price:50000, gears:27, frame:"carbon", mountain:true,  road:false, cyclo:false, url:"img/bikes/FocusRavenLTD.png" },
        
    ],
  },
})

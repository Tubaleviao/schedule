/*
function buildTable(mes, ano){
    var dia = new Date(mes, ano, 0);
    document.write("<div class='csstable'>");
    for(var k=-1; k<24; k++){
      document.write("<div class='line' >");
      document.write("<div class='csscell1'>");
      if(k>=0){ document.write(k+":00");}
      document.write("</div>");
      for(var j=0; j<dia.getDate(); j++){ 
        document.write("<div class='csscell2"+(j+1)+" csscell2'>");
        if(k>=0){
          for(var i=0; i<12; i++){
            var x = "l"+k+"c"+(i+1)+"d"+(j+1);
            document.write("<div class='csscolumn' id='"+x+"'></div>");
          }
        }else{
          document.write(j+1);
        }
        document.write("</div>");
      }
      document.write("</div>");
    }
    document.write("</div>");
  }
*/
Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(),0,1);
    var millisecsInDay = 86400000;
    return Math.ceil((((this - onejan) /millisecsInDay) + onejan.getDay()+1)/7);
};


let getFirstSunday = () =>{
  
  let d = new Date();
  d.setDate(d.getDate() - 7)
  d.setDate(d.getDate() - d.getDay())
  return d
}

let buildTable = () => {
  
  // get last 1 and next 4 weeks, separate days by blocks, months by color (gray) and weeks by line
  let firstDay = getFirstSunday();
  
  let i=5;
  while(i>0){ // iterate for each week
    let weekNumber = firstDay.getWeek()
    let week = $('<div>').addClass('week').attr('id', 'week'+weekNumber) // +firstDay.getWeekNumber()
    
    $('.table').append(week)
    for(let i=0;i<7;i++){ // iterate for 7 days
      let day = $('<div>').addClass('day')
      day.attr('id', 'day'+firstDay.getDate())
     day.text(firstDay.getDate())
      if((firstDay.getMonth()+1)%2==0){
        day.addClass('evenMonth')
      }
      $('#week'+weekNumber).append(day)
      console.log(firstDay.getDate())
      firstDay.setDate(firstDay.getDate()+1)
       

}
    i--;
  }
}

$(function() {
  
  //alert("ae");
  buildTable();
})
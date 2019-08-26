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
$(function() {
  //alert("ae");
})
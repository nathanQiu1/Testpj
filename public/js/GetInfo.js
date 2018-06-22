     

$(function () {

    
    $.ajax({
        url: "/query",
        type: "GET",
        async: false,
        success: function (res) {
            //$("#result").val(JSON.stringify(res.data));
            //$scope.Em_books = res.data;
            var html = creatediv(res.data);
            $("#mainx").append(html);
        }
    });


})


function creatediv(data) {
    //alert('come in ');
    var Em_books = data;
    var menuHtml_DIV = "";
    var mos = "'MouseOut'";
    var mos2 = "'MouseOver'";
   
    $.each(Em_books, function (i, Em_book) {

     
        var url = "'../../" + Em_book.WZURL + "'";
        var ID = "'" + Em_book._id+"'";
        menuHtml_DIV += '<div id="div_css" style="width:100%"><table onMouseOver = "this.className=' + mos + '" onMouseOut = "this.className=' + mos2 + '" class="' + mos2 + '" style="width:100%"><tr>';
        menuHtml_DIV += '<td style="width:5%">'+(i+1)+'</td>';
        menuHtml_DIV += '<td style="width:10%"><input type="button" value="请点击我阅读" class="sp_bt" cursor:pointer="" onclick="readopen(' + url + ',' + ID+','+i+')"  ></td>';
        menuHtml_DIV += '<td style="width:25%"><img style="width:100px;height:120px;" src="../../' + Em_book.FMURL+'" ></td>';
        menuHtml_DIV += '<td style="width:15%"><span  id="lb_readpp' + i + '">' + Em_book.ReadPP+'</span></td>';
        menuHtml_DIV += '<td style="width:15%"><span  id="lb_clickpp' + i + '">' + Em_book.ClickPP+'</span></td>';
        menuHtml_DIV += '<td style="width:15%"><span class="sp_jstou">' + Em_book.Name +'</span></td>';
        menuHtml_DIV += '<td style="width:15%">' + Em_book.CTime+'</td></tr>';
        menuHtml_DIV += '<tr ><td  style="width:100%" colspan="7"><span class="sp_jstou"><b>介绍:</b>' + Em_book.Remarks +'</span></td></tr>';
        menuHtml_DIV += '<tr ><td  style="width:100%" colspan="7"><hr/></td></tr>';
        menuHtml_DIV += '</table></div>';
    })
    return menuHtml_DIV;


}


function readopen(src,ID,i) {
  
    $.ajax({
        url: "/update?Id=" + ID,
        type: "GET",
        async: false,
        success: function (res) {
            
            //alert(JSON.stringify(res.data[0].ClickPP));
            $("#lb_clickpp" + i).text(res.data[0].ClickPP);
            window.open(src, '', 'height=600,width=800');
        }
    });

 

}


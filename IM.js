 $(document).ready(function(){
    $(document).on("click",".delete",function(e){
      e.preventDefault();
      $(this).parent().parent().remove();
    });
    $(document).on("click",".edit",function(e){
      e.preventDefault();
      $("#numberInput").val($(this).parent().parent().children().eq(0).text());
      $("#titleInput").val($(this).parent().parent().children().eq(1).text());
      $("#ratingInput").val($(this).parent().parent().children().eq(2).text());
      $("#yearInput").val($(this).parent().parent().children().eq(3).text());
      $("#actionInput").val("edit");
      $("#rownumInput").val($(this).parent().parent().data("number"));
    });
    $(document).on("submit","#inputForm", function(e){
      e.preventDefault();
      if($("#actionInput").val()=="add"){
        $("tbody").append(`
          <tr data-number="`+$("#numberInput").val()+`">
          <td>`+$("#numberInput").val()+`</td>
          <td>`+$("#titleInput").val()+`</td>
          <td>`+$("#ratingInput").val()+`</td>
          <td>`+$("#yearInput").val()+`</td>
            <td><a href="#" class="edit">Edit</a><a href="#" class="delete">Delete</a></td>
          </tr>
          `);
      } else if($("#actionInput").val()=="edit"){
        $("tr[data-number="+$("#rownumInput").val()+"]").children().eq(0).text($("#numberInput").val());
        $("tr[data-number="+$("#rownumInput").val()+"]").children().eq(1).text($("#titleInput").val());
        $("tr[data-number="+$("#rownumInput").val()+"]").children().eq(2).text($("#ratingInput").val());
        $("tr[data-number="+$("#rownumInput").val()+"]").children().eq(3).text($("#yearInput").val());
  
      }
      $("#inputForm")[0].reset();
      $("#actionInput").val("add");
  
    });
  });
  
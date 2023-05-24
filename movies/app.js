
$(document).ready(function(){

   
    function createDom(title, rating){

        const tableBody = $("table tbody");
        let tr =$(`<tr></tr>`);
       
        const $title = $(`<td id=${title}>${title}</td>`);
        const $rating = $(`<td id=${rating}>${rating}</td>`);
        const $delete = $(`<td class=${title}><i class="fa-solid fa-trash-can"></i></td>`);
     
        tr.append($title, $rating, $delete);
        tableBody.append(tr);
       
        $("input[name=title]").val('');
        $("input[name=rating]").val('');
        
        $($delete).on('click', function(e){
            tr.remove();
        })
    }

    
    $("input[type=submit]").on("click", function(e){
        e.preventDefault();
        console.log("CLICKED");
    
        const $title = $(".form-control").eq(0).val();
        const $rating = $(".form-control").eq(1).val();
        console.log($title,$rating);

        createDom($title, $rating);   
    })

    $(function () {
        $("#rating").bootstrapValidator();}
    );
  

})
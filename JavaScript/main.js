$(document)
    .ready(()=>{
     
        $("#submit").click(function(){   
            $("#GIFresults").empty();
            let userInput = $("#search").val()
            $.ajax({
                type: "get",
                url:`https://api.giphy.com/v1/gifs/search?api_key=sb4Bp20TyZX1Hj9OCmy6BPOpR8f5429Y&q=${userInput}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`,
                data: "data",
                dataType: "JSON",
                success: function (response) {  
                 let GIFsearch = response.data
                 $.each(GIFsearch, (i,e)=>{
                        let GIFobj = e.images.original.url
                        $("#GIFresults").append(`<img src= ${GIFobj} alt = "GIF image"/>`)                       
                 })
                }
            });
                
        });
  
    });
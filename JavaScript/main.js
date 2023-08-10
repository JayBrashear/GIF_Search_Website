$(document)
    .ready(()=>{
     
        $("#submit").click(function(){            
            let userInput = $("#search").val()
            $.ajax({
                type: "get",
                url:`https://api.giphy.com/v1/channels/search?api_key=sb4Bp20TyZX1Hj9OCmy6BPOpR8f5429Y&q=${userInput}&limit=25&offset=0`,
                data: "data",
                dataType: "JSON",
                success: function (response) {  
                 let GIFsearch = response.data
                 $.each(GIFsearch, (i,e)=>{
                        let GIFuserAvatar = e.user.avatar_url
                        $("body").append(`<img src= ${GIFuserAvatar} alt = "User Avatar"/>`)
                 })
                }
            });
                
        });
  
    });
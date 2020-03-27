
    $(document).ready(function(){   
        $(".modal_mouse_out").show();
        $(".close-modal").hide();
        $(".mod").mouseleave(function(){  
            $(".modal_mouse_out").hide();
            $(".mod").hide();
        })
    });
 
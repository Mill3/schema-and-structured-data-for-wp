function getParameterByName(name, url) {
    if (!url){
    url = window.location.href;    
    } 
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
jQuery(document).ready(function($){   
	$(".saswp-tabs a").click(function(e){
		var href = $(this).attr('href');                
		var currentTab = getParameterByName('tab',href);
		if(!currentTab){
			currentTab = "general";
		}
		$(this).siblings().removeClass("nav-tab-active");
		$(this).addClass("nav-tab-active");
		$(".form-wrap").find(".saswp-"+currentTab).siblings().hide();
		$(".form-wrap .saswp-"+currentTab).show();
		window.history.pushState("", "", href);
		return false;
	});                
    //Settings page jquery starts here    
 
    $(".saswp-checkbox").change(function(){
          var id = $(this).attr("id");  
          console.log(id);
                  switch(id){
                      case 'saswp-for-wordpress-checkbox':  
                          
                          if ($(this).is(':checked')) {              
                            $("#saswp-for-wordpress").val(1);  
                          }else{
                            $("#saswp-for-wordpress").val(0);  
                          }                          
                          break;
                      case 'saswp-facebook-enable-checkbox':  
                          
                          if ($(this).is(':checked')) {              
                            $("#saswp-facebook-enable").val(1); 
                            $("#sd_facebook").show();
                          }else{
                            $("#saswp-facebook-enable").val(0);  
                            $("#sd_facebook").hide();
                          }                          
                          break;   
                      case 'saswp-twitter-enable-checkbox':  
                          
                          if ($(this).is(':checked')) {              
                            $("#saswp-twitter-enable").val(1);
                            $("#sd_twitter").show();
                          }else{
                            $("#saswp-twitter-enable").val(0);  
                            $("#sd_twitter").hide();
                          }                          
                          break;
                      case 'saswp-google-plus-enable-checkbox':  
                          
                          if ($(this).is(':checked')) {              
                            $("#saswp-google-plus-enable").val(1);  
                            $("#sd_google_plus").show();
                          }else{
                            $("#saswp-google-plus-enable").val(0); 
                            $("#sd_google_plus").hide();
                          }                          
                          break;
                      case 'saswp-instagram-enable-checkbox':  
                          
                          if ($(this).is(':checked')) {              
                            $("#saswp-instagram-enable").val(1);  
                            $("#sd_instagram").show();
                          }else{
                            $("#saswp-instagram-enable").val(0);  
                            $("#sd_instagram").hide();
                          }                          
                          break;
                      case 'saswp-youtube-enable-checkbox':  
                          
                          if ($(this).is(':checked')) {
                            $("#sd_youtube").show();  
                            $("#saswp-youtube-enable").val(1);  
                          }else{
                            $("#saswp-youtube-enable").val(0);
                            $("#sd_youtube").hide();
                          }                          
                          break;
                      case 'saswp-linkedin-enable-checkbox':  
                          
                          if ($(this).is(':checked')) {              
                            $("#saswp-linkedin-enable").val(1);  
                            $("#sd_linkedin").show();
                          }else{
                            $("#saswp-linkedin-enable").val(0);
                            $("#sd_linkedin").hide();
                          }                          
                          break; 
                      case 'saswp-pinterest-enable-checkbox':  
                          
                          if ($(this).is(':checked')) {              
                            $("#saswp-pinterest-enable").val(1);  
                            $("#sd_pinterest").show();
                          }else{
                            $("#saswp-pinterest-enable").val(0); 
                            $("#sd_pinterest").hide();
                          }                          
                          break; 
                      case 'saswp-soundcloud-enable-checkbox':  
                          
                          if ($(this).is(':checked')) {              
                            $("#saswp-soundcloud-enable").val(1);  
                            $("#sd_soundcloud").show();
                          }else{
                            $("#saswp-soundcloud-enable").val(0);
                            $("#sd_soundcloud").hide();
                          }                          
                          break; 
                      case 'saswp-tumblr-enable-checkbox':  
                          
                          if ($(this).is(':checked')) {              
                            $("#saswp-tumblr-enable").val(1);  
                            $("#sd_tumblr").show();
                          }else{
                            $("#saswp-tumblr-enable").val(0);  
                            $("#sd_tumblr").hide();
                          }                          
                          break; 
                      case 'saswp-for-amp-checkbox':
                          
                          if ($(this).is(':checked')) {              
                            $("#saswp-for-amp").val(1);  
                          }else{
                            $("#saswp-for-amp").val(0);  
                          }                                           
                      break;
                      case 'saswp_kb_contact_1_checkbox':
                          
                        if ($(this).is(':checked')) {              
                         $("#saswp_kb_contact_1").val(1); 
                         $("#saswp_kb_telephone, #saswp_contact_type").parent().parent('li').removeClass("saswp-display-none");  
                       }else{                                                
                         $("#saswp_kb_contact_1").val(0);  
                         $("#saswp_kb_telephone, #saswp_contact_type").parent().parent('li').addClass("saswp-display-none"); 
                       }
                      break;
                      case 'saswp-logo-dimensions-check':
                          
                        if ($(this).is(':checked')) {              
                           $("#saswp-logo-dimensions").val(1);  
                           $("#saswp-logo-width, #saswp-logo-height").parent().parent('li').show();                           
                         }else{                             
                           $("#saswp-logo-dimensions").val(0);            
                           $("#saswp-logo-width, #saswp-logo-height").parent().parent('li').hide();
                         }
                      break;
                      case 'saswp_archive_schema_checkbox':
                          
                            if ($(this).is(':checked')) {              
                                $("#saswp_archive_schema").val(1);             
                              }else{
                                $("#saswp_archive_schema").val(0);           
                              }
                      break;
                      case 'saswp_breadcrumb_schema_checkbox':
                          
                            if ($(this).is(':checked')) {              
                              $("#saswp_breadcrumb_schema").val(1);             
                            }else{
                              $("#saswp_breadcrumb_schema").val(0);           
                            }
                      break;                                           
                      default:
                          break;
                  }
                             
         }).change();
        
         $("#saswp_kb_type").change(function(){
          var datatype = $(this).val();        
          for(var i=1;i<=12;i++){
            if(datatype ==="Person"){
             if(i<8){
                $( ".saswp-knowledge-base li:eq('"+i+"')" ).hide();          
              }else{
                $( ".saswp-knowledge-base li:eq('"+i+"')" ).show();            
              }    
            }else if(datatype ==="Organization"){
              if(i<8){
                $( ".saswp-knowledge-base li:eq('"+i+"')" ).show();          
              }else{
                $( ".saswp-knowledge-base li:eq('"+i+"')" ).hide();            
              }    
            }else{
               $( ".saswp-knowledge-base li:eq('"+i+"')" ).hide(); 
            }
                       
          }                                           
     }).change();     
     $("input[data-id=media]").click(function(e) {	// Application Icon upload
		e.preventDefault();
                var button = $(this);
                var id = button.attr('id').replace('_button', '');                
		var saswpMediaUploader = wp.media({
			title: "Application Icon",
			button: {
				text: "Select Icon"
			},
			multiple: false  // Set this to true to allow multiple files to be selected
		})
		.on("select", function() {
			var attachment = saswpMediaUploader.state().get('selection').first().toJSON();                            
			
                         $("#"+id).val(attachment.url);
                         $("input[data-id='"+id+"_id']").val(attachment.id);
                         $("input[data-id='"+id+"_height']").val(attachment.height);
                         $("input[data-id='"+id+"_width']").val(attachment.width);
                         $("input[data-id='"+id+"_thumbnail']").val(attachment.url);
		})
		.open();
	});
        //Settings page jquery ends here
});

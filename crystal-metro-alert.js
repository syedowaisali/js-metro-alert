/*
    
    Lib Name: Crystal Metro Alert
    Description: An alert metro style.
    Author: Syed Owais Ali
    Date Created: 20-Jan-2014

*/

function metroAlert(data, options)
{
    data = pickMetroParam(data, "");
    options = pickMetroParam(options, function(){});
    
    var THEME_INFO = "info";
    var THEME_SUCCESS = "success";
    var THEME_WARNING = "warning";
    var THEME_ERROR = "error";
    var TOP_SPACE = 100;
    var SPEED = "slow";
    var html = "";
    var theme;
    
    // default options
    var defaults = {
        theme: "info",                      // 4 theme styles are avaiable (info, success, warning, error)
        buttonText : "OK",                  // default close button text OK
        showCloseButton : true,             // posible values (true, false)
        autoClose : false,                  // posible values (true, false)
        autoCloseTime : 5000,               // set time in miliseconds allow integer values
        updateMetro: false,                 // posible values (true, false) when user pass content without closing metro box
        layerClass : "metro-alert",         // pass your own class default metro-alert
        boxClass : "metro-alert-box",       // pass your own class default metro-alert-box
        onCloseInit : function(){},         // override your own method when click close button
        onCloseComplete: function(){},      // override your own method when metro closing complete
        onClose: function(elem){
            // fire on close initialize method
            setting.onCloseInit(elem);
            var revert_back = parseInt($("#metro_alert_box").css("height")) + TOP_SPACE + 50;
            $("#metro_alert_box").animate({"top" : "-" + revert_back + "px"}, SPEED);
            $("#metro_alert_back_layer").fadeOut(SPEED, function(){
                $("#metro_alert_box").remove();
                $("#metro_alert_back_layer").remove();
                
                // fire on close initialize complete method
                setting.onCloseComplete(elem);
            });
        }               // override your own close method when close button is clicked
    };
    
    // extend setting
    var setting = $.extend(defaults, options);
    
    // make info theme
    var themeInfo = {
        infoLayerBackgroundColor: "#0398D6",
        infoLayerForegroundColor: "#FFFFFF",
        infoLayerCloseButtonBackgroundColor: "#0084C2",
    };
    
    // make success theme
    var themeSuccess = {
        infoLayerBackgroundColor: "#2AD304",
        infoLayerForegroundColor: "#FFFFFF",
        infoLayerCloseButtonBackgroundColor: "#16BF00",
    };
    
    // make success theme
    var themeWarning = {
        infoLayerBackgroundColor: "#FD971C",
        infoLayerForegroundColor: "#FFFFFF",
        infoLayerCloseButtonBackgroundColor: "#E98308",
    };
    
    // make success theme
    var themeError = {
        infoLayerBackgroundColor: "#D30404",
        infoLayerForegroundColor: "#FFFFFF",
        infoLayerCloseButtonBackgroundColor: "#BF0000",
    };
    
    switch(setting.theme){
        case THEME_INFO:
            theme = themeInfo;
            break;
            
        case THEME_SUCCESS:
            theme = themeSuccess;
            break;
            
        case THEME_WARNING:
            theme = themeWarning;
            break;
            
        case THEME_ERROR:
            theme = themeError;
            break;
            
        default:
            theme = themeInfo;
            break;
    }

    if(!setting.updateMetro){
        
        // html data
        html += "<div class='" + setting.layerClass + "' id='metro_alert_back_layer' style='background: black; opacity: 0.7; display: none; width: 100%; height: 100%; top: 0px; left: 0px; position: fixed; z-index: 998;'></div>";
        html += "<div class='" + setting.boxClass + "' id='metro_alert_box' style='background: " + theme.infoLayerBackgroundColor + ";display: none; width: 100%; height: auto; position: fixed; top: 100px; left: 0px; z-index: 999;'>";
        html += "<div class='metro-alert-container' style='width: 980px; margin: 0 auto; padding: 20px 0;'>";
        html += "<div class='metro-alert-data-box' style='color: " + theme.infoLayerForegroundColor + "; float: left; width: 100%; margin-bottom: 20px;'>" + data + "</div>";
        html += "<div class='metro-alert-close-btn-row' style='float: left; width: 100%; margin-bottom: 20px;'><span class='metro-alert-close-btn metro-btn' style='float: left;'>" + setting.buttonText + "</span></div>";
        html += "</div>";
        html += "</div>";
        
        // before appending alert box check already exist or not if exist remove it.
        $("#metro_alert_box").remove();
        $("#metro_alert_back_layer").remove();
        
        $("body").append(html);
            
        // set box top
        var box_top = parseInt($("#metro_alert_box").css("height")) + TOP_SPACE + 50;
        $("#metro_alert_box").css("top", "-" + box_top + "px").css("display", "block");
        
        // animate box
        $("#metro_alert_back_layer").fadeIn(SPEED);
        $("#metro_alert_box").animate({"top" : TOP_SPACE + "px"}, SPEED);
        
        // add events
        $(".metro-alert-close-btn").bind("click", function(){
            setting.onClose($(this));
        });
        
        $(".metro-btn").bind("mouseenter", function(){
            $(this).css("background", theme.infoLayerBackgroundColor);
        }).bind("mouseleave", function(){
            $(this).css("background", theme.infoLayerCloseButtonBackgroundColor);
        });
        
        $(".metro-btn").css({
           "border": "2px solid #FFFFFF",
           "color": "#FFFFFF",
           "cursor": "pointer",
           "text-decoration": "none",
           "padding": "3px 25px",
           "background": theme.infoLayerCloseButtonBackgroundColor
        });

    }else{
        if($("#metro_alert_back_layer").length > 0){
            $("#metro_alert_box").css("background", theme.infoLayerBackgroundColor);
            $(".metro-alert-close-btn").css("background", theme.infoLayerCloseButtonBackgroundColor);
            
            $(".metro-alert-data-box").html(data);
            
            // update button style
            $(".metro-btn").css({
               "border": "2px solid #FFFFFF",
               "color": "#FFFFFF",
               "cursor": "pointer",
               "text-decoration": "none",
               "padding": "3px 25px",
            });
            
            // unbind close button events
            $(".metro-btn").unbind("mouseenter").unbind("mouseleave");
            
            $(".metro-btn").bind("mouseenter", function(){
               $(this).css("background", theme.infoLayerBackgroundColor); 
            }).bind("mouseleave", function(){
                $(this).css("background", theme.infoLayerCloseButtonBackgroundColor);
            });
            
            // update metro close button event
            $(".metro-alert-close-btn").unbind("click");
            
            $(".metro-alert-close-btn").bind("click", function(){
                setting.onClose($(this));
            });
            
        }else{
            metroAlert(data, {theme : setting.theme, showCloseButton: setting.showCloseButton, autoClose: setting.autoClose});
        }
    }
    
    // set close button visiblity
    if(!setting.showCloseButton){
        $(".metro-alert-close-btn-row").css("display", "none");
    }else{
        $(".metro-alert-close-btn-row").css("display", "block");
    }
    
    // set auto close
    if(setting.autoClose)
        setTimeout(function(){
            if($("#metro_alert_back_layer").length > 0){
                $(".metro-alert-close-btn").trigger("click");
            }
        }, parseInt(setting.autoCloseTime));
        
    // update button text
    $(".metro-alert-close-btn").html(setting.buttonText);
};

// get parameter
function pickMetroParam(arg, def){
    return (typeof arg == "undefined" ? def : arg);
}
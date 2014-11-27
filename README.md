#JS Metrol Alert

js metro alert is simple replace with browser default alert plus add extra functionality with handy use.

##Usage

First, load [jQuery](http://jquery.com/) (v1.4 or greater) and the plugin.

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="js/crystal-metro-alert-1.0.js" type="text/javascript" charset="utf-8"></script>

##Options

Metro Alert accepts several options to customize its behaviour:

###theme (String)

If you use metro alert with different style for other purpose you can use styles option default is metroStyle.INFO.

####Styles

    metroStyle.INFO
    metroStyle.WARNING
    metroStyle.SUCCESS
    metroStyle.ERROR

```javascript
metroAlert("Info style alert", {
    theme: metroStyle.INFO
});
```

###buttonText (String)

Change default button text with your own text.

```javascript
metroAlert("Button text changed", {
    buttonText: "Close"
});
```

###showCloseButton (Boolean)

Control close button from boolean type default **_true_**.

```javascript
metroAlert("Close button shown", {
    showCloseButton: true
});
```

###autoClose (Boolean)

Control auto close alert metro type default **_false_**.

```javascript
metroAlert("Auto close", {
    autoClose: true
});
```

###autoCloseTime (Integer)

Control auto close delay time default **_5000_** // 5 seconds.

```javascript
metroAlert("Auto close after 3 seconds", {
    autoClose: true,
    autoCloseTime: 3000 // 3 seconds
});
```

###updateMetro (Boolean)

If you want to update text, style and etc without closing metro alert add this property with true value default **_false_**.

```javascript
metroAlert("Update metro alert text", {
    buttonText: "Cancel",
    updateMetro: true
});
```

###layerClass (String)

Change back layer class with new class default **_metro-alert_**.

```javascript
metroAlert("Update metro alert text", {
    layerClass: "my-back-layer-class"
});
```

###boxClass (String)

Change metro box class with new class default **_metro-alert-box_**.

```javascript
metroAlert("Update metro alert text", {
    boxClass: "my-metro-box-class"
});
```

###onInit (Event)

Trigger before initialize metro alert.

```javascript
metroAlert("Alert", {
    onInit: function(){
        // insert logic
    }
});
```

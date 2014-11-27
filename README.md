#JS Metrol Alert

js metro alert is simple replace with browser default alert plus add extra functionality with handy use.

##Usage

First, load [jQuery](http://jquery.com/) (v1.4 or greater) and the plugin.

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="js/crystal-metro-alert-1.0.js" type="text/javascript" charset="utf-8"></script>

##Options

Metro Alert accepts several options to customize its behaviour:

###Theme (String)

If you use metro alert with different style for other purpose you can use styles option default is metroStyle.INFO.

####Styles

>metroStyle.INFO

>metroStyle.WARNING

>metroStyle.SUCCESS

>metroStyle.ERROR

```javascript
metroAlert("Info Metro Alert.", {
    theme: metroStyle.INFO
});
```

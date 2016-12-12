# yzpInput
my mobile input framework powered by angularjs
##EXAMPLE
###html code
```html
<!DOCTYPE html>
        <html>
            <heade>
                <meta charSet="utf-8">
                <title>yzpInput demo</title>
		            <link href='css/style.css' rel=stylesheet>
            </heade>
            <body  ng-app="yzpInput">
                    <form ng-controller="yzpController">
                            <yzp-input label="Email" type="email" placeholder="邮箱（推荐Gmail）" model="form.email"></yzp-input>/* set the type of the input to email*/
                            <yzp-input label="Password" type="password" placeholder="密码（8-15字符）" model="form.password"></yzp-input>/*set the type of the input to password*/
                    </form>
            <script src="js/angular.js"></script>
            <script src="js/main.js"></script>
            </body>
</html>
```
###API
"lable" define the lable of the input.
<br>
"type"  define the type of input
<br>
"placeholder" define the placeholder.
<br>
"model" similar as ng-model bind the input with the model.

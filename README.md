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
```html
<yzp-input label="Email" /*String define the label of the input element*/
	   type="email" /*String define the type of the input*/
	   placeholder="邮箱（推荐Gmail" /*String define the placeholder of the input*/
	   model="form.email"/*String binding the model for the input*/
	   >
</yzp-input>
```
##总结
######在angularjs中实现元素显示隐藏的指令有ngShow,ngHide,ngIf.前两个的实现原理是通过改变dom元素的display属性，ngif这是通过增加及删除dom元素，并且ngif会创建独立作用域，这意味着在指令内无法访问父元素的scope，产生让人无法理解的错误，在此备忘，所以应该尽量避免使用ngshow代替ngif如果实在需要使用ngif指令可能需要scope.$parent获取父级scope

/**
 * Created by yuanzeping on 2016/12/7.
 */
var yzpInput=angular.module('yzpInput',[]);
var yzpController=yzpInput.controller('yzpController',function(){

});
yzpInput.directive('yzpInput',function(){
    return{
        scope:{
            label:'@',
            type:'@',
            placeholder:'@',
            model:'='
        },
        restrict:'E',
        template:'<div><label>{{label}}</label><br><input type={{type}} placeholder={{placeholder}} ng-model="model" ng-change="changeNgif()"><clear></clear><optionlist ng-show="isShow" ng-init="isShow=false"></optionlist>'+
        '</div>',
        replace:false,
        link:function(scope){
                scope.changeNgif=function(){
                    if(scope.model&&scope.type==='text'){
                        scope.isShow=true;
                    }else{
                        scope.isShow=false;
                    }
                }
        }
    }
})
.directive('clear',function(){
        return{
            restrict:'E',
            template:'<span ng-click="clear()">x</span>',
            replace:false,
            link:function(scope){
                scope.clear=function(){
                    scope.model=null;
                    scope.isShow=false;
                }
            }
        }
    })
.directive('optionlist',function(){
        return{
            restrict:'E',
            template:'<ul><li ng-repeat="option in options.optionlist" ng-click="options.selectOption(option)">{{model|emailFormat}}{{option}}</li></ul>',
            replace:false,
            link:function(scope){
                scope.options={
                    optionlist:['@gmail.com','@qq.com','@163.com'],
                    selectOption:function(option){
                        scope.model=scope.model+option;
                        scope.isShow=false;
                    }
                }
            }
        }
    })
.filter('emailFormat',function(){
        return function(input){
            if(input){
                if(input.indexOf('@')>0){
                    var out=input.substring(0,input.indexOf('@'));
                    return out;
                }
                else{
                    return input;
                }
            }else{
                return input;
            }

        }
    })

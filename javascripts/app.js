var linkApp = angular.module('linkApp', []);

linkApp.config(function(){
    new Clipboard('#copy-link');
});
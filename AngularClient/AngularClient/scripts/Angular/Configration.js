var app = angular.module('helloAngular', ['ngRoute', 'ngAnimate']);
/*
    Angular application'ınımuzı oluşturduk.
    Bundan sonra AngularJS ile ilgili tüm işlemlerimizi app üzerinden yapacağız..
    'ngRoute' ve 'ngAnimate' ise Projemize inject ettiğimiz bir ek frameworkler.
     ***AngularJS dependency injection bir frameworktur.***
*/
app.config( function ($routeProvider) {

    /*
        ngRoute ile gelen $routeProvider'ı inject ettirdik.
    */

    $routeProvider.when('/', {
        templateUrl: '/templates/list.html',
        /*Url boş olduğu zaman ng-view directive'ine templates klasorundeki list isimli html dosyası render olacak.*/
    });

    $routeProvider.when('/edit/:productId', {

        templateUrl: '/templates/form.html',

        /*Url /edit/herhangiBirUrununId'si olduğunda templates klasorundeki form isimli html dosyası render olacak. */
        /*templateUrl hardcoded olarak tanımlanmak zorunda değildir dilenirse url üzerindeki parametrelere göre tanımlanabilir.

        ************
           templateUrl: function (urlParams) {
            return '/products/GetById/' + urlParams.productId;
        },
        
        ***************

        */
    });

    $routeProvider.when('/insert', {
        templateUrl:'/templates/form.html',
    });



    /*
       Routing yaparken dilersek controller'da tanımlayabiliriz.

       **********************

        $routeProvider.when('/insert',
        {
            templateUrl: '/templates/form.html',
            controller:'productController',
        }
        );

       *********************

    */

});


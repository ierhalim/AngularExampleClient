app.directive('baHeader', function () {
    /*application'ımıza bir directive ekledik.*/
    return {
        restrict: 'E', // 'E' element olarak kullanacağımız anlamına geliyor. A kullansaydık bir attribute olarak kullanabilirdik. C olarak kullansaydık class olarak kullanabilirdik.
        templateUrl: '/templates/header.html', // directive'imiz template'ini tanımladık artık bu adresteki html'i <ba-header> olarak kullanabileceğiz.
      
    };
});
/*
 Directive'ler camelCase olarak tanımlansada büyük harfinden önce - konulup harf küçültülür.
 bu directive'i html tarafında ba-header olarak kullanacağız
*/
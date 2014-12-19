app.service('$productService', function ($http) {
    /*
     $http framework üzerindeki bir servistir biz burda kendi servisimize  framework un servisini inject etmiş oluyoruz  
     
 */
    var baseUrl = "http://localhost:54848/api";
    var self = this;
    /*servisimizi self isimli bir değişkene atıyoruz bunun amacı yazdığımız fonksiyonların içinde servisimize  ulaşabilmek. */
    var self = this;
    self.GetById = function (options) {
        /*
    servisimize GetById isimli bir method ekledik parametre olarakta options isimli bir nesnse istedik optionsımızı tanımlayıp göndericez.
    $http servisi xhr istekleri oluşturmamıza yarar.
 */
        $http.get(baseUrl + '/Product/' + options.Id).success(function (response) {
            if (typeof options.success == 'function') {
                options.success(response);
                /* gönderdiğimiz options'taki success nesnesinin tipi function ise çalıştırıp sunucudan gelen cevabı parametre olarak gönderiyoruz.. */
            }
        });
    };

    self.GetAll = function (success)
    {
        $http.get(baseUrl + '/Product').success(function (response) {
            if (typeof success == 'function') {
                success(response);
            }
        });
    }
 
    self.Post = function (options) {
        if (typeof options.product != 'object') {
            throw 'You can not post request without product please add options to product object';
            /*options ta product nesnesi boş gelirse hata fırlatıyoruz*/
        }
        $http({
            method: 'POST',
            url: baseUrl + '/Product',
    
            data: options.product,

        }).success(function (response) {
            if (typeof options.success == 'function') {
                options.success(response);
            }
        });
        /*
           Önceki iki fonkisyonumzda $http servisimizin .get fonksiyonlarını kullanmıştık aynı şekilde .post şeklindede kullanabilirdik ancak böyle bir kullanımda mevcuttur. 
        */


    }

    self.Update = function (options) {
        if (typeof options.product != 'object') {
            throw 'You can not put request without product please add options to product object';
        }
        $http({
            method: 'PUT',
            url: baseUrl + '/Product/' + options.product.Id,
            data: options.product,
        }).success(function (response) {
            if (typeof options.success == 'function') {
                options.success(response);
            }
        });
    }


 

});
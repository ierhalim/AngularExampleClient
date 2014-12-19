app.controller('productController', function ($productService, $routeParams, $http) {
    /*$productService'imizi ve $routeParams servisini framewrok bizim için inject edecek*/

    var self = this;
    self.isUpdate = false;
    self.product = {};
   
    if (typeof $routeParams.productId != 'undefined') {
        /*Eğer route üzerinde productId parametresi mevcutsa self.product nesnesini apimizden çekiyoruz.*/
        self.isUpdate = true;
        $productService.GetById(
            {
                Id: $routeParams.productId,
                success: function (response) {
                    self.product = response;
                }
            }
            )
    }


    self.Submit = function () {
        /*$prodcut Servisimizde Post isimli bir method yazıp options isimli parametre istemiştik */

        if (self.isUpdate) {
            $productService.Update({
                product: self.product,
                success: function (response) {
                    alert('ürün başarıyla güncellendi.');
                }
            });
        }
        else {
            $productService.Post({
                product: self.product,
                success: function () {
                    alert('Ürün başarıyla eklenmiştir.');
                    self.product = {};
                }
            });

        }
      

    };



});

app.controller('procductListController', function ($productService) {

    /*$productService te yaptığımız gibi controllerımızı self isimli bir değişkene atıyoruz*/
    var self = this;
    self.productList = []; // controllerımızda productList isimli bir array tanımladık..
    self.orderType = 'Name';
    self.isReverseOrder = false;
    /*$prodcut servisimizde tanımladığımız callback fonksiyonu çalışacak*/
    $productService.GetAll(function (response) {
        self.productList = response;
    });

    self.Delete = function (idx) {
        $productService.Delete({
            Id: self.productList[idx].Id,
        });
    }

    self.SetOrder = function (type) {
        if (self.isReverseOrder && self.orderType==type) {
            self.orderType = '-' + type;
            self.isReverseOrder = false;
        }
        else {
            self.orderType = type;
            self.isReverseOrder = true;
        }
    }
});





/* Controllerları kullanırken dikkat etmemiz gerekenler

 * DOM'a müdahale yapmamalıyız : Controller'lar yalnızca business logicler için kullanılmalıdır. Dom müdahalesi için AngularJs'nin zaten bir databinding kütüphanesi olduğunu unutmamalıyız.

 *Başka bir controller ile kod paylaşımı yapmamalıyız:Bunun için service yazmalıyız.

 *Input değerlerine direkt mudahale etmemeliyiz :Bunun için ng-model directive'i mevcut.

 *Veri filtreleme(Arama/Sıralama vb.) Bunun için AngularJs üzerinde filter'lar mevcut.

 *Yaşam döngüsünü yönetmemeliyiz.Bir servisi oluşturmak yada servisin bir örneğini oluşturmak gibi. AngularJs zaten Dependency injection ağırlıklı bir kütüphanedir. 
  Yazmış olduğumuz servisleri kendisi singelton olarak inject edecektir.

 */
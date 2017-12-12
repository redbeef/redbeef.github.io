webpackJsonp([7],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entity_Utils__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, formBuilder, http, alertCtrl, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.url = __WEBPACK_IMPORTED_MODULE_4__entity_Utils__["a" /* Utils */].getUrlBackend() + 'api/users';
        this.formUser = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            telefone: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
    }
    RegisterPage.prototype.mostrarAlerta = function (dados) {
        this.alertCtrl.create({
            title: dados[0],
            subTitle: dados[1],
            buttons: ['OK']
        }).present();
    };
    RegisterPage.prototype.cadastrar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Enviando...'
        });
        loading.present();
        var dados = this.formUser.value;
        console.log('dados', dados);
        this.http.post(this.url, dados)
            .subscribe(function (data) {
            data = data.json();
            loading.dismiss();
            console.log(data, 'cadastrado');
            _this.alertCtrl.create({
                title: 'Alerta',
                subTitle: 'Cadastro realizado com sucesso!',
                buttons: [
                    {
                        text: 'Ok',
                        handler: function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                        }
                    }
                ]
            }).present();
        }, function (err) {
            if (err.status === 400) {
                err = err.json();
                console.log('400', err);
                for (var chave in err) {
                    _this.presentToast(err[chave]);
                    loading.dismiss();
                    break;
                }
            }
            else {
                console.log('erro', err.json());
                loading.dismiss();
                _this.presentToast('Erro ao cadastrar');
            }
        });
    };
    RegisterPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'botton'
        });
        toast.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Arquivos\Aplicativos\delivery\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n	<ion-navbar>\n		<ion-title>Cadastro</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n	\n	<form [formGroup]="formUser" (ngSubmit)="cadastrar()">\n\n\n		<ion-item>\n			<ion-label>Nome</ion-label>\n			<ion-input type="text" formControlName="name"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-label>Telefone</ion-label>\n			<ion-input type="number" formControlName="telefone"></ion-input>\n		</ion-item>	\n\n		<ion-item>\n			<ion-label>Email</ion-label>\n			<ion-input type="email" formControlName="email"></ion-input>\n		</ion-item>\n\n		<ion-item>\n			<ion-label>Senha</ion-label>\n			<ion-input type="password" formControlName="password"></ion-input>\n		</ion-item>\n\n		<button ion-button block type="submit" [disabled]="!formUser.valid">Cadastrar</button>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Arquivos\Aplicativos\delivery\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PedidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entity_Utils__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ver_pedido_ver_pedido__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PedidoPage = (function () {
    function PedidoPage(navCtrl, navParams, http, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
    }
    PedidoPage.prototype.totalPedido = function (p) {
        var total = 0;
        p.itens.forEach(function (item) {
            total += Number(item.produto.price);
        });
        return total;
    };
    PedidoPage.prototype.showPedido = function (pedido) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__ver_pedido_ver_pedido__["a" /* VerPedidoPage */], { 'pedido': pedido });
        modal.present();
    };
    PedidoPage.prototype.getPedidos = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__entity_Utils__["a" /* Utils */].getUrlBackend() + 'api/pedidos')
            .subscribe(function (data) {
            _this.pedidos = data;
            loading.dismiss();
        }, function (err) {
            loading.dismiss();
        });
    };
    PedidoPage.prototype.ionViewDidLoad = function () {
        this.getPedidos();
    };
    PedidoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pedido',template:/*ion-inline-start:"C:\Arquivos\Aplicativos\delivery\src\pages\pedido\pedido.html"*/'<!--\n  Generated template for the PedidoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n	<ion-navbar  color="dark">\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Meus Pedidos</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<ion-list>\n		<ion-item *ngFor="let pedido of pedidos">\n			<ion-thumbnail item-start>\n				<img src="assets/imgs/red.jpg">\n			</ion-thumbnail>\n			<h2>Pedido nº: {{ pedido.id}}</h2>\n			<p>{{ pedido.endereco }} Total <span>{{ totalPedido(pedido) }}</span></p>\n			<button ion-button clear item-end (click)="showPedido(pedido)">Ver</button>\n		</ion-item>\n	</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Arquivos\Aplicativos\delivery\src\pages\pedido\pedido.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], PedidoPage);
    return PedidoPage;
}());

//# sourceMappingURL=pedido.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerPedidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerPedidoPage = (function () {
    function VerPedidoPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.pedido = this.navParams.get('pedido');
    }
    Object.defineProperty(VerPedidoPage.prototype, "totalPedido", {
        get: function () {
            var total = 0;
            this.pedido.itens.forEach(function (item) {
                total += Number(item.produto.price);
            });
            return total;
        },
        enumerable: true,
        configurable: true
    });
    VerPedidoPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    VerPedidoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ver-pedido',template:/*ion-inline-start:"C:\Arquivos\Aplicativos\delivery\src\pages\ver-pedido\ver-pedido.html"*/'<ion-header>\n\n\n	<ion-navbar color="dark">\n		<ion-title>Pedido nº {{pedido.id}}</ion-title>\n		<ion-buttons end>\n			<button ion-button (click)="closeModal()">\n				<ion-icon name="close"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<h2>Dados do Pedido</h2>\n\n	<strong>Endereço: </strong>{{ pedido.endereco}}<br>\n	<strong>Número:</strong> {{ pedido.numero}}<br>\n	<strong>Complemento:</strong> {{ pedido.complemento}}<br>\n	<strong>Bairro:</strong> {{ pedido.bairro}}<br>\n	<strong>Forma de pagamento:</strong> {{ pedido.forma_pagamento}}<br>\n	<strong>Troco para:</strong> {{ pedido.troco}}<br>\n\n	<ion-list>\n		<ion-item *ngFor="let item of pedido.itens">\n			<ion-thumbnail item-start>\n				<img src="assets/imgs/red.jpg">\n			</ion-thumbnail>\n			<h2>{{ item.produto.name }}</h2>\n			<p>Preço: {{ item.produto.price}}<br>\n			{{ item.observacao }} </p>\n		</ion-item>\n	</ion-list>\n	<h2>Total: R$ {{ totalPedido.toFixed(2) }}</h2>\n</ion-content>\n'/*ion-inline-end:"C:\Arquivos\Aplicativos\delivery\src\pages\ver-pedido\ver-pedido.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], VerPedidoPage);
    return VerPedidoPage;
}());

//# sourceMappingURL=ver-pedido.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entity_Utils__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PerfilPage = (function () {
    function PerfilPage(navCtrl, navParams, cookieService, toastCtrl, loadingCtrl, http, transfer, camera, file, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cookieService = cookieService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.transfer = transfer;
        this.camera = camera;
        this.file = file;
        this.actionSheetCtrl = actionSheetCtrl;
        this.user = cookieService.getObject("usuarioAtual");
        this.url = __WEBPACK_IMPORTED_MODULE_3__entity_Utils__["a" /* Utils */].getUrlBackend() + 'api/users/update';
        this.urlImage = __WEBPACK_IMPORTED_MODULE_3__entity_Utils__["a" /* Utils */].getUrlBackend() + 'images/fotos/';
        this.load = loadingCtrl.create({
            content: 'Carregando...'
        });
    }
    PerfilPage.prototype.alterar = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Enviando...'
        });
        loading.present();
        this.http.post(this.url, this.user)
            .subscribe(function (data) {
            console.log(data);
            data = data.json();
            _this.cookieService.putObject("usuarioAtual", data);
            _this.user = data;
            loading.dismiss();
            _this.presentToast('Alterado com sucesso!');
            console.log(data, 'cadastrado');
        }, function (err) {
            if (err.status === 500)
                console.log(err._body);
            if (err.status === 400) {
                err = err.json();
                console.log('400', err);
                for (var chave in err) {
                    _this.presentToast(err[chave]);
                    loading.dismiss();
                    break;
                }
            }
            else {
                loading.dismiss();
                _this.presentToast('Erro ao cadastrar');
            }
        });
    };
    PerfilPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'botton'
        });
        toast.present();
    };
    PerfilPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'O que deseja fazer?',
            buttons: [
                {
                    text: 'Galeria',
                    handler: function () {
                        _this.onTakePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                }, {
                    text: 'Câmera',
                    handler: function () {
                        _this.onTakePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    PerfilPage.prototype.onTakePicture = function (sourceType) {
        var _this = this;
        this.load.present();
        this.camera.getPicture({
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            quality: 100,
            encodingType: this.camera.EncodingType.JPEG,
        }).then(function (imageData) {
            //this.image = imageData;
            _this.uploadPhoto(imageData);
        }, function (error) {
            console.log(error);
        });
    };
    PerfilPage.prototype.displayErrorAlert = function (err) {
        console.log(err);
        this.presentToast('erro ao capturar foto');
    };
    PerfilPage.prototype.uploadPhoto = function (imageFileUri) {
        var _this = this;
        this.file.resolveLocalFilesystemUrl(imageFileUri)
            .then(function (entry) { return entry.file(function (file) { return _this.readFile(file); }); })
            .catch(function (err) { return console.log('upload foto', err); });
    };
    PerfilPage.prototype.readFile = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.onloadend = function () {
            var formData = new FormData();
            var imgBlob = new Blob([reader.result], { type: file.type });
            var dados = { photo: imgBlob };
            formData.append('file', imgBlob, file.name);
            _this.postData(formData);
        };
        reader.readAsArrayBuffer(file);
    };
    PerfilPage.prototype.postData = function (formData) {
        var _this = this;
        this.http.post(__WEBPACK_IMPORTED_MODULE_3__entity_Utils__["a" /* Utils */].getUrlBackend() + 'api/upload', formData)
            .subscribe(function (result) {
            var dados = result.json();
            console.log(dados);
            _this.user.foto = dados.foto;
            _this.cookieService.putObject('usuarioAtual', dados);
            _this.load.dismiss();
        }, function (err) {
            _this.load.dismiss();
            console.log(err._body);
        });
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-perfil',template:/*ion-inline-start:"C:\Arquivos\Aplicativos\delivery\src\pages\perfil\perfil.html"*/'<!--\n  Generated template for the PerfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n	<ion-navbar  color="dark">\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Meu perfil</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<div class="profile-item">\n		<div class="profile-picture big-profile-picture">\n			<img *ngIf="!user.foto" src="assets/imgs/profile.png">\n			<img *ngIf="user.foto" src="{{urlImage + user.foto}}">\n		</div>\n		<h2 class="profile-name">{{user.name}}</h2>\n		<div class="profile-info">{{user.created_at}}</div>\n	</div>\n	<ion-list>\n		<ion-item>\n			<button ion-button icon-right (click)="presentActionSheet()">\n		       <ion-icon name="camera"></ion-icon> Alterar Foto Perfil\n		    </button>\n\n		</ion-item>\n		<ion-item>\n			<ion-icon name="person" item-start></ion-icon>\n			<ion-label>Nome</ion-label>\n			<ion-input item-end type="text" [(ngModel)]="user.name"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-icon name="mail" item-start></ion-icon>\n			<ion-label>Email</ion-label>\n			<ion-input item-end type="text" [(ngModel)]="user.email"></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-icon name="phone-portrait" item-start></ion-icon>\n			<ion-label>Telefone</ion-label>\n			<ion-input item-end type="text"  [(ngModel)]="user.telefone"></ion-input>\n		</ion-item>\n		<ion-item>\n			<button block ion-button color="danger" (click)="alterar()">Alterar</button>\n		</ion-item>\n	</ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Arquivos\Aplicativos\delivery\src\pages\perfil\perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entity_Utils__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsuariosPage = (function () {
    function UsuariosPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__entity_Utils__["a" /* Utils */].getUrlBackend();
    }
    UsuariosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.http.get(this.url + 'api/users')
            .subscribe(function (res) {
            _this.usuarios = res;
        }, function (err) { return console.log(err); });
    };
    UsuariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-usuarios',template:/*ion-inline-start:"C:\Arquivos\Aplicativos\delivery\src\pages\usuarios\usuarios.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Clientes</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-list>\n		<ion-item *ngFor="let u of usuarios">\n			<ion-avatar item-start>\n				<img *ngIf="u.foto" src="{{ url }}/images/fotos/{{ u.foto }}">\n				<img *ngIf="!u.foto" src="assets/imgs/profile.png">\n			</ion-avatar>\n			<h2>{{ u.name }}</h2>\n		</ion-item>\n	</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Arquivos\Aplicativos\delivery\src\pages\usuarios\usuarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], UsuariosPage);
    return UsuariosPage;
}());

//# sourceMappingURL=usuarios.js.map

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/finalizar/finalizar.module": [
		316,
		6
	],
	"../pages/login/login.module": [
		317,
		5
	],
	"../pages/pedido/pedido.module": [
		318,
		4
	],
	"../pages/perfil/perfil.module": [
		319,
		3
	],
	"../pages/register/register.module": [
		320,
		2
	],
	"../pages/usuarios/usuarios.module": [
		322,
		1
	],
	"../pages/ver-pedido/ver-pedido.module": [
		321,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_product_view_product__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__finalizar_finalizar__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entity_Utils__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyCart = (function () {
    function MyCart(navCtrl, navParams, cart) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cart = cart;
        this.getUrl = __WEBPACK_IMPORTED_MODULE_6__entity_Utils__["a" /* Utils */].getUrlBackend();
    }
    Object.defineProperty(MyCart.prototype, "itens", {
        get: function () {
            return this.cart.itens;
        },
        enumerable: true,
        configurable: true
    });
    MyCart.prototype.buy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__finalizar_finalizar__["a" /* FinalizarPage */]);
    };
    MyCart.prototype.verItemPedido = function (p) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__view_product_view_product__["a" /* ViewProduct */], { product: p });
    };
    MyCart.prototype.irParaHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    MyCart = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-cart',template:/*ion-inline-start:"C:\Arquivos\Aplicativos\delivery\src\pages\my-cart\my-cart.html"*/'<!--\n  Generated template for the MyCart page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Carrinho | Total: {{ cart.valorTotal.toFixed(2) }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-list>\n<ion-item-sliding #item *ngFor="let p of itens">\n  <ion-item>\n    <ion-thumbnail item-left>\n      <img src="{{ getUrl }}images/hamburguer.png">\n    </ion-thumbnail>\n    <h2>{{ p.name }}</h2>\n    <p>R$ {{p.price}}</p>\n    <span class="total">R$ {{ p.price * p.quantidade}}</span>\n\n	  <ion-badge item-right item-right color="alert">{{p.quantidade}}</ion-badge>\n  </ion-item>\n\n  <ion-item-options side="right">\n    <button ion-button color="info" (click)="verItemPedido(p)">\n      <ion-icon name="information-circle"></ion-icon>\n      Ver\n    </button>\n    <button ion-button color="danger" (click)="cart.removeItem(p)">\n	    <ion-icon name="trash"></ion-icon>\n	    Remover\n	  </button>\n  </ion-item-options>\n</ion-item-sliding>\n</ion-list>\n<button (click)="buy()" ion-button full block [disabled]="!cart.itens.length">Finalizar Pedido</button>\n<ion-fab right bottom>\n  <button ion-fab color="danger" (click)="irParaHome()">\n    <ion-icon name="add"></ion-icon>\n  </button>\n</ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Arquivos\Aplicativos\delivery\src\pages\my-cart\my-cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__["a" /* Cart */]])
    ], MyCart);
    return MyCart;
}());

//# sourceMappingURL=my-cart.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
var Utils = (function () {
    function Utils() {
    }
    Utils.getUrlBackend = function () {
        return "https://aulao.saladerobotica.com.br/";
    };
    Utils.getApiKeyGoogleMaps = function () {
        return 'AIzaSyCyFol97cMt6mB2DswYGIxRM6QT9f0Bs1o';
    };
    return Utils;
}());

//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(243);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_InterceptorHttpService__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_view_product_view_product__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_my_cart_my_cart__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_finalizar_finalizar__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_pedido_pedido__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_ver_pedido_ver_pedido__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_perfil_perfil__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_usuarios_usuarios__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_cookie_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_login_service_login_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_cart_cart__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_transfer__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_file__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_view_product_view_product__["a" /* ViewProduct */],
                __WEBPACK_IMPORTED_MODULE_11__pages_my_cart_my_cart__["a" /* MyCart */],
                __WEBPACK_IMPORTED_MODULE_12__pages_finalizar_finalizar__["a" /* FinalizarPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_pedido_pedido__["a" /* PedidoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_ver_pedido_ver_pedido__["a" /* VerPedidoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_usuarios_usuarios__["a" /* UsuariosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/finalizar/finalizar.module#FinalizarPageModule', name: 'FinalizarPage', segment: 'finalizar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pedido/pedido.module#PedidoPageModule', name: 'PedidoPage', segment: 'pedido', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ver-pedido/ver-pedido.module#VerPedidoPageModule', name: 'VerPedidoPage', segment: 'ver-pedido', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/usuarios/usuarios.module#UsuariosPageModule', name: 'UsuariosPage', segment: 'usuarios', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_view_product_view_product__["a" /* ViewProduct */],
                __WEBPACK_IMPORTED_MODULE_11__pages_my_cart_my_cart__["a" /* MyCart */],
                __WEBPACK_IMPORTED_MODULE_12__pages_finalizar_finalizar__["a" /* FinalizarPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_pedido_pedido__["a" /* PedidoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_ver_pedido_ver_pedido__["a" /* VerPedidoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_usuarios_usuarios__["a" /* UsuariosPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__providers_cart_cart__["a" /* Cart */],
                __WEBPACK_IMPORTED_MODULE_20_angular2_cookie_core__["CookieService"],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_camera__["a" /* Camera */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_4__providers_InterceptorHttpService__["a" /* InterceptorHttpService */], multi: true
                },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_login_service_login_service__["a" /* LoginServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_service_login_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_finally__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var InterceptorHttpService = (function () {
    function InterceptorHttpService(cookieService, loginService) {
        this.cookieService = cookieService;
        this.loginService = loginService;
    }
    InterceptorHttpService.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req.clone({
            setHeaders: { Authorization: 'Bearer ' + this.cookieService.get("accessToken") }
        })).catch(function (error) {
            if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["d" /* HttpErrorResponse */]) {
                switch (error.status) {
                    case 401:
                        return _this.getAccessToken(req, next);
                    case 0:
                        return _this.getAccessToken(req, next);
                }
                __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error);
            }
        });
    };
    InterceptorHttpService.prototype.getAccessToken = function (req, next) {
        var _this = this;
        return this.loginService.getAccessToken().switchMap(function (resp) {
            _this.cookieService.put("accessToken", resp.access_token);
            return next.handle(req.clone({
                setHeaders: { Authorization: 'Bearer ' + _this.cookieService.get("accessToken") }
            }));
        });
    };
    InterceptorHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"], __WEBPACK_IMPORTED_MODULE_0__login_service_login_service__["a" /* LoginServiceProvider */]])
    ], InterceptorHttpService);
    return InterceptorHttpService;
}());

//# sourceMappingURL=InterceptorHttpService.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pedido_pedido__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_perfil_perfil__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_usuarios_usuarios__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, cookieService, requestOptions) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.cookieService = cookieService;
        this.requestOptions = requestOptions;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.usuario = { name: '', telefone: '' };
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Início', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icone: 'home' },
            { title: 'Meu Perfil', component: __WEBPACK_IMPORTED_MODULE_9__pages_perfil_perfil__["a" /* PerfilPage */], icone: 'contact' },
            { title: 'Meus Pedidos', component: __WEBPACK_IMPORTED_MODULE_7__pages_pedido_pedido__["a" /* PedidoPage */], icone: 'pricetags' },
            { title: 'Clientes', component: __WEBPACK_IMPORTED_MODULE_10__pages_usuarios_usuarios__["a" /* UsuariosPage */], icone: 'contact' }
        ];
    }
    MyApp.prototype.logout = function () {
        this.cookieService.removeAll();
        this.requestOptions.headers.set('Authorization', "Bearer ");
        console.log('saiu..');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            if (_this.cookieService.getObject("usuarioAtual")) {
                _this.usuario = _this.cookieService.getObject("usuarioAtual");
                _this.requestOptions.headers.set('Authorization', "Bearer " + _this.cookieService.get("accessToken"));
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
            }
            else {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
            }
            // Push Notification
            if (_this.platform.is('cordova')) {
                var funcaoRetorno = function (data) {
                    console.log('Notificações: ' + JSON.stringify(data));
                };
                window["plugins"].OneSignal.startInit("d23146a3-aacd-4e97-b66e-0cbe7eab947d", "331319072068")
                    .handleNotificationOpened(funcaoRetorno)
                    .endInit();
            }
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Arquivos\Aplicativos\delivery\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-content id="content-custom">\n    <div class="profile-image">\n      <img src="assets/imgs/red.jpg">\n    </div>\n    <h2>{{ usuario.name }}</h2>\n    <p> {{ usuario.telefone }} </p>\n\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon [name]="p.icone"></ion-icon>\n        {{p.title}}\n      </button>\n      <button ion-item (click)="logout()"><ion-icon name="log-out"></ion-icon> Sair</button>\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Arquivos\Aplicativos\delivery\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_core__["CookieService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Arquivos\Aplicativos\delivery\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Arquivos\Aplicativos\delivery\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_login_service_login_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, formBuilder, loginService, cookieService, requestOptions, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.cookieService = cookieService;
        this.requestOptions = requestOptions;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            senha: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    LoginPage.prototype.cadastrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.showAlert = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.loginForm.value).subscribe(function (res) {
            _this.loginSuccess(res);
        }, function (err) {
            console.log(err);
            if (err.status === 401) {
                _this.showAlert('Usuário ou senha incorreto!');
            }
            else {
                _this.showAlert('Erro de conexão!');
            }
        });
    };
    LoginPage.prototype.loginSuccess = function (res) {
        var _this = this;
        this.cookieService.removeAll();
        this.cookieService.put("accessToken", res.access_token);
        this.cookieService.put("refreshToken", res.refresh_token);
        this.loginService.getUsuarioAtual(res.access_token)
            .subscribe(function (res) { return _this.redirectPage(res); });
    };
    LoginPage.prototype.redirectPage = function (res) {
        this.cookieService.putObject("usuarioAtual", res);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.redirectUser = function (response) {
        this.cookieService.removeAll();
        this.cookieService.put("accessToken", response.access_token);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        if (this.cookieService.getObject("usuarioAtual")) {
            this.requestOptions.headers.set('Authorization', "Bearer " + this.cookieService.get("accessToken"));
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Arquivos\Aplicativos\delivery\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n	<div class="profile-image">\n		<img src="assets/imgs/red.jpg"> \n	</div>\n	<form [formGroup]="loginForm" >\n		<ion-list>\n\n			<ion-item>\n				<ion-label stacked>Email</ion-label>\n				<ion-input #email formControlName="email" type="email" ></ion-input>\n			</ion-item>\n\n			<ion-item>\n				<ion-label stacked>Senha</ion-label>\n				<ion-input #senha formControlName="senha" type="password"></ion-input>\n			</ion-item>\n\n		</ion-list>\n	</form>\n	<button [disabled]="!loginForm.valid" ion-button block (click)="login()">Entrar</button>\n	<button ion-button block color="dark" (click)="cadastrar()">CRIAR CONTA</button>\n</ion-content>\n'/*ion-inline-end:"C:\Arquivos\Aplicativos\delivery\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_login_service_login_service__["a" /* LoginServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__["CookieService"],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__finalizar_finalizar__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_product_view_product__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entity_Utils__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, cookieService, requestOptions, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.cookieService = cookieService;
        this.requestOptions = requestOptions;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.produtos = [];
        this.getUrl = __WEBPACK_IMPORTED_MODULE_7__entity_Utils__["a" /* Utils */].getUrlBackend();
    }
    HomePage.prototype.curtir = function (p) {
        var _this = this;
        this.http.post(__WEBPACK_IMPORTED_MODULE_7__entity_Utils__["a" /* Utils */].getUrlBackend() + 'api/like-produtos', {
            produto_id: p.id
        }).subscribe(function (data) {
            _this.atualizarLike(p.id, data);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.atualizarLike = function (id, data) {
        for (var i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].id == id) {
                this.produtos[i].likes = data.likes;
            }
        }
    };
    HomePage.prototype.abrirProduto = function (p) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__view_product_view_product__["a" /* ViewProduct */], { product: p });
    };
    HomePage.prototype.finalizar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__finalizar_finalizar__["a" /* FinalizarPage */]);
    };
    HomePage.prototype.sair = function () {
        this.cookieService.removeAll();
        this.requestOptions.headers.set('Authorization', "Bearer ");
        console.log('saiu...');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        this.http.get(__WEBPACK_IMPORTED_MODULE_7__entity_Utils__["a" /* Utils */].getUrlBackend() + 'api/products')
            .subscribe(function (data) {
            _this.produtos = data;
            loading.dismiss();
        }, function (err) {
            console.log(err);
            loading.dismiss();
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Arquivos\Aplicativos\delivery\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>RedBeef - Hamburgueria</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n  <ion-card *ngFor="let p of produtos">\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="assets/imgs/red.jpg">\n      </ion-avatar>\n      <h2>{{ p.name }}</h2>\n      <p>R$ {{ p.price }} </p>\n    </ion-item>\n\n    <img src="{{ getUrl }}images/produtos/{{p.photo}}">\n\n    <ion-card-content>\n      <p>{{ p.description }}</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small (click)="curtir(p)">\n          <ion-icon name="thumbs-up"></ion-icon>\n          <div>{{p.likes.length}} Likes</div>\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button icon-right clear small (click)="abrirProduto(p)">\n          <ion-icon name="cart"></ion-icon>\n          <div>Adicionar</div>\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card><!-- \n\n  <ion-card >\n    <img src="{{ getUrl }}images/produtos/{{p.photo}}">\n    <div class="card-title">{{ p.name }}</div>\n    <div class="card-subtitle">R$ {{ p.price }}</div>\n  </ion-card> -->\n\n\n  <button ion-button danger block (click)="sair()">Sair</button>\n</ion-content>\n'/*ion-inline-end:"C:\Arquivos\Aplicativos\delivery\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_core__["CookieService"],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Cart = (function () {
    function Cart() {
        this.itens = [];
        this.valorTotal = 0;
        this.quantidadeDeItens = 0;
    }
    Cart.prototype.addItem = function (item) {
        var exist = false;
        for (var i = 0; i < this.itens.length; i++) {
            if (this.itens[i].id === item.id) {
                this.itens[i].quantidade = item.quantidade;
                this.itens[i].descricao = item.descricao;
                exist = true;
            }
        }
        if (!exist || (this.itens.length == 0)) {
            this.itens.push({
                id: item.id,
                name: item.name,
                quantidade: Number(item.quantidade),
                price: Number(item.price),
                observacao: item.observacao,
                description: item.description
            });
        }
        this.calculateValorTotalAndAmountFinal();
    };
    Cart.prototype.calculateValorTotalAndAmountFinal = function () {
        var total = 0;
        var amountFinal = 0;
        for (var i = 0; i < this.itens.length; i++) {
            total += this.itens[i].price * this.itens[i].quantidade;
            amountFinal += this.itens[i].quantidade;
        }
        this.quantidadeDeItens = amountFinal;
        this.valorTotal = total;
    };
    Cart.prototype.removeItem = function (item) {
        var position = null;
        for (var i = 0; i < this.itens.length; i++) {
            if (this.itens[i].id === item.id) {
                position = i;
            }
        }
        if (position != null) {
            this.itens.splice(position, 1);
        }
        this.calculateValorTotalAndAmountFinal();
    };
    Cart = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], Cart);
    return Cart;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalizarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cart_cart__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entity_Utils__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FinalizarPage = (function () {
    function FinalizarPage(navCtrl, navParams, cart, geo, platform, ref, alertCtrl, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cart = cart;
        this.geo = geo;
        this.platform = platform;
        this.ref = ref;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.pedido = {};
        this.inicializaCampos();
    }
    FinalizarPage.prototype.inicializaCampos = function () {
        this.pedido.endereco = '';
    };
    FinalizarPage.prototype.finalizarPedido = function () {
        this.pedido.itens = this.cart.itens;
        this.presentConfirm();
    };
    Object.defineProperty(FinalizarPage.prototype, "isValid", {
        get: function () {
            return this.pedido.endereco != '';
        },
        enumerable: true,
        configurable: true
    });
    FinalizarPage.prototype.showMapa = function (position) {
        var _this = this;
        // Map Options
        var options = {
            center: position,
            zoom: 15
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, options);
        this.marker = new google.maps.Marker({
            position: position,
            map: this.map,
            draggable: true,
            title: 'Meu Endereço'
        });
        google.maps.event.addListener(this.marker, 'dragend', function () {
            var latitude = _this.marker.position.lat();
            var longitude = _this.marker.position.lng();
            _this.setLatLng(latitude, longitude);
            _this.ref.detectChanges();
        });
    };
    FinalizarPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.geo.getCurrentPosition().then(function (pos) {
                _this.setLatLng(pos.coords.latitude, pos.coords.longitude);
                var position = { lat: pos.coords.latitude, lng: pos.coords.longitude };
                _this.showMapa(position);
                _this.posicao = pos.coords.latitude + ' - ' + pos.coords.longitude;
            }).catch(function (err) {
            });
        });
    };
    FinalizarPage.prototype.setLatLng = function (lat, lng) {
        this.pedido.latitude = lat;
        this.pedido.longitude = lng;
    };
    FinalizarPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar Pedido',
            message: 'Deseja enviar este pedido?',
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Enviar',
                    handler: function () {
                        _this.enviarDados();
                    }
                }
            ]
        });
        alert.present();
    };
    FinalizarPage.prototype.enviarDados = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Enviando...'
        });
        loading.present();
        this.http.post(__WEBPACK_IMPORTED_MODULE_4__entity_Utils__["a" /* Utils */].getUrlBackend() + 'api/pedidos', this.pedido)
            .subscribe(function (data) {
            loading.dismiss();
            _this.limparCesta();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
        }, function (err) {
            loading.dismiss();
            if (err.status == 401) {
                var erro = JSON.parse(err._body);
                if (erro.error == 'Unauthenticated.') {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
                }
            }
        });
    };
    FinalizarPage.prototype.limparCesta = function () {
        this.cart.itens = [];
        this.pedido.endereco = '';
        this.pedido.numero = '';
        this.pedido.complemento = '';
        this.pedido.forma_pagamento = '';
        this.pedido.troco = '';
        this.pedido.latitude = '';
        this.pedido.longitude = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FinalizarPage.prototype, "mapElement", void 0);
    FinalizarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-finalizar',template:/*ion-inline-start:"C:\Arquivos\Aplicativos\delivery\src\pages\finalizar\finalizar.html"*/'<ion-header>\n\n  <ion-navbar  color="dark">\n  	<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Finalizar Pedido</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	\n	<p>Confira seu pedido antes de finalizar! <br>\n		Campo endereço é obrigatório! <br>\n		<strong>Total: R$ {{ cart.valorTotal.toFixed(2) }} </strong>\n	</p>\n\n	<form (submit)="finalizarPedido()">\n		<ion-item>\n			<ion-label floating>Endereço/Rua/Av.</ion-label>\n			<ion-input [(ngModel)]="pedido.endereco" name="endereco" type="text" ></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label floating>Número</ion-label>\n			<ion-input [(ngModel)]="pedido.numero" name="numero" type="number" ></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label floating>Bairro</ion-label>\n			<ion-input [(ngModel)]="pedido.bairro" name="bairro" type="text" ></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label floating>Complemento</ion-label>\n			<ion-input [(ngModel)]="pedido.complemento" name="complemento" type="text" ></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label floating>Forma de Pagamento</ion-label>\n			<ion-select [(ngModel)]="pedido.forma_pagamento" name="forma_pagamento">\n				<ion-option value="dinheiro">Dinheiro</ion-option>\n				<ion-option value="cartao_credito">Cartão Credito</ion-option>\n				<ion-option value="cartao_debito">Cartão Débito</ion-option>\n			</ion-select>\n		</ion-item>\n		<ion-item>\n			<ion-label floating>Troco para</ion-label>\n			<ion-input [(ngModel)]="pedido.troco" name="troco" type="number" ></ion-input>\n		</ion-item>\n\n\n		<button [disabled]="!isValid" ion-button full block>Enviar Pedido</button>\n\n	</form>\n	<div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Arquivos\Aplicativos\delivery\src\pages\finalizar\finalizar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_cart_cart__["a" /* Cart */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
    ], FinalizarPage);
    return FinalizarPage;
}());

//# sourceMappingURL=finalizar.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_Utils__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginServiceProvider = (function () {
    function LoginServiceProvider(http, requestOptions, cookieService) {
        this.http = http;
        this.requestOptions = requestOptions;
        this.cookieService = cookieService;
        this.loginUrl = __WEBPACK_IMPORTED_MODULE_0__entity_Utils__["a" /* Utils */].getUrlBackend() + "oauth/token";
        this.userUrl = __WEBPACK_IMPORTED_MODULE_0__entity_Utils__["a" /* Utils */].getUrlBackend() + "api/users/logado";
        this.client_id = '3';
        this.client_secrete = '3WI6HSNXJm7q8r1lsnnkpjtXchx7Ckd33zDYN9U9';
        this.auth = {
            grant_type: 'password',
            client_id: this.client_id,
            client_secret: this.client_secrete,
            username: '',
            password: '',
            scope: '',
        };
    }
    LoginServiceProvider.prototype.login = function (usuario) {
        this.auth.username = usuario.email;
        this.auth.password = usuario.senha;
        return this.http.post(this.loginUrl, this.auth)
            .map(function (res) { return res.json(); });
    };
    LoginServiceProvider.prototype.getAccessToken = function () {
        var auth = {
            grant_type: 'refresh_token',
            client_id: this.client_id,
            client_secret: this.client_secrete,
            refresh_token: this.cookieService.get('refreshToken'),
            scope: '',
        };
        return this.http.post(this.loginUrl, auth)
            .map(function (result) { return result.json(); });
    };
    LoginServiceProvider.prototype.getUsuarioAtual = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Authorization': "Bearer " + token });
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.requestOptions.headers.set('Authorization', "Bearer " + token);
        return this.http.get(this.userUrl, options)
            .map(function (res) { return res.json(); });
    };
    LoginServiceProvider.prototype.getUsuarioLogado = function () {
        return this.usuario;
    };
    LoginServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_core__["CookieService"]])
    ], LoginServiceProvider);
    return LoginServiceProvider;
}());

//# sourceMappingURL=login-service.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProduct; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cart_cart__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_cart_my_cart__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entity_Utils__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ViewProduct = (function () {
    function ViewProduct(navCtrl, navParams, cart, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cart = cart;
        this.toastCtrl = toastCtrl;
        this.getUrl = __WEBPACK_IMPORTED_MODULE_5__entity_Utils__["a" /* Utils */].getUrlBackend();
        this.product = this.navParams.get('product');
    }
    ViewProduct.prototype.addItem = function () {
        if (!(Number(this.product.quantidade) > 0)) {
            this.toastCtrl.create({
                message: 'Insira uma quantidade válida',
                duration: 3000,
                position: 'bottom'
            })
                .present();
        }
        else {
            /*this.product["quantidade"] = Number(this.cadastro.value.amount);
            this.product["descricao"] = this.cadastro.value.descricao;*/
            this.cart.addItem(this.product);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__my_cart_my_cart__["a" /* MyCart */]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], ViewProduct.prototype, "slides", void 0);
    ViewProduct = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-product',template:/*ion-inline-start:"C:\Arquivos\Aplicativos\delivery\src\pages\view-product\view-product.html"*/'<!--\n  Generated template for the ViewProduct page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark" >\n    <ion-title>Produto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content no-padding>\n  <img src="{{ getUrl }}images/produtos/{{product.photo}}">\n	<!-- <ion-slides pager zoom="true">\n	  <ion-slide>\n	    <img src="{{ getUrl }}images/hamburguer.png">\n	  </ion-slide>\n	  <ion-slide>\n	    <img src="{{ getUrl }}images/hamburguer.png">\n	  </ion-slide>\n	  <ion-slide>\n	    <img src="{{ getUrl }}images/hamburguer.png">\n	  </ion-slide>\n	</ion-slides> -->\n  <ion-grid>\n    <ion-col col-12>\n      \n      <!-- Header of Card -->\n\n      <!-- Add card content here! -->\n      <ion-card-title>{{ product.name }}</ion-card-title>\n      <ion-item>\n        <span item-right class="item-bold">R$ {{ product.price }}</span>\n      </ion-item>\n      <form (submit)="addItem()">\n        <ion-item>\n          <ion-label floating>Quantidade</ion-label>\n          <ion-input [(ngModel)]="product.quantidade" name="quantidade" min="1"  type="number" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Observação</ion-label>\n          <ion-textarea [(ngModel)]="product.observacao" name="observacao">{{product.observacao}}</ion-textarea>\n        </ion-item>\n\n       	<button ion-button full block>Adicionar ao carrinho</button>\n      </form>\n\n      <h1>Descrição:</h1>\n      <p>\n        {{ product.description}}\n      </p>\n\n    </ion-col> \n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Arquivos\Aplicativos\delivery\src\pages\view-product\view-product.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_cart_cart__["a" /* Cart */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], ViewProduct);
    return ViewProduct;
}());

//# sourceMappingURL=view-product.js.map

/***/ })

},[221]);
//# sourceMappingURL=main.js.map
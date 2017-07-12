var spec = 
{
  "swagger": "2.0",
  "info": {
    "description": "OPAK API; [gittigidiyor](gittigidiyor.com), [hepsiburada](hepsiburada.com), [ideasoft](ideasoft.com) ve [n11](n11.com) adresi üzerinde mağazası bulunan kurumsal firmalara hizmet veren, bu siteler üzerinde yapılabilen siparişlere ve tedarikçilere yönelik tüm işlemleri kolaylaştırcak ve bir uygulamadır.",
    "version": "1.0.0",
    "title": "OPAK"
  },
  "host": "52.50.17.253",
  "basePath": "/admin",
  "tags": [
    {
      "name": "Profile",
      "description": "Kurumsal firma kaydı"
    },
    {
      "name": "Login",
      "description": "Çalışan girişi"
    },
    {
      "name": "TenantConfig",
      "description": "Kurumsal firma ayarları"
    },
    {
      "name": "EmailConfig",
      "description": "Kurumsal firma çalışanlarının email ayarları"
    },
    {
      "name": "Vendor",
      "description": "Tedarikçiler"
    },
    {
      "name": "Sipariş çekimi",
      "description": "Çeşitli sistemlerden gelen sipariş bilgilerini kaydetme",
      "externalDocs": {
        "description": "Find out more about our store",
        "url": "http://swagger.io"
      }
    }
  ],
  "schemes": [
    "http"
  ],
  "paths": {
    "/api/profile": {
      "post": {
        "tags": [
          "Profile"
        ],
        "summary": "Yeni bir çalışan ekle",
        "description": "Bir şirket adına, o şirketi temsilen hesap açan kişinin ve şirket bilgilerinin alınacağı, hesap açılacağı ve oturum açılacağı servistir.",
        "operationId": "register",
        "consumes": [
          "text/json"
        ],
        "produces": [
          "text/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": true,
            "schema": {
              "$ref": "#/definitions/TenantConfig"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Gilen bilgiler başarılı bir şekilde kaydedildi",
            "schema": {
              "$ref": "#/definitions/TenantResponse"
            }
          },
          "400": {
            "description": "Kullanıcı tarafından eksik veya hatalı bilgi girildi",
            "schema": {
              "$ref": "#/definitions/ErrorResponse"
            }
          }
        }
      }
    },
    "/api/login": {
      "post": {
        "tags": [
          "Login"
        ],
        "summary": "Giriş yap",
        "description": "Çalışan bilgileri kontrol edilerek oturum açan servistir.",
        "operationId": "login",
        "consumes": [
          "text/json"
        ],
        "produces": [
          "text/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "required": true,
            "schema": {
              "properties": {
                "email": {
                  "type": "string",
                  "description": "Kayıt olacak olan çalışanın e-postası"
                },
                "password": {
                  "type": "string",
                  "description": "Kayıt olacak olan çalışanın şifresi"
                }
              }
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Giriş başarılı bir şekilde yapıldı",
            "schema": {
              "$ref": "#/definitions/TenantResponse"
            }
          },
          "400": {
            "description": "Kullanıcı tarafından eksik bilgi girildi",
            "schema": {
              "$ref": "#/definitions/ErrorResponse"
            }
          },
          "401": {
            "description": "Kullanıcı tarafından hatalı bilgi girildi",
            "schema": {
              "$ref": "#/definitions/ErrorResponse"
            }
          }
        }
      }
    },
    "/api/tenantconfigs": {
      "get": {
        "tags": [
          "TenantConfig"
        ],
        "summary": "Şirket ayarlarını listele",
        "description": "Sistemde kayıtlı olan sistem ayarlarını listeler",
        "operationId": "TenantConfigList",
        "produces": [
          "text/json"
        ],
        "responses": {
          "201": {
            "description": "Sistemde kayıtlı olan ayarlar başarılı olarak çekildi",
            "schema": {
              "$ref": "#/definitions/tenant_config_list"
            }
          }
        },
        "security": [
          {
            "token": []
          }
        ]
      },
      "post": {
        "tags": [
          "TenantConfig"
        ],
        "summary": "Yeni şirket ayarı kaydı",
        "description": "Sisteme yeni bir şirket ayarı kaydeder.",
        "operationId": "TenantConfigNew",
        "consumes": [
          "text/json"
        ],
        "produces": [
          "text/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "",
            "required": true,
            "schema": {
              "$ref": "#/definitions/tenant_config_single_instance"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Girilen ayarlar başarılı bir şekilde kaydedildi",
            "schema": {
              "$ref": "#/definitions/tenant_config_single_instance"
            }
          },
          "400": {
            "description": "Yeni ayar kaydedilirken sorun çıktı",
            "schema": {
              "$ref": "#/definitions/ErrorResponse"
            }
          }
        },
        "security": [
          {
            "token": []
          }
        ]
      }
    },
    "/api/tenantconfigs/{id}": {
      "get": {
        "tags": [
          "TenantConfig"
        ],
        "summary": "Sistem ayar detayı",
        "description": "ID'sine göre şirket ayar detayını gösterir",
        "operationId": "TenantConfigDetail",
        "consumes": [
          "text/json"
        ],
        "produces": [
          "text/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Şirket ayarının veritabanındaki PK’sı",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "201": {
            "description": "Sistemde kayıtlı olan ayarlar başarılı olarak çekildi",
            "schema": {
              "$ref": "#/definitions/tenant_config_list"
            }
          },
          "400": {
            "description": "Şirket ayarının ID'si veritabanında bulunamadı",
            "schema": {
              "$ref": "#/definitions/ErrorResponse"
            }
          }
        },
        "security": [
          {
            "token": []
          }
        ]
      },
      "put": {
        "tags": [
          "TenantConfig"
        ],
        "summary": "Şirket ayarlarını güncelle",
        "description": "ID'sine göre şirket ayarını günceller",
        "operationId": "TenantConfigUpdate",
        "consumes": [
          "text/json"
        ],
        "produces": [
          "text/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Şirket ayarının veritabanındaki PK’sı",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "body",
            "description": "",
            "required": true,
            "schema": {
              "$ref": "#/definitions/tenant_config_single_instance"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Şirket ayarı girilen verilere göre başarılı bir şekilde güncellendi",
            "schema": {
              "$ref": "#/definitions/tenant_config_list"
            }
          },
          "400": {
            "description": "Şirket ayarı güncellenirken bir sorun çıktı",
            "schema": {
              "$ref": "#/definitions/ErrorResponse"
            }
          }
        },
        "security": [
          {
            "token": []
          }
        ]
      },
      "delete": {
        "tags": [
          "TenantConfig"
        ],
        "summary": "Şirket ayarlarını sil",
        "description": "ID'sine göre şirket ayarını siler",
        "operationId": "TenantConfigDelete",
        "produces": [
          "text/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Şirket ayarının veritabanındaki PK’sı",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "204": {
            "description": "Şirket ayarı başarılı bir şekilde silindi"
          },
          "400": {
            "description": "Şirket ayarının ID'si veritabanında bulunamadı",
            "schema": {
              "$ref": "#/definitions/ErrorResponse"
            }
          }
        },
        "security": [
          {
            "token": []
          }
        ]
      }
    },
    "/api/emailconfigs": {
      "get": {
        "tags": [
          "EmailConfig"
        ],
        "summary": "Çalışan e-postalarını listele",
        "description": "Sistemde kayıtlı olan çalışan e-posta ayarlarını listeler",
        "operationId": "EmailConfigList",
        "produces": [
          "text/json"
        ],
        "responses": {
          "201": {
            "description": "Sistemde kayıtlı olan e-posta ayarları başarılı olarak çekildi",
            "schema": {
              "$ref": "#/definitions/email_config_list"
            }
          }
        },
        "security": [
          {
            "token": []
          }
        ]
      },
      "post": {
        "tags": [
          "EmailConfig"
        ],
        "summary": "Yeni çalışan e-posta ayarları kaydı",
        "description": "Sisteme yeni bir çalışan e-posta ayarı kaydeder.",
        "operationId": "EmailConfigNew",
        "consumes": [
          "text/json"
        ],
        "produces": [
          "text/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "",
            "required": true,
            "schema": {
              "$ref": "#/definitions/email_config_single_instance"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Girilen ayarlar başarılı bir şekilde kaydedildi",
            "schema": {
              "$ref": "#/definitions/email_config_list"
            }
          },
          "400": {
            "description": "Yeni ayar kaydedilirken sorun çıktı",
            "schema": {
              "$ref": "#/definitions/ErrorResponse"
            }
          }
        },
        "security": [
          {
            "token": []
          }
        ]
      }
    },
    "/api/emailconfigs/{id}": {
      "get": {
        "tags": [
          "EmailConfig"
        ],
        "summary": "Çalışan e-posta ayar detayı",
        "description": "ID'sine göre çalışan e-posta ayar detayını gösterir",
        "operationId": "EmailConfigDetail",
        "consumes": [
          "text/json"
        ],
        "produces": [
          "text/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Çalışan e-posta ayarlarının veritabanındaki PK’sı",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "201": {
            "description": "Sistemde kayıtlı olan ayarlar başarılı olarak çekildi",
            "schema": {
              "$ref": "#/definitions/email_config_list"
            }
          },
          "400": {
            "description": "E-posta ayarının ID'si veritabanında bulunamadı",
            "schema": {
              "$ref": "#/definitions/ErrorResponse"
            }
          }
        },
        "security": [
          {
            "token": []
          }
        ]
      },
      "put": {
        "tags": [
          "EmailConfig"
        ],
        "summary": "Çalışan e-posta ayarını güncelle",
        "description": "ID'sine göre çalışan e-posta ayar detayını günceller",
        "operationId": "EmailConfigUpdate",
        "consumes": [
          "text/json"
        ],
        "produces": [
          "text/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Çalışan e-posta ayarlarının veritabanındaki PK’sı",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "body",
            "description": "",
            "required": true,
            "schema": {
              "$ref": "#/definitions/email_config_single_instance"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Girilen kayıt başarılı bir şekilde güncellendi",
            "schema": {
              "$ref": "#/definitions/email_config_list"
            }
          },
          "400": {
            "description": "Yeni bilgiler kaydedilirken sorun çıktı",
            "schema": {
              "$ref": "#/definitions/ErrorResponse"
            }
          }
        },
        "security": [
          {
            "token": []
          }
        ]
      },
      "delete": {
        "tags": [
          "EmailConfig"
        ],
        "summary": "Çalışan e-posta ayarını sil",
        "description": "ID'sine göre çalışan e-posta ayarını siler",
        "operationId": "EmailConfigDelete",
        "produces": [
          "text/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Çalışan e-posta ayarlarının veritabanındaki ID'si",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "201": {
            "description": "Sistemde kayıtlı olan ayarlar başarılı bir şekilde silindi"
          },
          "400": {
            "description": "E-posta ayarının ID'si veritabanında bulunamadı",
            "schema": {
              "$ref": "#/definitions/ErrorResponse"
            }
          }
        },
        "security": [
          {
            "token": []
          }
        ]
      }
    },
    "/api/vendors": {
      "get": {
        "tags": [
          "Vendor"
        ],
        "summary": "Tedarikçileri listele",
        "description": "Sistemde kayıtlı olan tedarikçileri listeler",
        "operationId": "VendorList",
        "produces": [
          "text/json"
        ],
        "responses": {
          "201": {
            "description": "Sistemde kayıtlı olan tedarikçiler başarılı olarak çekildi",
            "schema": {
              "$ref": "#/definitions/vendor_list"
            }
          }
        },
        "security": [
          {
            "token": []
          }
        ]
      },
      "post": {
        "tags": [
          "Vendor"
        ],
        "summary": "Tedarikçi kaydı",
        "description": "Sisteme tedarikçi kaydeder.",
        "operationId": "VendorNew",
        "consumes": [
          "text/json"
        ],
        "produces": [
          "text/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "",
            "required": true,
            "schema": {
              "$ref": "#/definitions/vendor_single_instance"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Girilen veriler başarılı bir şekilde kaydedildi",
            "schema": {
              "$ref": "#/definitions/vendor_list"
            }
          },
          "400": {
            "description": "Yeni veri kaydedilirken sorun çıktı",
            "schema": {
              "$ref": "#/definitions/ErrorResponse"
            }
          }
        },
        "security": [
          {
            "token": []
          }
        ]
      }
    },
    "/api/vendors/{id}": {
      "get": {
        "tags": [
          "Vendor"
        ],
        "summary": "Tedarikçi detayı",
        "description": "ID'sine göre tedarikçinin detaylarını gösterir",
        "operationId": "VendorDetail",
        "consumes": [
          "text/json"
        ],
        "produces": [
          "text/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Tedarikçinin veritabanındaki ID’si",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "201": {
            "description": "Sistemde kayıtlı olan tedarikçiler başarılı olarak çekildi",
            "schema": {
              "$ref": "#/definitions/vendor_list"
            }
          },
          "400": {
            "description": "Tedarikçi ID'si veritabanında bulunamadı",
            "schema": {
              "$ref": "#/definitions/ErrorResponse"
            }
          }
        },
        "security": [
          {
            "token": []
          }
        ]
      },
      "put": {
        "tags": [
          "Vendor"
        ],
        "summary": "Tedarikçi güncelle",
        "description": "ID'sine göre tedarikçi detaylarını günceller",
        "operationId": "VendorUpdate",
        "consumes": [
          "text/json"
        ],
        "produces": [
          "text/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Tedarikçinin veritabanındaki ID’si",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "body",
            "description": "",
            "required": true,
            "schema": {
              "$ref": "#/definitions/vendor_single_instance"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Girilen tedarikçi verileri başarılı bir şekilde güncellendi",
            "schema": {
              "$ref": "#/definitions/vendor_list"
            }
          },
          "400": {
            "description": "Yeni bilgiler kaydedilirken sorun çıktı",
            "schema": {
              "$ref": "#/definitions/ErrorResponse"
            }
          }
        },
        "security": [
          {
            "token": []
          }
        ]
      },
      "delete": {
        "tags": [
          "Vendor"
        ],
        "summary": "Tedarikçi sil",
        "description": "ID'sine göre tedarikçiyi siler",
        "operationId": "VendorDelete",
        "consumes": [
          "text/json"
        ],
        "produces": [
          "text/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Tedarikçinin veritabanındaki ID'si",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "201": {
            "description": "Sistemde kayıtlı olan tedarikçi başarılı bir şekilde silindi"
          },
          "400": {
            "description": "Tedarikçi ID'si veritabanında bulunamadı",
            "schema": {
              "$ref": "#/definitions/ErrorResponse"
            }
          }
        },
        "security": [
          {
            "token": []
          }
        ]
      }
    },
    "/api/get_ideasoft_orders": {
      "post": {
        "tags": [
          "Sipariş çekimi"
        ],
        "summary": "Ideasoft Ürün Çekme",
        "description": "Şirketin ideasoft sisteminde bulunan Onaylandı durumundaki siparişlerini çeker",
        "operationId": "IdeasoftOrders",
        "produces": [
          "text/json"
        ],
        "responses": {
          "204": {
            "description": "Başarılı bir şekilde ürünler kaydedildi"
          },
          "400": {
            "description": "Veri, veritabanına yazılırken hata çıktıysa"
          },
          "401": {
            "description": "Eğer işlemi yapmak isteyen çalışanın ideasoft'a erişme yetkisi yoksa"
          }
        },
        "security": [
          {
            "token": []
          }
        ]
      }
    },
    "/api/get_gg_orders": {
      "post": {
        "tags": [
          "Sipariş çekimi"
        ],
        "summary": "Gittigidiyor Ürün Çekme",
        "description": "Şirketin gittigidiyor sisteminde bulunan Onaylandı durumundaki siparişlerini çeker",
        "operationId": "GittigidiyorOrders",
        "produces": [
          "text/json"
        ],
        "responses": {
          "204": {
            "description": "Başarılı bir şekilde ürünler kaydedildi"
          },
          "400": {
            "description": "Veri, veritabanına yazılırken hata çıktıysa"
          },
          "401": {
            "description": "Eğer işlemi yapmak isteyen çalışanın gittigidiyor'a erişme yetkisi yoksa"
          }
        },
        "security": [
          {
            "token": []
          }
        ]
      }
    },
    "/api/get_hb_orders": {
      "post": {
        "tags": [
          "Sipariş çekimi"
        ],
        "summary": "Hepsiburada Ürün Çekme",
        "description": "Şirketin hepsiburada sisteminde bulunan Onaylandı durumundaki siparişlerini çeker",
        "operationId": "HepsiburadaOrders",
        "produces": [
          "text/json"
        ],
        "responses": {
          "204": {
            "description": "Başarılı bir şekilde ürünler kaydedildi"
          },
          "400": {
            "description": "Veri, veritabanına yazılırken hata çıktıysa"
          },
          "401": {
            "description": "Eğer işlemi yapmak isteyen çalışanın hepsiburada'ya erişme yetkisi yoksa"
          }
        },
        "security": [
          {
            "token": []
          }
        ]
      }
    },
    "/api/get_n11_orders": {
      "post": {
        "tags": [
          "Sipariş çekimi"
        ],
        "summary": "N11 Ürün Çekme",
        "description": "Şirketin N11 sisteminde bulunan Onaylandı durumundaki siparişlerini çeker",
        "operationId": "n11Orders",
        "produces": [
          "text/json"
        ],
        "responses": {
          "204": {
            "description": "Başarılı bir şekilde ürünler kaydedildi"
          },
          "400": {
            "description": "Veri, veritabanına yazılırken hata çıktıysa"
          },
          "401": {
            "description": "Eğer işlemi yapmak isteyen çalışanın N11'e erişme yetkisi yoksa"
          }
        },
        "security": [
          {
            "token": []
          }
        ]
      }
    }
  },
  "securityDefinitions": {
    "api_key": {
      "type": "apiKey",
      "name": "api_key",
      "in": "header"
    },
    "token": {
      "type": "apiKey",
      "name": "Çalışanın oturum anahtarı",
      "in": "header"
    }
  },
  "definitions": {
    "TenantConfig": {
      "type": "object",
      "properties": {
        "user": {
          "$ref": "#/definitions/User"
        },
        "tenant": {
          "$ref": "#/definitions/Tenant"
        }
      },
      "xml": {
        "name": "TenantConfig"
      }
    },
    "vendor_list": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/vendor"
      }
    },
    "vendor": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int32",
          "description": "Tedarikçinin veritabanındaki ID’si"
        },
        "name": {
          "type": "string",
          "description": "Tedarikçinin ismi"
        },
        "email": {
          "type": "string",
          "description": "Tedarikçinin e-postası"
        },
        "address": {
          "type": "string",
          "description": "Tedarikçinin adresi"
        },
        "tax_id_number": {
          "type": "string",
          "description": "Tedarikçinin vergi numarası"
        },
        "IBAN": {
          "type": "string",
          "description": "Tedarikçinin IBAN'ı"
        },
        "symbol": {
          "type": "string",
          "description": "Tedarikçinin sembolü"
        },
        "tenant": {
          "$ref": "#/definitions/Tenant",
          "description": "E-posta ayarının kayıtlı olduğu şirket bilgisi"
        }
      },
      "xml": {
        "name": "vendors"
      }
    },
    "vendor_single_instance": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "Tedarikçinin ismi"
        },
        "email": {
          "type": "string",
          "description": "Tedarikçinin e-postası"
        },
        "address": {
          "type": "string",
          "description": "Tedarikçinin adresi"
        },
        "tax_id_number": {
          "type": "string",
          "description": "Tedarikçinin vergi numarası"
        },
        "IBAN": {
          "type": "string",
          "description": "Tedarikçinin IBAN'ı"
        },
        "symbol": {
          "type": "string",
          "description": "Tedarikçinin sembolü"
        },
        "tenant_id": {
          "type": "integer",
          "format": "int32",
          "description": "Tedarikçinin bağlı olduğu şirket"
        }
      }
    },
    "email_config_list": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/email_config"
      }
    },
    "email_config": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int32",
          "description": "E-posta ayarının veritabanındaki ID'si"
        },
        "email": {
          "type": "string",
          "description": "E-posta bilgisi"
        },
        "tenant": {
          "$ref": "#/definitions/Tenant",
          "description": "E-posta ayarının kayıtlı olduğu şirket bilgisi"
        },
        "active": {
          "type": "boolean",
          "description": "E-postanın aktif olup olmadığını gösteren bilgi"
        },
        "to": {
          "type": "boolean",
          "description": "E-postanın gönderilen olup olmadığını gösteren bilgi"
        },
        "cc": {
          "type": "boolean",
          "description": "E-postanın cc olup olmadığını gösteren bilgi"
        },
        "bcc": {
          "type": "boolean",
          "description": "E-postanın bcc olup olmadığını gösteren bilgi"
        }
      },
      "xml": {
        "name": "email_config"
      }
    },
    "email_config_single_instance": {
      "type": "object",
      "properties": {
        "email": {
          "type": "string",
          "description": "E-posta bilgisi"
        },
        "tenant_id": {
          "type": "integer",
          "format": "int32",
          "description": "E-posta ayarının kayıtlı olduğu şirket bilgisi"
        },
        "active": {
          "type": "boolean",
          "description": "E-postanın aktif olup olmadığını gösteren bilgi"
        },
        "to": {
          "type": "boolean",
          "description": "E-postanın gönderilen olup olmadığını gösteren bilgi"
        },
        "cc": {
          "type": "boolean",
          "description": "E-postanın cc olup olmadığını gösteren bilgi"
        },
        "bcc": {
          "type": "boolean",
          "description": "E-postanın bcc olup olmadığını gösteren bilgi"
        }
      },
      "xml": {
        "name": "email_config"
      }
    },
    "tenant_config_list": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/tenant_config"
      }
    },
    "tenant_config": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int32",
          "description": "Şirket ayarının listesi"
        },
        "marketplace": {
          "$ref": "#/definitions/MarketPlace"
        }
      },
      "xml": {
        "name": "tenant_config"
      }
    },
    "tenant_config_single_instance": {
      "type": "object",
      "properties": {
        "marketplace_id": {
          "type": "integer",
          "description": "Şirket ayarının veritabanındaki ID’si"
        },
        "api_key": {
          "type": "string",
          "description": "Sisteme kaydolan şirketin, ayarlarını oluşturduğunda girdiği api anahtarı"
        },
        "api_secret": {
          "type": "string",
          "description": "Sisteme kaydolan şirketin, ayarlarını oluşturduğunda girdiği api secretı"
        },
        "url": {
          "type": "string",
          "description": "Sisteme kaydolan şirketin, ayarlarını oluşturduğunda girdiği sipariş çekme URL’i"
        },
        "gg_role_name": {
          "type": "string",
          "description": "Sisteme kaydolan şirketin, ayarlarını oluşturduğunda girdiği gittigidiyor API’ye erişim için olan kullanıcı adı"
        },
        "gg_role_pass": {
          "type": "string",
          "description": "Sisteme kaydolan şirketin, ayarlarını oluşturduğunda girdiği gittigidiyor API’ye erişim için olan kullanıcı şifresi"
        }
      }
    },
    "MarketPlace": {
      "type": "object",
      "description": "Pazar yeri bilgileri",
      "properties": {
        "id": {
          "type": "integer",
          "description": "Pazar yerinin veritabanındaki PK’sı"
        },
        "name": {
          "type": "string",
          "description": "Pazar yerinin ismi"
        },
        "symbol": {
          "type": "string",
          "description": "Pazar yerinin sembolü"
        }
      }
    },
    "User": {
      "type": "object",
      "properties": {
        "email": {
          "type": "string",
          "description": "Kayıt olacak olan çalışanın e-postası"
        },
        "password": {
          "type": "string",
          "description": "Kayıt olacak olan çalışanın şifresi"
        },
        "password-again": {
          "type": "string",
          "description": "Kayıt olacak olan çalışan için şifre kontrolü"
        }
      },
      "xml": {
        "name": "User"
      }
    },
    "Tenant": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "Kayıt olacak olan şirketin ismi"
        },
        "email": {
          "type": "string",
          "description": "Kayıt olacak şirketin kurumsal e-postası"
        }
      }
    },
    "ResponseUser": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "format": "int32",
          "description": "User'in ID'si"
        },
        "email": {
          "type": "string",
          "description": "User'in e-postası"
        },
        "tenant": {
          "type": "integer",
          "format": "int32",
          "description": "Bağlı olduğu tenant'in ID'si"
        }
      }
    },
    "TenantResponse": {
      "type": "object",
      "properties": {
        "message": {
          "type": "string",
          "description": "Kaydın veritabanında başarılı olup olmadığına göre değişen durum mesajı"
        },
        "status": {
          "type": "integer",
          "format": "int32",
          "description": "Kaydın durumuna göre değişen HTML durum kodu"
        },
        "token": {
          "type": "string",
          "description": "Kullanıcı kaydı başarılı olduktan sonra geri dönen oturum anahtarı"
        },
        "user": {
          "$ref": "#/definitions/ResponseUser"
        }
      }
    },
    "ErrorResponse": {
      "type": "object",
      "properties": {
        "error_domain": {
          "type": "string",
          "description": "Error'un oluştuğu alan"
        },
        "message": {
          "type": "string",
          "description": "Kaydın veritabanında başarılı olup olmadığına göre değişen durum mesajı"
        },
        "status": {
          "type": "integer",
          "description": "Kaydın durumuna göre değişen HTML durum kodu"
        }
      }
    }
  },
  "externalDocs": {
    "description": "Word dökümantasyonu",
    "url": "https://docs.google.com/a/sanalreyonum.com/document/d/16jsw1GJymbKLplTPo1jfXgQzpiRfw1nJfbIHqM7EwGw/edit?usp=sharing"
  }
}


window.swaggerUi = new SwaggerUi({
    url: url,
    spec: spec,
    dom_id: "swagger-ui-container",
})
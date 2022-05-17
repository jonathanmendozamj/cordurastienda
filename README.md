# Tienda Corduras
> Este es un proyecto realizado para el curso de React JS de CODERHOUSE, camada 31145. Se trata de una página de e-commerce de una tienda de indumentaria.

## Instalación mediante git clone
Si querés clonar este proyecto de forma local, tendrás que ejecutar los siguientes comandos en la terminal de forma secuencial: 
```sh
git clone https://github.com/jonathanmendozamj/cordurastienda
npm install 
npm start
```

## Dependencias
Se instalaron las siguientes dependencias en este proyecto.
•	react-router-dom (v. 6.3.0): realizar el routing dentro de la página web.
•	sweetalert2 (v. 11.4.10): mostrar alerts.
•	firebase (v. 9.6.11): guardar datos de los productos, órdenes y categorías.
•	react-bootstrap (v. 2.2.1): realizar estilos de manera responsiva.
•	react-icons (v. 4.3.1): íconos personalizados.
•	sass (v. 1.50.0): trabajar con estilos con características que no tiene el CSS nativo.

## Firebase
En Firebase se encuentran las siguientes colecciones. Se describirán las mismas junto con los campos que componen cada uno de los objetos de cada colección correspondiente.

Products (productos)
Se refiere a los productos que se ofrecen a la venta en el e-commerce.
| Campo | Tipo | Descripción |
| ------ | ------ |---------|
| category | string | Determina la categoría en la que se encuentra el producto |
| description | string | Desarrolla las características del producto |
| img | string | En él, se encuentra la ruta de la imagen del producto correspondiente |
| name  | string | Describe el nombre del producto |
| price | number | Contiene el precio del producto |
| stock | number | Contiene las unidades en existencia disponibles para la venta |

Categories (categorías)
Se refiere a las categorías en las cuales se clasifican los productos.
| Campo | Tipo | Descripción |
| description | string | Contiene el nombre de la categoría |
| order | number | Contiene el orden en el cual debe ser mostrado en el proyecto |

Orders (órdenes de compra)
Se refiere a las distintas órdenes de compra que se han generado dentro del proyecto.
| Campo | Tipo | Descripción |
| buyer | map | Contiene los datos del cliente |
| date | date | Contiene la fecha y hora que fue confirmada la orden de compra |
| items | array | Contiene los productos que componen esa compra |
| total | number | Es el valor total de la orden de compra |

El campo “buyer”, del tipo map, tiene los siguientes campos 
| Campo | Tipo | Descripción |
| name | string | Contiene el nombre y apellido del cliente |
| email | string | Contiene el mail del cliente |
| phone | string | Contiene el número de teléfono del cliente |

# Vista previa
A continuación se muestra una vista previa del proyecto mostrando su navegación dentro del mismo.

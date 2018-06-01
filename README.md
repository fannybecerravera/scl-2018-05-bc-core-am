# "Cifrado Cesar”
## Bienvenida/o:

Esta aplicación está basada en el cifrado Cesar el cual consiste en la sustitución, donde la letra original es reemplaza por otra, dependiendo del número de posiciones que nos desplacemos, tomando el valor de otra letra del alfabeto.
Por ejemplo, si usáramos un desplazamiento de 3:

* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

## Para que sirve la aplicación:

Nos permite utilizar un lenguaje personalizado, el cual solo entenderán las personas a quienes le demos el número de posiciones que desplazamos la letra.  En la vida cotidiana nos puede servir para la organización de una fiesta sorpresa, para conversar con nuestros amigos sin tener que borrar nuestras conversaciones por si en algún momento a tus padres les da curiosidad revisar tu celular, etc.
Hoy en día la comunicación es mucho más rápida. Es por esto que esta aplicación nos facilita el cifrado y descifrado de nuestro mensaje, para así no tener que estar haciéndolo de manera manual y no perder tanto tiempo. 

## Instalación de la aplicación:

* Lo primero que debemos hacer es verificar si tenemos instalado GIT y NODE.
* Luego desde nuestra terminal posicionarnos en la carpeta donde quieres que se guarde la aplicación.
* Ahora entrar a https://github.com/fannybecerravera/scl-2018-05-bc-core-am ,  y  hacer fork.
Luego clona tu fork en tu computadora (copia local)
* Instala la aplicación, escribiendo en tu terminal npm install.

## Modo de uso

* Debes escoger el número de posiciones que quieres que se desplace la letra para cifrar o descifrar.
* Escribe tu mensaje con letra mayúsculas.
* Remplaza la "ñ" por "n".
* Y dale click al botón cifrar (si quieres cifrar tu mensaje).
* O dale click al botón descifrar (si quieres descifrar tu mensaje).

## Decisiones de diseño:

Una de las decisiones de diseño importante de tener en consideración es que solo cifra o descifra en letras mayúsculas, porque el código que escribí solo considera las letras mayúsculas en el código ASCII.
No fue considerada la letra ñ porque el lenguaje de programación da bastantes errores por lo que se decidió remplazar la ñ por la n.
Y el código si considera los espacios al estar escribiendo el mensaje. 



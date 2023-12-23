# Piggybank

## Proposal

Learn and get better with React. Also practice english
writing better docs.

## Dependencies

- Husky

- Prettier

- Vitest

- Testing library



# i18next


## Instalación de i18next

https://react.i18next.com/

> ``npm install react-i18next i18next --save``

Tras instalar **i18next** creamos el fichero **i18n.ts**. Vamos a crearlo dentro de la
carpeta **core**:

-- app
    -- core
    - i18n.ts


````typescript

import i18next from "i18next";
import {initReactI18next} from 'react-i18next'
import en from '../../public/locales/translations/en.json';
import es from '../../public/locales/translations/es.json';

i18next.use(initReactI18next)
.init({
    resources: {
        en: {
            translation: en
        },
        es: {
            translation: es
        }
    },
    fallbackLng: "en"
})


````

> Nota: Inicializamos así i18n para poder tener las traducciones en un fichero aparte.

> Nota: Es SUPER IMPORTANTE la propiedad ``fallbackLng: "en"``. Si i18n no puede detectar de ninguna
> manera qué lenguaje estamos utilizando, **no funcionará**. Existen otras maneras de hacer que lo detecte
> automática, pero aquí estableceremos (de momento) el idioma por defecto en English (en).


A continuación creamos los ficheros de traducciones dentro de public. Fíjate que en los **imports** del fichero
**i18n** ya hemos especificado su localización:

>
>````
>import en from '../../public/locales/translations/en.json';
>import es from '../../public/locales/translations/es.json';
>````
>

Mediante la instrucción

```json
{
  resources: {
    en: {
      translation: en
    }
  }
}
```

Estamos indicándole a i18n que **debe de utilizar el fichero json que hemos importado para hacer su traducción**. Ahora, para traducir
algo, debemos hacer lo siguiente:

```typescript jsx
	<p>
		{ i18next.t('Welcome')}
	</p>

```

mediante la función ``t`` (también la podemos obtener del hook `useTranslation()`)
pasamos la **key** de nuestra traducción deseada. En el fichero que creamos anteriormente
llamado ``en.json``:

```json
{
  "Welcome": "Welcome to piggybank, your own saving bank. Note down your expenses, put your own limits and forget about the annoying calculates"
}
```

Añadimos la key con su traducción de esta manera.

Ahora, **i18next** hará el enlace y nos traducirá correctamente la key.

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

> `npm install react-i18next i18next --save`

Tras instalar **i18next** creamos el fichero **i18n.ts**. Vamos a crearlo dentro de la
carpeta **core**:

-- app
-- core - i18n.ts

```typescript
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../../public/locales/translations/en.json'
import es from '../../public/locales/translations/es.json'

i18next.use(initReactI18next).init({
	resources: {
		en: {
			translation: en,
		},
		es: {
			translation: es,
		},
	},
	fallbackLng: 'en',
})
```

> Nota: Inicializamos así i18n para poder tener las traducciones en un fichero aparte.

> Nota: Es SUPER IMPORTANTE la propiedad `fallbackLng: "en"`. Si i18n no puede detectar de ninguna
> manera qué lenguaje estamos utilizando, **no funcionará**. Existen otras maneras de hacer que lo detecte
> automática, pero aquí estableceremos (de momento) el idioma por defecto en English (en).

A continuación creamos los ficheros de traducciones dentro de public. Fíjate que en los **imports** del fichero
**i18n** ya hemos especificado su localización:

> ```
> import en from '../../public/locales/translations/en.json';
> import es from '../../public/locales/translations/es.json';
> ```

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

mediante la función `t` (también la podemos obtener del hook `useTranslation()`)
pasamos la **key** de nuestra traducción deseada. En el fichero que creamos anteriormente
llamado `en.json`:

```json
{
	"Welcome": "Welcome to piggybank, your own saving bank. Note down your expenses, put your own limits and forget about the annoying calculates"
}
```

Añadimos la key con su traducción de esta manera.

Ahora, **i18next** hará el enlace y nos traducirá correctamente la key.

# React Testing Library

## El elemento aparece **dos veces** en diferentes tests

Teníamos este caso:

```typescript jsx
describe('Link Navigator',() => {

        test('should render link', () => {
            const { getByRole } = render(
                <MemoryRouter>
                    <NavLink theme={'primary'} path={''} role={'link'} type={'button'} />
                </MemoryRouter>
                )
            const link = getByRole('link');

            expect(link.className).toContain('primary');
        });

    test('should go to path', () => {
        const { getByRole  } = render(
            <MemoryRouter>
                <NavLink theme={'primary'} path={'saving/new'} role={'link'} type={'button'} />
            </MemoryRouter>
            )
        const link = getByRole('link') as Element;

        link.dispatchEvent(new Event('click'));

        expect(window.location.href).toBe('saving/new');

    })
})
```

Y lo que ocurría es que aparecía **dos veces** renderizado el elemento **NavLink**, lo que causaba
un error al intentar obtener el elemento por rol (ya que estaba **dos veces**). Para evitar eso y **limpiar** el DOM,
debemos añadir lo siguiente:

```typescript
afterEach(() => {
	cleanup()
})
```

Y así queda el test:

```typescript jsx
describe('Link Navigator',() => {
    afterEach(() => {
        cleanup()
    })

        test('should render link', () => {
            const { getByRole } = render(
                <MemoryRouter>
                    <NavLink theme={'primary'} path={''} role={'link'} type={'button'} />
                </MemoryRouter>
                )
            const link = getByRole('link');

            expect(link.className).toContain('primary');
        });

    test('should go to path', () => {
        const { getByRole  } = render(
            <MemoryRouter>
                <NavLink theme={'primary'} path={'saving/new'} role={'link'} type={'button'} />
            </MemoryRouter>
            )
        const link = getByRole('link') as Element;

        link.dispatchEvent(new Event('click'));

        expect(window.location.href).toBe('saving/new');

    })
})
```

## ¿useRef()?

`useRef` puede utilizarse **desde dentro** del componente o **desde dentro _hacia_ fuera del componente**, permitiendo al padre
acceder a funciones del hijo.

## Задание

Создай галерею с возможностью клика по ее элементам и просмотра полноразмерного
изображения в модальном окне. Превью результата посмотри
[по ссылке](https://take.ms/ZvBD0E).

Разбей задание на несколько подзадач:

- Создание и рендер разметки по массиву данных и предоставленному шаблону.
- Реализация делегирования на галерее `ul.js-gallery` и получение `url` большого
  изображения.
- Открытие модального окна по клику на элементе галереи.
- Подмена значения атрибута `src` элемента `img.lightbox__image`.
- Закрытие модального окна по клику на кнопку
  `button[data-action="close-lightbox"]`.
- Очистка значения атрибута `src` элемента `img.lightbox__image`. Это необходимо
  для того, чтобы при следующем открытии модального окна, пока грузится
  изображение, мы не видели предыдущее.

## Стартовые файлы

- В папке [src](./src) ты найдешь стартовые файлы проекта с базовой разметкой и
  готовыми стилями.
- В файле [gallery-items.js](./src/gallery-items.js) есть массив объектов
  содержащих информацию о изображениях: маленькое изображение, оригинальное и
  описание.

## Разметка элемента галереи

Ссылка на оригинальное изображение должна храниться в data-атрибуте `source` на
элементе `img`, и указываться в `href` ссылки (это необходимо для доступности).

```html
<li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li>
```

## Дополнительно

- Закрытие модального окна по клику на `div.lightbox__overlay`.
- Закрытие модального окна по нажатию клавиши `ESC`.
- Пролистывание изображений галереи в открытом модальном окне клавишами "влево"
  и "вправо".

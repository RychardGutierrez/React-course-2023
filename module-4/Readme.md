# Learning to pass test technique to React

### Content

- Introducción
- Inicializamos el proyecto
- Truco sobre los estilos
- Empezamos a escribir código
- Estilos básicos de nuestra app
- Truco al usar APIs
- ¡No hagas esto en React!
- Evita depender del contrato de la API
- Crea un custom hook useMovies
- Manejar formularios y hook useRef
- Usa formData para recuperar todos los datos del formulario
- Controlar formularios con React
- Cuidado con leer estados previos
- Estilar inputs según errores
- Volvemos a explicar useRef
- Extraer a useSearch a Custom Hook
- Usar useRef para detectar cuando es la primera vez
- Estilar como grid los resultados
- Fetching de datos
- Extraer lógica a servicio
- Evitar la misma búsqueda con useRef
- Ordenar películas por año de lanzamiento
- Cómo usar useMemo para mejorar rendimiento y evitar cálculos
- Usar useMemo para evitar recrear función en cada render
- Cómo usar useCallback
- Crear una función debounce desde cero

## Note

Create an app for movies search

API to use:
 - https://www.omdbapi.com/
 - API_KEY = 4287ad07

Requirements:
- Need to display an input to search for the movie and button to search.
- List the movies and show the title, year and poster.
- Get the form to work.
- Make the movies display in a responsive grid.
- Do the data fetching to the API.

Fitst iteration:
- Prevent the same search from being done twice in a row.
- Have the search done automatically on typing.
- Prevent the search from being done continuously on typing. (debounce)

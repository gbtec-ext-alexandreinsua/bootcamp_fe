## Norma general
Cada día actualizar development.
1. `git checkout development`
2. `git pull`

Cada días actualizar la rama de trabajo.
1. `git checkout [nombre de la rama]`
2. `git merge development`

## Crear issues
Añadir una descripción de lo que hay que hacer

## Resolver issue
Asignarse el issue
En local, crear la rama desde development actualizado
1. `git checkout development`
2. `git pull`
3. `git checkout -b [issue-XX]`

Resolver issue, hacer cambios, añadirlos y pushear la rama.


## Crear la PR

### Estructura del nombre de las pull request.

Issue # número + titulo

Ej `Issue #67  resuelta - carpeta 10-modelo-de-caja creada `

### En la descripción añadir el comentario para cerrar el issue
Close #XX

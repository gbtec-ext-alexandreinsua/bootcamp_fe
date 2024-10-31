# FLUJO DE TRABAJO (GITFLOW)

## Rutina diaría de trabajo

1. Actualizar repositorio local. En la rama de trabajo 'development' se ejecuta un `git pull`.
2. Actualizar las ramas de trabajo. Moverse a la rama de trabajo con `git checkout [nombre de la rama]` y actualizar con `git merge development`.

## Flujo de trabajo para resolver issues

1.  Cada pareja crea una rama especifica por tarea, la sube a repo y crea la PR, pero NO la mergea
    número issue + nombre archivo
    12/hola-mundo
2.  subir rama
3.  crear PR y dejarla abierta
    nombre de la PR # + numero de issue + titulo explicativo
    #12 Resuelve el link roto

        En la descripción se debe incluir lo siguiente:
        Closes #12

4.  Cuando se abre la PR, se anuncia por el canal de teams
5.  Si una pareja está libre, anuncia que va a revisar un PR anunciada y la revisa.
6.  Un issue no se cierra hasta que se apruebe la PR.

## Flujo de trabajo para revisar PR

1. Descargar rama: pull main > checkout rama
2. Comprobar código
3. Comprobar funcionamiento
4. Comprobar la rama donde se va a hacer el merge
5. Resultado
   a. Si el código es correcto y funciona correctamente, se aprueba
   b. Si el código se puede mejorar, se comenta y se avisa por privado.
   c. Si el código no es correcto o no funciona correctamente, hay que agregar un comentario y avisar con un privado al asignado
6. Cuando una PR tiene dos aprobaciones, se hace el merge en la rama correspondiente.

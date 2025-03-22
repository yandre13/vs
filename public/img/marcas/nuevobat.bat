@echo off
setlocal enabledelayedexpansion

rem Crea (o sobreescribe) filelist.txt en la carpeta actual
> filelist.txt (
  echo Archivo de rutas de todos los archivos en %cd%
  echo.

  rem Listar los archivos que están en la carpeta raíz
  echo Folder: %cd%
  for %%f in (*.*) do (
     echo    %%~ff
  )
  echo.

  rem Recorrer todos los subdirectorios y listar los archivos de cada uno
  for /d /r %%d in (*) do (
      echo Folder: %%~fd
      for %%f in ("%%d\*.*") do (
         echo    %%~ff
      )
      echo.
  )
)

echo El archivo filelist.txt se ha creado en %cd%.
pause

@echo off
setlocal enabledelayedexpansion

rem Se crea (o sobrescribe) filelist.txt en la carpeta actual
> filelist.txt (
  echo Archivo de rutas de todos los archivos en %cd%
  echo.

  rem Listar archivos en la carpeta actual, ordenados por fecha de creación
  echo Folder: %cd%
  for /f "delims=" %%f in ('dir /b /a:-d /t:c /o:d') do (
     echo    %cd%\%%f
  )
  echo.

  rem Recorrer todos los subdirectorios y listar los archivos ordenados
  for /d /r %%d in (*) do (
      echo Folder: %%~fd
      for /f "delims=" %%f in ('dir "%%d\*.*" /b /a:-d /t:c /o:d') do (
         echo    %%~fd\%%f
      )
      echo.
  )
)

echo El archivo filelist.txt se ha creado en %cd%.
pause

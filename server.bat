@echo off
set port=8000

:: Call the subroutine to check if the port is in use
call :check_port %port%
if %errorlevel% equ 0 (
    echo Port %port% is in use
    exit /b 1
) else (
    echo Port %port% is not in use
    REM: Start the server
    python -m http.server %port%
    exit /b 0
)

:: Subroutine definition
:check_port
    :: Use netstat to check if the port is in use. This is a simplistic check.
    netstat -an | findstr /R /C:":%1 " >nul 2>&1
    if errorlevel 1 (
        exit /b 1  :: Port is not in use
    ) else (
        exit /b 0  :: Port is in use
    )

REM End of script
```


@echo off
cd /d "%~dp0"
echo Starting local web server...
echo.
echo Your website will be available at: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.
npx --yes http-server -p 8000 -o
pause

@echo off
title OS Installation Website Server
color 0A
echo ========================================
echo   OS Installation Website Launcher
echo ========================================
echo.
echo Starting web server...
echo.
cd /d "%~dp0"
start "" "http://localhost:8000/index.html"
npx --yes http-server -p 8000
pause

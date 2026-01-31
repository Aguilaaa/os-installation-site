# Change to script directory
Set-Location $PSScriptRoot

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  OS Installation Website Launcher" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Starting web server..." -ForegroundColor Green
Write-Host ""

# Open browser automatically
Start-Process "http://localhost:8000/index.html"

# Start server
if (Get-Command npx -ErrorAction SilentlyContinue) {
    npx --yes http-server -p 8000
} else {
    Write-Host "Error: Node.js not found!" -ForegroundColor Red
    Write-Host "Please install Node.js from nodejs.org" -ForegroundColor Yellow
    pause
}

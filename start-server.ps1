# Change to script directory
Set-Location $PSScriptRoot

Write-Host "Starting local web server..." -ForegroundColor Green
Write-Host ""
Write-Host "Your website will be available at: http://localhost:8000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Check if Node.js is available (preferred)
if (Get-Command npx -ErrorAction SilentlyContinue) {
    npx --yes http-server -p 8000 -o
} elseif (Get-Command python -ErrorAction SilentlyContinue) {
    python -m http.server 8000
} elseif (Get-Command python3 -ErrorAction SilentlyContinue) {
    python3 -m http.server 8000
} else {
    Write-Host "Error: Neither Node.js nor Python found." -ForegroundColor Red
    Write-Host "Please install Node.js from nodejs.org" -ForegroundColor Yellow
    pause
}

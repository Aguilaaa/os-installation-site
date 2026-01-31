# How to View Your Website Properly

## The Problem
YouTube blocks video embedding when HTML files are opened directly (using `file://` protocol). This causes "Error 153" even when embedding is enabled.

## The Solution
Use a local web server to view your website. This allows YouTube videos to embed properly.

## Quick Start

### Option 1: Using Python (Recommended)
1. Open PowerShell or Command Prompt in this folder
2. Run: `python -m http.server 8000`
3. Open your browser and go to: `http://localhost:8000`
4. Navigate to `index.html`

### Option 2: Using the Batch File (Windows)
1. Double-click `start-server.bat`
2. Open your browser and go to: `http://localhost:8000`
3. Navigate to `index.html`

### Option 3: Using PowerShell Script
1. Right-click `start-server.ps1` → "Run with PowerShell"
2. Open your browser and go to: `http://localhost:8000`
3. Navigate to `index.html`

### Option 4: Using Node.js
If you have Node.js installed:
1. Run: `npx http-server -p 8000`
2. Open your browser and go to: `http://localhost:8000`

## Why This Works
- Local servers use `http://` protocol instead of `file://`
- YouTube allows embedding from `http://localhost` and `http://127.0.0.1`
- Your videos will now embed and play directly on your site!

## Stopping the Server
Press `Ctrl+C` in the terminal window to stop the server.

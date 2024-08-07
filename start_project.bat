@echo off
echo Starting your project...

REM Navigate to the root directory containing index.html
cd "%~dp0"

REM Start a local server using Python's SimpleHTTPServer (Python 3)
start cmd /k "python -m http.server 8000"

REM Wait a few seconds for the server to start
timeout /t 5

REM Open index.html in the default web browser
start "" "http://localhost:8000/index.html"

REM Navigate to the directory containing your React app
cd "%~dp0react_app/article5"

REM Start React app
start cmd /k "npm start"

REM Navigate to the directory containing your Node.js server
cd "%~dp0file_upload_node"

REM Start nodemon for the server
start cmd /k "nodemon app.js"

echo Project started.
pause

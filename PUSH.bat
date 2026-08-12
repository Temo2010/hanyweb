@echo off
setlocal enabledelayedexpansion

REM ============================================
REM  Auto-push this folder to GitHub
REM  Repo: https://github.com/Temo2010/hani-s-egypt-journeys
REM  Just double-click this file to commit + push.
REM ============================================

set REPO_URL=https://github.com/Temo2010/hani-s-egypt-journeys.git
set BRANCH=main

REM Move to the folder this .bat file lives in
cd /d "%~dp0"

echo.
echo === Pushing "%cd%" to GitHub ===
echo.

REM Check git is installed
where git >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Git is not installed or not on PATH.
    echo Download it from https://git-scm.com/downloads and try again.
    pause
    exit /b 1
)

REM Initialize repo if this folder isn't a git repo yet
if not exist ".git" (
    echo No git repo found here - initializing one...
    git init
    git branch -M %BRANCH%
)

REM Add the GitHub remote if it isn't set yet
git remote get-url origin >nul 2>nul
if errorlevel 1 (
    echo Adding remote "origin" -> %REPO_URL%
    git remote add origin %REPO_URL%
) else (
    echo Remote "origin" already configured.
)

REM Stage everything
echo.
echo Staging all changes...
git add -A

REM Commit only if there's something to commit
git diff --cached --quiet
if errorlevel 1 (
    for /f "tokens=1-4 delims=/ " %%a in ('date /t') do set TODAY=%%a-%%b-%%c
    set TIME_NOW=%time%
    git commit -m "Auto update !TODAY! !TIME_NOW!"
) else (
    echo Nothing new to commit - skipping commit step.
)

REM Push (force upstream link on first push)
echo.
echo Pushing to %REPO_URL% (%BRANCH%)...
git push -u origin %BRANCH%

if errorlevel 1 (
    echo.
    echo [ERROR] Push failed. Common causes:
    echo   - You are not logged in / no credentials cached
    echo   - The remote repo already has commits that conflict
    echo     ^(try: git pull origin %BRANCH% --allow-unrelated-histories^)
    echo   - No internet connection
    pause
    exit /b 1
)

echo.
echo === Done! Your project is up to date on GitHub. ===
pause
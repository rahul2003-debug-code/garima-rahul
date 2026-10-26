@echo off
echo ========================================================
echo   GARIMA & RAHUL WEDDING INVITATION CARD - DEPLOYMENT
echo ========================================================
echo.
echo 1. Git Status Check...
git status
echo.
echo 2. Adding all files to git...
git add .
echo.
echo 3. Committing changes...
git commit -m "Royal wedding invitation web card for Garima & Rahul (11 Nov 2026)"
echo.
echo 4. Pushing to GitHub (main branch)...
git push -u origin main
echo.
echo 5. Building and deploying to GitHub Pages (gh-pages)...
npm run deploy
echo.
echo ========================================================
echo   DEPLOYMENT FINISHED!
echo   Website URL: https://rahul2003-debug-code.github.io/garima-rahul/
echo ========================================================
pause

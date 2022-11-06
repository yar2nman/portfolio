echo 'Deploying the app to Firebase Hosting'
echo 'Building the app'
npm run build
echo 'Deploying to Firebase'
firebase deploy --only hosting:ahmed-portfolio-3b24f
echo 'Done'
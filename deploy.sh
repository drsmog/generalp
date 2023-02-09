npm run build
aws s3 cp ./build/ s3://spellbooklabs.com/ --recursive
aws cloudfront create-invalidation --distribution-id EXIWHS09DK4XM --paths "/*"


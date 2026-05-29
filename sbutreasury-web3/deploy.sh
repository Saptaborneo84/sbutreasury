#!/bin/bash

echo "Starting SBUTreasury deployment..."

rm -rf .next

NODE_OPTIONS="--max-old-space-size=2048" npm run build

pm2 restart sbutreasury-web3 --update-env

pm2 save

nginx -t

systemctl restart nginx

echo "Deployment completed."

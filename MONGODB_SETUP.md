# MongoDB Atlas IP Whitelist Setup

Your application is currently running with mock product data because the MongoDB Atlas cluster requires IP whitelisting.

## Fix MongoDB Connection Issue

Follow these steps to allow Replit to connect to your MongoDB Atlas cluster:

### Step 1: Log into MongoDB Atlas
1. Go to https://cloud.mongodb.com/
2. Log in with your credentials

### Step 2: Navigate to Network Access
1. Click on "Network Access" in the left sidebar (under SECURITY section)
2. Click the "ADD IP ADDRESS" button

### Step 3: Whitelist All IP Addresses (for Development)
1. Click "ALLOW ACCESS FROM ANYWHERE"
2. This will add `0.0.0.0/0` to your IP whitelist
3. Click "Confirm"

**Note**: For production, you should restrict this to specific IP addresses, but for development/testing, allowing all IPs is acceptable.

### Step 4: Wait for Changes to Apply
- It may take 1-2 minutes for the changes to propagate

### Step 5: Restart Your Server
1. Stop the server workflow in Replit
2. Start it again
3. The server should now connect to MongoDB successfully

### Step 6: Seed the Database
Run this command in the Replit shell:
```bash
cd server && node scripts/seedProducts.js
```

This will populate your database with 20 products.

## Verify Connection

Once configured, you should see this message in your server logs:
```
MongoDB Connected: cluster0-shard-00-00.em0f43b.mongodb.net
```

## Current Status

✅ Application is running with 20 mock products
✅ All features work (cart, checkout, payment)
⚠️ Products are not persisted to database (temporary mock data)

Once you complete the IP whitelist setup, the application will automatically connect to MongoDB and use real database storage.

## Troubleshooting

If you still can't connect after whitelisting:
1. Verify your MongoDB password is correct
2. Check that your cluster is running (not paused)
3. Ensure you're using the correct connection string
4. Wait a few more minutes for DNS propagation

For more help, visit: https://www.mongodb.com/docs/atlas/security-whitelist/

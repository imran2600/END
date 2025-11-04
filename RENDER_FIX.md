# How to Fix Render Deployment

## The Problem
You created a **Web Service** instead of a **Static Site**. Web Services require a start command, but Static Sites don't.

## Solution: Create as Static Site (Recommended)

### Option 1: Delete and Recreate (Easiest)

1. **Delete the current Web Service:**
   - Go to your Render dashboard
   - Find your service
   - Click "Settings" → Scroll to bottom → "Delete Service"

2. **Create a NEW Static Site:**
   - Click "New +" → **"Static Site"** (NOT Web Service!)
   - Connect your GitHub repo
   - Configure:
     - **Name**: `cinetours` (or your choice)
     - **Branch**: `main`
     - **Build Command**: `npm install && npm run build`
     - **Publish Directory**: `build`
     - **Start Command**: (Leave empty - Static Sites don't need this!)

3. Click "Create Static Site"

### Option 2: Keep as Web Service (If you must)

If you need to keep it as a Web Service, you'll need to:

1. Install `serve` package:
```bash
npm install --save-dev serve
```

2. Set the Start Command in Render:
```
npx serve -s build -l $PORT
```

But **Option 1 (Static Site) is recommended** for React apps because:
- ✅ No server needed
- ✅ Faster deployments
- ✅ Free tier friendly
- ✅ Simpler configuration

## Quick Checklist

When creating the service, make sure you see:
- ✅ "Static Site" selected (not "Web Service")
- ✅ Build Command: `npm install && npm run build`
- ✅ Publish Directory: `build`
- ✅ No Start Command field (or it's optional)


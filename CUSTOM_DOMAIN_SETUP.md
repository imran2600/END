# Connect SquareSpace Domain to Render

## Step 1: Add Custom Domain in Render

1. Go to your Render Dashboard
2. Click on your service (the React app)
3. Go to **Settings** tab
4. Scroll down to **"Custom Domains"** section
5. Click **"Add Custom Domain"**
6. Enter your domain name (e.g., `yourdomain.com` or `www.yourdomain.com`)
7. Click **"Save"**

Render will provide you with DNS records you need to configure.

## Step 2: Get DNS Records from Render

After adding the domain, Render will show you:
- **CNAME record** (for www subdomain)
- **A record** or **ALIAS record** (for root domain)

**Example:**
- For `www.yourdomain.com`: CNAME pointing to `your-service.onrender.com`
- For `yourdomain.com`: ALIAS pointing to `your-service.onrender.com`

**Note:** Copy these values - you'll need them for SquareSpace DNS settings.

## Step 3: Configure DNS in SquareSpace

### Option A: If you manage DNS through SquareSpace

1. Log into your SquareSpace account
2. Go to **Settings** → **Domains**
3. Click on your domain
4. Click **"DNS Settings"** or **"Advanced DNS"**
5. Add the DNS records provided by Render:

**For www subdomain:**
- **Type**: `CNAME`
- **Host**: `www`
- **Points to**: `your-service.onrender.com` (the value Render gives you)
- **TTL**: `3600` (or leave default)

**For root domain (apex domain):**
- **Type**: `ALIAS` or `ANAME` (if available)
- **Host**: `@` or leave blank
- **Points to**: `your-service.onrender.com` (the value Render gives you)
- **TTL**: `3600`

**If ALIAS is not available:**
- You may need to use an A record instead
- Render will provide the IP address to point to

### Option B: If DNS is managed elsewhere

If your domain's DNS is managed by another provider (like Namecheap, GoDaddy, etc.):
1. Go to that provider's DNS settings
2. Add the same records there

## Step 4: Verify SSL Certificate

1. After adding DNS records, Render will automatically:
   - Detect the domain
   - Issue an SSL certificate (this can take 5-60 minutes)
2. Check back in Render dashboard - the domain status should show:
   - ✅ **"Verified"** when DNS is configured correctly
   - 🔒 **"SSL Certificate Issued"** when HTTPS is ready

## Step 5: Wait for DNS Propagation

- DNS changes can take **15 minutes to 48 hours** to propagate
- Usually takes **1-2 hours** in most cases
- You can check propagation status at: https://www.whatsmydns.net

## Troubleshooting

### Domain not verifying?
- Double-check DNS records match exactly what Render provided
- Wait 15-30 minutes after making changes
- Use `dig` or `nslookup` to verify DNS is pointing correctly

### SSL certificate not issued?
- Wait up to 60 minutes after DNS verification
- Make sure DNS is properly configured
- Check that your domain is accessible via HTTP first

### Want to use both www and non-www?
- Add both domains in Render:
  - `yourdomain.com`
  - `www.yourdomain.com`
- Configure DNS for both:
  - Root domain: ALIAS to Render
  - www: CNAME to Render

## Quick Checklist

- [ ] Added domain in Render dashboard
- [ ] Copied DNS records from Render
- [ ] Added CNAME record for www in SquareSpace
- [ ] Added ALIAS/A record for root domain in SquareSpace
- [ ] Waited for DNS propagation (15 min - 2 hours)
- [ ] Verified domain in Render dashboard
- [ ] SSL certificate issued automatically

## Need Help?

If you need specific DNS values:
1. Go to Render → Your Service → Settings → Custom Domains
2. The exact values will be shown there
3. Use those exact values in your SquareSpace DNS settings


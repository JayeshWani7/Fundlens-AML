# Vercel Deployment - Quick Setup Guide

## Step 1: Seed Production Databases

Your production database credentials are in `.env.production` (DO NOT commit this file!)

Run the seed script to populate your databases:

```bash
python seed_production.py
```

This will:
- ✅ Create 4 cases in Neon PostgreSQL
- ✅ Create 4 alerts with GNN scores
- ✅ Create 6 accounts in Neo4j Aura
- ✅ Create 8 fund transfer relationships
- ✅ Create 3 evidence blocks
- ✅ Publish test alert to Upstash Redis

## Step 2: Push to GitHub

```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

**IMPORTANT**: Verify `.env.production` is NOT in your commit:
```bash
git status  # Should NOT show .env.production
```

## Step 3: Deploy to Vercel

### Option A: Vercel Dashboard (Recommended)

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub repository
4. Vercel will auto-detect the configuration

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

## Step 4: Add Environment Variables in Vercel

Go to your project → Settings → Environment Variables

Add these (copy from `.env.production`):

| Variable | Value |
|----------|-------|
| `NEO4J_URI` | `neo4j+s://cae5a9ac.databases.neo4j.io` |
| `NEO4J_USER` | `neo4j` |
| `NEO4J_PASSWORD` | `svD8FaiiIMFBA__WYPOHZ-ifMHk6M4FmFkERmp7QIKU` |
| `POSTGRES_DSN` | `postgresql://neondb_owner:npg_QB7j2VskgtzJ@ep-shy-king-aqefq93j.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require` |
| `REDIS_URL` | `rediss://default:gQAAAAAAAiT1AAIgcDJmODI3ZTNlNTc3YjM0N2RiOTJjN2NhZDNkN2QxNmZiOA@superb-louse-140533.upstash.io:6379` |
| `API_HOST` | `0.0.0.0` |
| `API_PORT` | `8000` |
| `ALERTS_CHANNEL` | `alerts` |

**Optional (can leave as defaults):**
- `KAFKA_BOOTSTRAP` = `localhost:9092`
- `GNN_SCORE_URL` = `http://localhost:8001/score`

## Step 5: Deploy

Click "Deploy" in Vercel dashboard or run:

```bash
vercel --prod
```

Build time: ~3-5 minutes

## Step 6: Test Your Deployment

Once deployed, test these URLs (replace `your-app` with your Vercel domain):

```bash
# Health check
curl https://your-app.vercel.app/api/health

# Should return:
# {"status": {"neo4j": true, "postgres": true, "redis": true}}

# Alerts
curl https://your-app.vercel.app/api/alerts

# Cases
curl https://your-app.vercel.app/api/cases

# Graph
curl https://your-app.vercel.app/api/graph/CASE-2847

# Entity
curl https://your-app.vercel.app/api/entities/ACC-0041
```

## Step 7: Open Frontend

Visit your Vercel URL in browser:
```
https://your-app.vercel.app
```

You should see:
- ✅ Investigation Dashboard with 4 real alerts
- ✅ Click on CASE-2847 → see case details
- ✅ Click "View Fund Flow Graph" → see the graph
- ✅ Click on ACC-0041 → see entity profile
- ✅ Navigate to STR Generation → generate report
- ✅ Save draft, export PDF, submit to FIU-IND

## Troubleshooting

### Build Fails
- Check Vercel build logs
- Verify `requirements.txt` is correct
- Ensure all files are committed

### API Returns 500
- Check Vercel function logs
- Verify environment variables are set correctly
- Test database connections from local machine

### Health Check Shows False
- **neo4j: false** → Check Neo4j URI and password
- **postgres: false** → Check PostgreSQL connection string
- **redis: false** → Check Redis URL (should start with `rediss://` for TLS)

### Frontend Shows "Could not load alerts"
- Check browser console for errors
- Verify API health endpoint returns all true
- Check CORS configuration in `backend/api/main.py`

## Important Notes

### Redis URL Format
Your Redis URL should use `rediss://` (with double 's') for TLS:
```
rediss://default:password@host:6379
```

### Neo4j URI Format
Your Neo4j URI should use `neo4j+s://` for secure connection:
```
neo4j+s://instance-id.databases.neo4j.io
```

### PostgreSQL SSL Mode
Your PostgreSQL connection string should include `?sslmode=require`:
```
postgresql://user:pass@host:5432/db?sslmode=require
```

## Database Management

### View Neo4j Data
1. Go to https://console.neo4j.io
2. Open your database
3. Click "Query" tab
4. Run: `MATCH (n) RETURN n LIMIT 25`

### View PostgreSQL Data
1. Go to https://console.neon.tech
2. Open your project
3. Click "SQL Editor"
4. Run: `SELECT * FROM cases;`

### View Redis Data
1. Go to https://console.upstash.com
2. Open your database
3. Click "Data Browser"
4. Run: `KEYS *`

## Next Steps

After successful deployment:
- [ ] Set up custom domain (optional)
- [ ] Enable Vercel Analytics
- [ ] Set up error monitoring (Sentry)
- [ ] Configure rate limiting
- [ ] Set up CI/CD for automatic deployments

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Neo4j Aura Docs**: https://neo4j.com/docs/aura/
- **Neon Docs**: https://neon.tech/docs
- **Upstash Docs**: https://docs.upstash.com/redis

---

**Your Deployment Info:**
- Neo4j Instance: `cae5a9ac.databases.neo4j.io`
- PostgreSQL: `ep-shy-king-aqefq93j.c-8.us-east-1.aws.neon.tech`
- Redis: `superb-louse-140533.upstash.io`
- Status: ⬜ Not deployed yet
- Vercel URL: ___________________________

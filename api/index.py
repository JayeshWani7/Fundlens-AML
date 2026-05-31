"""
Vercel serverless function entry point for FastAPI backend.
This wraps the FastAPI app with Mangum for AWS Lambda/Vercel compatibility.
"""
from mangum import Mangum
from backend.api.main import app

# Mangum handler for Vercel serverless functions
handler = Mangum(app, lifespan="off")

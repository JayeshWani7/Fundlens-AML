from contextlib import contextmanager

import psycopg

from backend.core.config import settings


@contextmanager
def get_conn():
    with psycopg.connect(settings.postgres_dsn) as conn:
        yield conn


def connect() -> None:
    # No-op for serverless — connections are made per-request
    pass


def close() -> None:
    # No-op for serverless
    pass


def _ensure_schema() -> None:
    with get_conn() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS alerts (
                id SERIAL PRIMARY KEY,
                case_id TEXT NOT NULL,
                typology TEXT NOT NULL,
                gnn_score NUMERIC NOT NULL,
                created_at TIMESTAMPTZ DEFAULT NOW(),
                payload JSONB
            );
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS cases (
                case_id TEXT PRIMARY KEY,
                typology TEXT,
                total_amount NUMERIC,
                status TEXT DEFAULT 'open',
                created_at TIMESTAMPTZ DEFAULT NOW()
            );
            """
        )
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS evidence_blocks (
                id SERIAL PRIMARY KEY,
                case_id TEXT NOT NULL,
                block_type TEXT NOT NULL,
                payload JSONB,
                created_at TIMESTAMPTZ DEFAULT NOW()
            );
            """
        )
        conn.commit()

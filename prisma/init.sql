-- Hyperchain Project Database Schema
-- Jalankan di Neon SQL Editor: https://console.neon.tech
-- Project -> SQL Editor -> paste semua ini -> Run

-- TABLE: subscribers
CREATE TABLE IF NOT EXISTS subscribers (
  id            UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
  email         VARCHAR(255) UNIQUE NOT NULL,
  source        VARCHAR(50)  NOT NULL DEFAULT 'newsletter',
  subscribed_at TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- TABLE: project_applications
CREATE TABLE IF NOT EXISTS project_applications (
  id           UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name    VARCHAR(255) NOT NULL,
  email        VARCHAR(255) NOT NULL,
  project_idea TEXT         NOT NULL,
  category     VARCHAR(50)  NOT NULL DEFAULT 'other',
  status       VARCHAR(50)  NOT NULL DEFAULT 'pending',
  submitted_at TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- TABLE: talent_applications
CREATE TABLE IF NOT EXISTS talent_applications (
  id            UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name     VARCHAR(255) NOT NULL,
  email         VARCHAR(255) NOT NULL,
  role          VARCHAR(50)  NOT NULL,
  portfolio_url TEXT,
  submitted_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- INDEXES
CREATE INDEX IF NOT EXISTS idx_subscribers_email   ON subscribers(email);
CREATE INDEX IF NOT EXISTS idx_subscribers_source  ON subscribers(source);
CREATE INDEX IF NOT EXISTS idx_project_status      ON project_applications(status);
CREATE INDEX IF NOT EXISTS idx_project_email       ON project_applications(email);
CREATE INDEX IF NOT EXISTS idx_talent_role         ON talent_applications(role);
CREATE INDEX IF NOT EXISTS idx_talent_email        ON talent_applications(email);
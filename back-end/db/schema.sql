DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

-- connects database
\c cta_dev;

DROP TABLE IF EXISTS holistics;

CREATE TABLE holistics (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price INT,
    rating INT,
    CHECK (rating >= 0 AND rating <= 5),
    featured BOOLEAN
)

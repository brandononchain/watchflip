create table deals (
  id uuid primary key default gen_random_uuid(),
  brand text,
  model text,
  reference text,
  asking_price numeric,
  estimated_market_price numeric,
  estimated_profit numeric,
  deal_score integer,
  source_url text,
  seller_name text,
  box_papers boolean,
  created_at timestamp default now()
);

create table inventory (
  id uuid primary key default gen_random_uuid(),
  deal_id uuid references deals(id),
  purchase_price numeric,
  resale_price numeric,
  status text,
  notes text,
  created_at timestamp default now()
);

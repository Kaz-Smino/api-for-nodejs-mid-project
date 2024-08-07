INSERT INTO users (name, email, password) VALUES
  ('John Doe', 'john@example.com', 'password123'),
  ('Jane Smith', 'jane@example.com', 'password456');

INSERT INTO products (name, description) VALUES
  ('Product 1', 'Description for product 1'),
  ('Product 2', 'Description for product 2');

INSERT INTO orders (user_id, product_id, order_date) VALUES
  (1, 1, NOW()),
  (2, 2, NOW());
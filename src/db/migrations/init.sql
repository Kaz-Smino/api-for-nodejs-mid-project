import { client } from "..";

const run = async () => {
  try {
    await client.connect();

    await client.query(`
      DROP TABLE IF EXISTS orders CASCADE;
      DROP TABLE IF EXISTS products CASCADE;
      DROP TABLE IF EXISTS users CASCADE;

      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      );

      CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
        order_date TIMESTAMP DEFAULT NOW()
      );
    `);

    console.log(`Tables are generated`);
    console.log(`Testing... if we can send query`);

    const data = await client.query(`SELECT * FROM products;`);

    console.log(
      `Currently the product in database is ${JSON.stringify(data.rows)}`
    );

    console.log(`Successfully the tables are generated and confirmed!`);
  } catch (err) {
    console.error(`Oh no... something has gone wrong see the error: ${err}`);
  }
};

run().then(() => client.end());
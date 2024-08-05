import { app } from "./app";
import { HOST, PORT } from "./env";

app.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
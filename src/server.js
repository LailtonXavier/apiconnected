import app from './app';

// const port = process.env.APP_PORT;
const port = 3004;
app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(`Click para abrir http://localhost:${port}`);
  console.log();
});

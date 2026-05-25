const path = require('path');
const express = require('express');
const userRouter = require('./routes/userRouter');
const { hostRouter } = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(rootDir, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, 'public')));
app.use(userRouter);
app.use('/host', hostRouter);

app.use((req, res) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

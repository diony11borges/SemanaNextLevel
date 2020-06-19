import express, { json } from 'express';

const app = express();

app.use(express.json());

const users = [
    'Diony',
    'Rafael',
    'Robson',
    'Cleiton'
]

app.get('/users', (req, res) => {
    const search = String(req.query.search);
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    res.json({
        status: "200",
        result: {
            users: filteredUsers
        }
    });
});

app.get('/users/:id', (req, res) => {
    console.log('Listagem OK');
    res.json({
        status: "200",
        id: Number(req.params.id)
    });
});


app.post('/users', (req, res) => {
    const data = req.body;
    console.log(data);
    res.json({
        status: "200",
        message: "Usuário criado.",
        data: {
            user: data.name,
            email: data.email
        }
    });
});

app.listen(3333);
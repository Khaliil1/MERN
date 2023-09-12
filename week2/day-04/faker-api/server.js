const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createUser = () => {
    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number('26010493'),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.string.uuid()
    };
    return newFake;
};
const createCompany = () => {
    const newFake = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
    return newFake;
};

app.get("/api/users/new", (req, res) => {
    const newFakeUser = createUser();
    console.log(newFakeUser);
    res.json(newFakeUser);
})

app.get("/api/companies/new", (req, res) => {
    const newFakeCompany = createCompany();
    console.log(newFakeCompany);
    res.json(newFakeCompany);
})

app.get("/api/user/company", (req, res) => {
    const newFakeUser = createUser();
    const newFakeCompany = createCompany();
    res.json({ newFakeUser, newFakeCompany });
})

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});
app.listen(port, () => console.log(`Listening on port: ${port}`));
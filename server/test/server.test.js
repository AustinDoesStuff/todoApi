const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo'
}, {
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 444
}];

var falseId = new ObjectID();

beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
});

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = 'Test todo text';

        request(app)
            .post('/todos')
            .send({ text })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find({ text }).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            });
    });

    it('should not create todo with invalid body data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch((e) => done(e));
            });
    });
});

describe('GET /todos', () => {
    it('should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    });
});

describe('GET /todos/:id', () => {
    it('should return todo doc', (done) => {
        request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(todos[0].text);
        })
        .end(done);
    });

    it('should return 404 because of invalid ID property', (done) => {
        request(app)
        .get('/todos/123')
        .expect(404)
        .end(done);
    });

    it('should return 404 because todo not found', (done) => {
        request(app)
            .get(`/todos/${falseId.toHexString()}`)
            .expect(404)
            .end(done);
    });
});

describe('DELETE /todos/:id', () => {
    it('should delete a todo', (done) => {
        var id = todos[0]._id.toHexString()
        request(app)
            .delete(`/todos/${id}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(todos[0].text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Todo.findById(id).then((todo) => {
                    expect(todo).toNotExist();
                    done();
                }).catch((e) => done(e));
            });
    });

    it('should return 404 if todo does not exist', (done) => {
        request(app)
            .delete(`/todos/${falseId.toHexString()}`)
            .expect(404)
            .end(done);
    });

    it('should return 404 if invalid ID', (done) => {
        request(app)
            .delete('/todos/123')
            .expect(404)
            .end(done);
    });
});

describe('PATCH /todos/:id', () => {
    var testText = 'update sent';
    it('should update our todo', (done) => {
        var id = todos[0]._id.toHexString()
        request(app)
            .patch(`/todos/${id}`)
            .send({
                text: testText,
                completed: true
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(testText);
                expect(res.body.completed).toBe(true);
                expect(res.body.completedAt).toExist().toBeA('number');
            })
            .end(done);
            });

    it('should clear completedAt when set to false', (done) => {
        var id = todos[1]._id.toHexString();
        request(app)
            .patch(`/todos/${id}`)
            .send({
                text: testText,
                completed: false
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(testText);
                expect(res.body.completed).toBe(false);
                expect(res.body.completedAt).toNotExist();
            })
            .end(done);
    });
});
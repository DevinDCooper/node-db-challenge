const express = require("express");

  const db = require('./data/db-config.js')
 
const server = express();

server.use(express.json());

server.get('/api/project', (req, res) => {
  db('project')
  .then(project => {
    res.status(200).json(project);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

server.post('/api/project', (req, res) => {
  const projectData = req.body;
  db('project').insert(projectData)
  .then(project => {
    res.status(201).json(project);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new project'})
  });
});


server.get('/api/task', (req, res) => {
  db('task as t')
  .leftJoin('project as p', 'p.id', 't.project_id')
  .select('t.id', 't.description','t.notes' ,'p.project_name', 'p.project_description','t.completed',"t.project_id")
  .then(project => {
    res.status(200).json(project)
  })
  .catch(error => {
    res.status(500).json(error)
  });
});

server.post('/api/task', (req, res) => {
  db('task').insert(req.body)
  .then(ids => {
    const id = ids[0];

    db('task')
    .where({ id })
    .first()
    .then(task => {
      res.status(201).json(task);
    });
  })
  .catch(error => {
    res.status(500).json(error)
  });
});

server.get('/api/resource', (req, res) => {
  db('resource')
  .then(resource => {
    res.status(200).json(resource);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

server.post('/api/resource', (req, res) => {
  const resourceData = req.body;
  db('resource').insert(resourceData)
  .then(resource => {
    res.status(201).json(resource);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new resource'})
  });
});



module.exports = server;


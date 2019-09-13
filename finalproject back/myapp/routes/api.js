/* eslint-disable no-underscore-dangle */
const express = require("express");
const jwt = require("jsonwebtoken");
const mongo = require("mongodb");
const assert = require("assert");

const router = express.Router();
const md5 = require("md5");
// Connection URL
const mongoUrl = "mongodb://localhost:27017";
// Database Name
const mongoDBName = "ardalesturweb";

/* GET booking listing. */
router.get("/", (req, res) => {
  res.send("respond with a resource");
});

const secret = "mysecret";

// para interactuar con la base de datos
router.post("/auth", (req, res) => {
  mongo.MongoClient.connect(mongoUrl, (err, client) => {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(mongoDBName);
    // console.log(req.body.username);

    const query = db.collection("admin").find({
      username: req.body.username,
      password: md5(req.body.password),
      // useNewUrlParser: true,

    });

    query.toArray().then(documents => {
      if (documents.length > 0) {
        const token = jwt.sign(
          {
            _id: documents[0]._id,
            username: documents[0].username
          },
          secret
          // {
          //     expiresIn: 86400
          // }
        );
        res.send(token);
      } else {
        res.status(400).send("Invalid credentials");
      }
    });

    client.close();
  });
});

// KING GET

router.get("/kingbookings", (req, res) => {
  const token = req.headers.authorization.replace("Bearer ", "");
  // try verifica lo que hacemos, si lo hemos hecho "mal" lanza el error

  try {
    const payload = jwt.verify(token, secret);

    if (payload) {
      mongo.MongoClient.connect(mongoUrl, (_err, client) => {
        const db = client.db(mongoDBName);
        const query = db
          .collection("kingbookings")
          .find(
            {},
            {
              projection: {
                name: 1,
                lastname: 1,
                size: 1,
                email: 1,
                tel: 1,
                route: 1,
                dni: 1,
                hour1: 1,
                date: 1
              }
            }
          );

        query.toArray().then(documents => {
          res.send(documents);
          // console.log(documents);
        });

        client.close();
      });
    }
  } catch (e) {
    res.status(401).send("You don't have permission");
  }
});

// KING POST

router.post("/kingbookings", (req, res) => {
  // const token = req.headers.authorization.replace('Bearer ', '');

  try {
    // const payload = jwt.verify(token, secret);

    mongo.MongoClient.connect(mongoUrl, (_err, client) => {
      const data = req.body;
      const db = client.db(mongoDBName);
      db.collection("kingbookings").insertOne(
        {
          name: data.name,
          lastname: data.lastname,
          email: data.email,
          size: data.size,
          tel: data.tel,
          hour1: data.hour1,
          route: data.route,
          dni: data.dni,
          date: data.date
        },
        // eslint-disable-next-line no-shadow
        (_err, result) => {
          res.send(result.ops[0]);
        }
      );
      client.close();
    });
  } catch (e) {
    res.status(401).send("You don't have permission");
  }
});

// KING DELETE

router.delete("/kingbookings/:id", (req, res) => {
  console.log("entra aqui");
  const token = req.headers.authorization.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, secret);
    mongo.MongoClient.connect(mongoUrl, (_err, client) => {
      const { id } = req.params;
      const db = client.db(mongoDBName);
      db.collection("kingbookings").deleteOne(
        { _id: mongo.ObjectID(id) },
        () => {
          res.send();
        }
      );
    });
  } catch (e) {
    res.status(401).send("You don't have permission");
  }
});

// KING EDIT

router.put("/kingbookings/:id", (req, res) => {
  const token = req.headers.authorization.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, secret);

  
      mongo.MongoClient.connect(mongoUrl, (_err, client) => {
        const { id } = req.params;
        const data = req.body;
        const db = client.db(mongoDBName);

        const set = {};

        if (data.name !== "") {
          set.name = data.name;
        }

        if (data.lastname !== "") {
          set.lastname = data.lastname;
        }

        if (data.email !== "") {
          set.email = data.email;
        }

        if (data.tel !== "") {
          set.tel = data.tel;
        }

        if (data.size !== "") {
          set.size = data.size;
        }

        if (data.hour !== "") {
          set.hour1 = data.hour1;
        }

        if (data.date !== "") {
          set.date = data.date;
        }

        if (data.dni !== "") {
          set.dni = data.dni;
        }

        if (data.route !== "") {
          set.route = data.route;
        }

        db.collection("kingbookings").updateOne(
          { _id: mongo.ObjectID(id) },
          {
            $set: set
          },
          (err, result) => {
            if (err) {
              console.log("No ha podido editarse");
            } else {
              res.send(result);
              console.log("Exito al editar");
            }
          }
        );
        client.close();
      });
    
  } catch (e) {
    res.status(401).send("You don't have permission");
  }
});

// ROUTES GET

router.get("/routebookings", (req, res) => {
  const token = req.headers.authorization.replace("Bearer ", "");
  // try verifica lo que hacemos, si lo hemos hecho "mal" lanza el error

  try {
    const payload = jwt.verify(token, secret);

    if (payload) {
      mongo.MongoClient.connect(mongoUrl, (_err, client) => {
        const db = client.db(mongoDBName);
        const query = db
          .collection("routebookings")
          .find(
            {},
            {
              projection: {
                name: 1,
                lastname: 1,
                size: 1,
                email: 1,
                tel: 1,
                route: 1,
                dni: 1,
                hour1: 1,
                date: 1
              }
            }
          );

        query.toArray().then(documents => {
          res.send(documents);
          // console.log(documents);
        });

        client.close();
      });
    }
  } catch (e) {
    res.status(401).send("You don't have permission");
  }
});

//ROUTES POST

router.post("/routebookings", (req, res) => {
  // const token = req.headers.authorization.replace('Bearer ', '');

  try {
    // const payload = jwt.verify(token, secret);

    mongo.MongoClient.connect(mongoUrl, (_err, client) => {
      const data = req.body;
      const db = client.db(mongoDBName);
      db.collection("routebookings").insertOne(
        {
          name: data.name,
          lastname: data.lastname,
          email: data.email,
          size: data.size,
          tel: data.tel,
          route: data.route,
          dni: data.dni,
          date: data.date,
          hour1: data.hour1
        },
        // eslint-disable-next-line no-shadow
        (_err, result) => {
          res.send(result.ops[0]);
        }
      );
      client.close();
    });
  } catch (e) {
    res.status(401).send("You don't have permission");
  }
});

//ROUTES DELETE

router.delete("/routebookings/:id", (req, res) => {
  console.log("entra routebooking")
  const token = req.headers.authorization.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, secret);
    if (payload) {
      mongo.MongoClient.connect(mongoUrl, (_err, client) => {
        const { id } = req.params;
        const db = client.db(mongoDBName);
        db.collection("routebookings").deleteOne(
          { _id: mongo.ObjectID(id) },
          () => {
            res.send();
          }
        );
      });
    }
  } catch (e) {
    res.status(401).send("You don't have permission");
  }
});

//CONTACT GET

router.get("/contact", (req, res) => {
  const token = req.headers.authorization.replace("Bearer ", "");
  // try verifica lo que hacemos, si lo hemos hecho "mal" lanza el error

  try {
    const payload = jwt.verify(token, secret);

    if (payload) {
      mongo.MongoClient.connect(mongoUrl, (_err, client) => {
        const db = client.db(mongoDBName);
        const query = db.collection("contact").find(
          {},
          {
            projection: {
              name: 1,
              lastname: 1,
              email: 1,
              tel: 1,
              textcontact: 1
            }
          }
        );

        query.toArray().then(documents => {
          res.send(documents);
          // console.log(documents);
        });

        client.close();
      });
    }
  } catch (e) {
    res.status(401).send("You don't have permission");
  }
});

//CONTACT POST

router.post("/contact", (req, res) => {
  // const token = req.headers.authorization.replace('Bearer ', '');
console.log('este es el api contact')
  try {
    // const payload = jwt.verify(token, secret);

    mongo.MongoClient.connect(mongoUrl, (_err, client) => {
      const data = req.body;
      const db = client.db(mongoDBName);
      db.collection("contact").insertOne(
        {
          name: data.name,
          lastname: data.lastname,
          email: data.email,
          tel: data.tel,
          textcontact: data.textcontact
        },
        // eslint-disable-next-line no-shadow
        (_err, result) => {
          res.send(result.ops[0]);
        }
      );
      client.close();
    });
  } catch (e) {
    res.status(401).send("You don't have permission");
  }
});

//CONTACT DELETE

router.delete("/contact/:id", (req, res) => {
  console.log("entra0");
console.log(req.params.id + 'deleteee');
const token = req.headers.authorization.replace("Bearer ", "");

  try {
    const payload= jwt.verify(token, secret);
    console.log("entra1");
    if(payload){
      console.log("entra2");
      mongo.MongoClient.connect(mongoUrl, (_err, client) => {
        const { id } = req.params.id;
        console.log('entra3')
        const db = client.db(mongoDBName);
        db.collection("contact").deleteOne({ _id: mongo.ObjectID(id) }, () => {
        if(_err){
          console.log('entra4')

          res.status(400).send(_err);
        }else{
          res.send('guay');
        }
        });
      });
    }
  } catch (e) {
    res.status(401).send("You don't have permission");
  }
});

module.exports = router;

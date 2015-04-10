module.exports = function(app) {
  var express = require('express');
  var contactsRouter = express.Router();

  var currId = 1;
  var contacts = [
    {
      id: 0,
      firstName: 'Joe',
      lastName: 'Jones',
      middleInitial: 'P',
      streetAddress: '123 Some Street',
      city: 'Seattle',
      state: 'Washington',
      postalCode: '12345'
    },
    {
      id: 1,
      firstName: 'Mary',
      lastName: 'Jones',
      streetAddress: '123 Some Street',
      city: 'Seattle',
      state: 'Washington',
      postalCode: '12345'
    }
  ];

  contactsRouter.get('/', function(req, res) {
    res.send({'contacts': contacts});
  });

  contactsRouter.post('/', function(req, res) {
    var newContact = req.body.contact;
    newContact.id = currId = ++currId;
    contacts.push(newContact);
    res.status(201).send({
      'contact': newContact 
    });
  });

  contactsRouter.get('/:id', function(req, res) {
    res.send({'contact': getContactById(parseInt(req.params.id))});
  });

  contactsRouter.put('/:id', function(req, res) {
    var contact = req.body.contact;
    contact.id = parseInt(req.params.id);
    var idx = getContactIndexById(contact.id);
    contacts[idx] = contact;
    res.status(200).send({
      'contact': contacts[idx]
    });
  });

  contactsRouter.delete('/:id', function(req, res) {
    contacts.splice(getContactIndexById(parseInt(req.params.id)), 1);
    res.status(204).end();
  });

  function getContactById(id) {
    return contacts[getContactIndexById(id)]
  }

  function getContactIndexById(id) {
    for (var i = 0; i < contacts.length; i++) {
      if (contacts[i].id === id) {
        return i;
      }
    }
  }

  app.use('/api/v1/contacts', require('body-parser').json(), contactsRouter);
};
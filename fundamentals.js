const aCar = {
  owner : 'Joe Bloggs',
  adress : '3 Walkers Lane',
  // Array
  previous_owners: [
    {name: 'Pat Smith', address: '1 Main Steer'},
    {name: 'Sheila Dwyer', address: '2 High Street'}
  ],
  // Nested objects
  type : {
    make : 'Toyota',
    model : 'Corolla',
    cc : 1.8
  },
  features : [ 'Parking assist', 'Alarm', 'Two-bar'],
  registration : {
    year: 201,
    county: 'WD',
    number: 1058
  }
};

// Dynamic properties
aCar.milage = 10000
aCar.color = {
  exterior: 'red',
  interior: {
    texture: 'leather',
    shade: 'cream'
  }
}

console.log(aCar.owner + ' drives a ' + aCar.type.make);

console.log(
  'Reg. = ' + 
  aCar.registration.year + '-' +
  aCar.registration.county + '-' +
  aCar.registration.number
);

console.log(
  'It is a ' + aCar.color.exterior + ' car, ' +
  aCar.milage + ' milage, with ' + aCar.color.interior.texture +
  ' interior.'
);

console.log( 
  'First owner : ' +  
  aCar.previous_owners[0].name + ' - ' +
  aCar.previous_owners[0].address
  );

  // Loop - list of features
  for (let i = 0; i < aCar.features.length; i += 1) {
    console.log(aCar.features[i]);
  }

  // Loop - list of previous owner names
  for (let i = 0; i < aCar.previous_owners.length; i += 1) {
    console.log(aCar.previous_owners[i].name);
  }

  for (let p in aCar.type) {
     console.log(p.toUpperCase() + ' = ' + aCar.type[p]);
  }
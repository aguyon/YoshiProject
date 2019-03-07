$('#quiz2').quiz({
  //resultsScreen: '#results-screen',
  //counter: false,
  //homeButton: '#custom-home',
  counterFormat: 'Question %current sur %total',
  questions: [
    {
      'q': 'Est-ce que Yoshi ferait un bon président ?',
      'options': [
        'Oui',
        'Non'
      ],
      'correctIndex': 0,
      'correctResponse': 'Bien vu',
      'incorrectResponse': 'Mauvaise réponse !'
    },
    {
      'q': 'En quelle année est né Yoshi ?',
      'options': [
        '1983',
        '1990',
        '1994'
      ],
      'correctIndex': 1,
      'correctResponse': 'Exact',
      'incorrectResponse': 'C\'est faux, la bonne réponse était 1990'
    },
    {
      'q': 'Que signifie Yoshi ?',
      'options': [
        'Super',
        'Crocodile',
        'Ciel'
      ],
      'correctIndex': 0,
      'correctResponse': 'Genius !',
      'incorrectResponse': 'Nul, la réponse était \"Super"'
    },
    {
      'q': 'Comment Yoshi connait-il Mario ?',
      'options': [
        'Ils sont cousins',
        'Ils se sont rencontré au salon de l\'agriculture',
        'Ils étaient dans la même école',
        'Il lui a jadis sauvé la vie'
      ],
      'correctIndex': 3,
      'correctResponse': 'Bien vu !',
      'incorrectResponse': 'Tu devrais revoir tes classiques'
    }
  ]
});
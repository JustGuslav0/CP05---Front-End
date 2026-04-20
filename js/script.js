const pokemons = [
  {
    nome:       'Bulbasaur',
    img:        'images/pokemons/Bulbasaur.png',
    tipo:       'planta',
    altura:     '0.7 m',
    peso:       '6.9 kg',
    categoria:  'Seed',
    habilidades:'Overgrow',
    fraqueza:   'Fogo',
    evolucoes:  [
      'images/pokemons/Bulbasaur.png',
      'images/pokemons/Bulbasaur-ev2.png',
      'images/pokemons/Bulbasaur-ev3.png'
    ]
  },
  {
    nome:       'Charmander',
    img:        'images/pokemons/Charmander.png',
    tipo:       'fogo',
    altura:     '0.6 m',
    peso:       '8.5 kg',
    categoria:  'Lizard',
    habilidades:'Blaze',
    fraqueza:   'Água',
    evolucoes:  ['images/pokemons/Charmander.png']
  },
  {
    nome:       'Squirtle',
    img:        'images/pokemons/Squirtle.png',
    tipo:       'agua',
    altura:     '0.5 m',
    peso:       '9.0 kg',
    categoria:  'Tiny Turtle',
    habilidades:'Torrent',
    fraqueza:   'Elétrico',
    evolucoes:  ['images/pokemons/Squirtle.png']
  },
  {
    nome:       'Pikachu',
    img:        'images/pokemons/Pikachu.png',
    tipo:       'eletrico',
    altura:     '0.4 m',
    peso:       '6.0 kg',
    categoria:  'Mouse',
    habilidades:'Static',
    fraqueza:   'Planta',
    evolucoes:  ['images/pokemons/Pikachu.png']
  },
  {
    nome:       'Jigglypuff',
    img:        'images/pokemons/Jigglypuff.png',
    tipo:       'eletrico',
    altura:     '0.5 m',
    peso:       '5.5 kg',
    categoria:  'Balloon',
    habilidades:'Cute Charm',
    fraqueza:   'Fogo',
    evolucoes:  ['images/pokemons/Jigglypuff.png']
  },
  {
    nome:       'Snorlax',
    img:        'images/pokemons/Snorlax.png',
    tipo:       'gelo',
    altura:     '2.1 m',
    peso:       '460.0 kg',
    categoria:  'Sleeping',
    habilidades:'Immunity',
    fraqueza:   'Fogo',
    evolucoes:  ['images/pokemons/Snorlax.png']
  },
  {
    nome:       'Lapras',
    img:        'images/pokemons/Lapras.png',
    tipo:       'gelo',
    altura:     '2.5 m',
    peso:       '220.0 kg',
    categoria:  'Transport',
    habilidades:'Water Absorb',
    fraqueza:   'Planta',
    evolucoes:  ['images/pokemons/Lapras.png']
  },
  {
    nome:       'Eevee',
    img:        'images/pokemons/Eevee.png',
    tipo:       'agua',
    altura:     '0.3 m',
    peso:       '6.5 kg',
    categoria:  'Evolution',
    habilidades:'Run Away',
    fraqueza:   'Fogo',
    evolucoes:  ['images/pokemons/Eevee.png']
  },
  {
    nome:       'Growlithe',
    img:        'images/pokemons/Growlithe.png',
    tipo:       'fogo',
    altura:     '0.7 m',
    peso:       '19.0 kg',
    categoria:  'Puppy',
    habilidades:'Intimidate',
    fraqueza:   'Água',
    evolucoes:  ['images/pokemons/Growlithe.png']
  },
  {
    nome:       'Ponyta',
    img:        'images/pokemons/Ponyta.png',
    tipo:       'fogo',
    altura:     '1.0 m',
    peso:       '30.0 kg',
    categoria:  'Fire Horse',
    habilidades:'Run Away',
    fraqueza:   'Água',
    evolucoes:  ['images/pokemons/Ponyta.png']
  },
  {
    nome:       'Goldeen',
    img:        'images/pokemons/Goldeen.png',
    tipo:       'agua',
    altura:     '0.6 m',
    peso:       '15.0 kg',
    categoria:  'Goldfish',
    habilidades:'Swift Swim',
    fraqueza:   'Elétrico',
    evolucoes:  ['images/pokemons/Goldeen.png']
  },
  {
    nome:       'Krabby',
    img:        'images/pokemons/Krabby.png',
    tipo:       'agua',
    altura:     '0.4 m',
    peso:       '6.5 kg',
    categoria:  'River Crab',
    habilidades:'Hyper Cutter',
    fraqueza:   'Elétrico',
    evolucoes:  ['images/pokemons/Krabby.png']
  },
  {
    nome:       'Bellsprout',
    img:        'images/pokemons/Bellsprout.png',
    tipo:       'planta',
    altura:     '0.7 m',
    peso:       '4.0 kg',
    categoria:  'Flower',
    habilidades:'Chlorophyll',
    fraqueza:   'Fogo',
    evolucoes:  ['images/pokemons/Bellsprout.png']
  },
  {
    nome:       'Caterpie',
    img:        'images/pokemons/Caterpie.png',
    tipo:       'planta',
    altura:     '0.3 m',
    peso:       '2.9 kg',
    categoria:  'Worm',
    habilidades:'Shield Dust',
    fraqueza:   'Fogo',
    evolucoes:  ['images/pokemons/Caterpie.png']
  },
  {
    nome:       'Abra',
    img:        'images/pokemons/Abra.png',
    tipo:       'eletrico',
    altura:     '0.9 m',
    peso:       '19.5 kg',
    categoria:  'Psi',
    habilidades:'Synchronize',
    fraqueza:   'Gelo',
    evolucoes:  ['images/pokemons/Abra.png']
  },
  {
    nome:       'Clefairy',
    img:        'images/pokemons/Clefairy.png',
    tipo:       'gelo',
    altura:     '0.6 m',
    peso:       '7.5 kg',
    categoria:  'Fairy',
    habilidades:'Cute Charm',
    fraqueza:   'Fogo',
    evolucoes:  ['images/pokemons/Clefairy.png']
  },
  {
    nome:       'Pidgey',
    img:        'images/pokemons/Pidgey.png',
    tipo:       'gelo',
    altura:     '0.3 m',
    peso:       '1.8 kg',
    categoria:  'Tiny Bird',
    habilidades:'Keen Eye',
    fraqueza:   'Elétrico',
    evolucoes:  ['images/pokemons/Pidgey.png']
  }
];

// RENDERIZAR CARDS DE POKEMON NO GRID
for (let i = 0; i < pokemons.length; i++) {
  let card = document.createElement('div');
  card.className = 'card-pokemon';
  card.setAttribute('data-tipo', pokemons[i].tipo);

  let img = document.createElement('img');
  img.src = pokemons[i].img;
  img.alt = pokemons[i].nome;

  card.appendChild(img);
  document.getElementById('gridPokemons').appendChild(card);

  card.addEventListener('click', function () {
    let p = pokemons[i];

    document.getElementById('modalNome').textContent = p.nome;
    document.getElementById('modalAltura').textContent = p.altura;
    document.getElementById('modalPeso').textContent = p.peso;
    document.getElementById('modalCategoria').textContent = p.categoria;
    document.getElementById('modalHabilidades').textContent = p.habilidades;
    document.getElementById('modalTipo').textContent = p.tipo;
    document.getElementById('modalFraqueza').textContent = p.fraqueza;

    let evolDiv = document.getElementById('modalEvolucao');
    evolDiv.innerHTML = '';

    for (let j = 0; j < p.evolucoes.length; j++) {
      let imgEvol = document.createElement('img');
      imgEvol.src = p.evolucoes[j];
      evolDiv.appendChild(imgEvol);

      if (j < p.evolucoes.length - 1) {
        let seta = document.createElement('span');
        seta.textContent = '>';
        evolDiv.appendChild(seta);
      }
    }

    document.getElementById('modalOverlay').style.display = 'flex';
  });
}

let filtros = document.querySelectorAll('.filtro-item');

for (let i = 0; i < filtros.length; i++) {
  filtros[i].addEventListener('click', function () {
    for (let j = 0; j < filtros.length; j++) {
      filtros[j].classList.remove('ativo');
    }
    this.classList.add('ativo');

    let tipo = this.getAttribute('data-filtro');
    let cards = document.querySelectorAll('.card-pokemon');

    for (let k = 0; k < cards.length; k++) {
      if (tipo === 'todos' || cards[k].getAttribute('data-tipo') === tipo) {
        cards[k].style.display = 'flex';
      } else {
        cards[k].style.display = 'none';
      }
    }
  });
}

document.getElementById('modalFechar').addEventListener('click', function () {
  document.getElementById('modalOverlay').style.display = 'none';
});

document.getElementById('modalOverlay').addEventListener('click', function (e) {
  if (e.target === this) {
    this.style.display = 'none';
  }
});

// FORMULARIO DA CARTA
document.getElementById('btnEnviar').addEventListener('click', function () {
  let nome = document.getElementById('cartaNome').value;
  let vida = document.getElementById('cartaVida').value;
  let pokemon = document.getElementById('cartaPokemon').value;
  let ataque = document.getElementById('cartaAtaque').value;
  let categoria = document.getElementById('cartaCategoria').value;
  let resist = document.getElementById('cartaResistencia').value;

  if (nome === '') nome = '???';
  if (vida === '') vida = '-';
  if (ataque === '') ataque = '-';
  if (categoria === '') categoria = '-';
  if (resist === '') resist = '-';

  document.getElementById('previewNome').textContent = 'Nome: ' + nome;
  document.getElementById('previewHp').textContent = 'HP: ' + vida;
  document.getElementById('previewTipo').textContent = 'Tipo: ' + categoria;
  document.getElementById('previewAtaque').textContent = 'Ataque: ' + ataque;
  document.getElementById('previewResist').textContent = 'Resistência: ' + resist;

  if (pokemon !== '') {
    document.getElementById('cartaImgPokemon').src = 'images/pokemons/' + pokemon + '.png';
    document.getElementById('cartaImgPokemon').alt = pokemon;
  }
});
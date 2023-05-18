/* eslint-disable @typescript-eslint/indent */
import './style.css';
import {createCharacters} from './createCharacters.ts';

const charactersContainer = createCharacters();

const template = document.querySelector('.characters-list')!;

const cardJoffrey = `<li class="character col">
        <div class="card character__card">
          <img src="assets/joffrey.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${charactersContainer[0].name} ${charactersContainer[0].family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${charactersContainer[0].age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Años de reinado: ${charactersContainer[0].reignYears}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="👑"></i>
        </div>
      </li>`;

const cardJaime = `<li class="character col">
        <div class="card character__card">
          <img src="assets/jaime.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${charactersContainer[1].name} ${charactersContainer[1].family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${charactersContainer[1].age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Arma que usa: ${charactersContainer[1].weapon}</li>
                <li>Destreza: ${charactersContainer[1].skills}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class=" 🗡"></i>
        </div>
      </li>`;

const cardDaenerys = `<li class="character col">
        <div class="card character__card">
          <img src="assets/daenerys.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${charactersContainer[2].name} ${charactersContainer[2].family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${charactersContainer[2].age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Arma que usa: ${charactersContainer[2].weapon}</li>
                <li>Destreza: ${charactersContainer[2].skills}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class=" 🗡"></i>
        </div>
      </li>`;

const cardTyrion = `<li class="character col">
        <div class="card character__card">
          <img src="assets/tyrion.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${charactersContainer[3].name} ${charactersContainer[3].family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${charactersContainer[3].age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Personaje al que asesora: ${charactersContainer[3].characterAdvised}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class="🎓"></i>
        </div>
      </li>`;

const cardBronn = `<li class="character col">
        <div class="card character__card">
          <img src="assets/bronn.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${charactersContainer[4].name} ${charactersContainer[4].family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${charactersContainer[4].age}</li>
                <li>
                  Estado:
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Personaje al que sirve: ${charactersContainer[4].knight}</li>
                <li>Pelotismo: ${charactersContainer[4].pelotismo}</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          <i class=" 🛡"></i>
        </div>
      </li>`;

template.innerHTML =
  cardJoffrey + cardJaime + cardDaenerys + cardTyrion + cardBronn;

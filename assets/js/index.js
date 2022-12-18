function generateBoard() {
  const maxHouse = 70;
  for (let index = 0; index < maxHouse; index++) {
    document
      .getElementById('board')
      .insertAdjacentHTML(
        'beforeend',
        `<div class="house house-white house-row" id="house-${
          index + 1
        }"></div>`
      );
  }
}

function addCharacter() {
  const character = 'house-50';
  document.getElementById(character).classList.add('active');
  document
    .getElementById(character)
    ?.setAttribute('onclick', 'openPlayerDetails();');
  document.getElementById(character)?.insertAdjacentHTML(
    'beforeend',
    `<div
        class="character"
        style="background-image:url(../assets/images/characters/1/mini.png)">
        <div class="decoration-battle-bg"></div>
      </div>`
  );
  addCharacterBar(character);
  document.getElementById(character)?.addEventListener('mouseover', () => {
    addHouseColor(character);
    addHoverBar(character);
    addHoverCharacter(character);
  });
  document.getElementById(character)?.addEventListener('mouseout', () => {
    removeHouseColor(character);
    removeHoverBar(character);
    removeHoverCharacter(character);
  });
}

function addEnemy() {
  const character = 'house-15';
  document.getElementById(character).classList.add('active');
  document
    .getElementById(character)
    ?.setAttribute('onclick', 'openEnemyDetails();');
  document.getElementById(character)?.insertAdjacentHTML(
    'beforeend',
    `<div
        class="character"
        style="background-image:url(../assets/images/characters/2/mini.png)">
        <div class="decoration-battle-bg"></div>
      </div>`
  );
  addCharacterBar(character);
  document.getElementById(character)?.addEventListener('mouseover', () => {
    addHoverBar(character);
    addHoverCharacter(character);
  });
  document.getElementById(character)?.addEventListener('mouseout', () => {
    removeHoverBar(character);
    removeHoverCharacter(character);
  });
}

function addClassHouseColor(id) {
  document.getElementById(`house-${id}`)?.classList.add('house-selected');
}

function removeClassHouseColor(id) {
  document.getElementById(`house-${id}`)?.classList.remove('house-selected');
}

function showHouseId() {
  const elements = document.querySelectorAll('.house');
  for (const element of elements) {
    const getId = element.getAttribute('id');
    document.getElementById(getId).addEventListener('mouseover', () => {
      console.log('house id: ', getId);
    });
  }
}

function addHouseColor(id) {
  const splitId = id.split('-')[1];
  const leftHouse = +splitId - 1;
  const rightHouse = +splitId + 1;
  const topCenterHouse = +splitId - 10;
  const topRightHouse = topCenterHouse + 1;
  const topLeftHouse = topCenterHouse - 1;
  const bottomCenterHouse = +splitId + 10;
  const bottomRightHouse = bottomCenterHouse + 1;
  const bottomLeftHouse = bottomCenterHouse - 1;
  addClassHouseColor(topCenterHouse);
  if (!splitId.includes('0')) {
    addClassHouseColor(rightHouse);
    addClassHouseColor(topRightHouse);
    addClassHouseColor(bottomRightHouse);
  }
  if (!splitId.includes('1')) {
    addClassHouseColor(leftHouse);
    addClassHouseColor(topLeftHouse);
    addClassHouseColor(bottomLeftHouse);
  }
  addClassHouseColor(bottomCenterHouse);
}

function removeHouseColor(id) {
  const splitId = id.split('-')[1];
  const leftHouse = +splitId - 1;
  const rightHouse = +splitId + 1;
  const topCenterHouse = +splitId - 10;
  const topRightHouse = topCenterHouse + 1;
  const topLeftHouse = topCenterHouse - 1;
  const bottomCenterHouse = +splitId + 10;
  const bottomRightHouse = bottomCenterHouse + 1;
  const bottomLeftHouse = bottomCenterHouse - 1;
  removeClassHouseColor(leftHouse);
  removeClassHouseColor(rightHouse);
  removeClassHouseColor(topCenterHouse);
  removeClassHouseColor(topRightHouse);
  removeClassHouseColor(topLeftHouse);
  removeClassHouseColor(bottomCenterHouse);
  removeClassHouseColor(bottomRightHouse);
  removeClassHouseColor(bottomLeftHouse);
}

function addCharacterBar(character) {
  document.getElementById(character)?.insertAdjacentHTML(
    'afterbegin',
    `<div class="position-absolute">
      <div class="house-bar energy-bar"></div>
      <div class="house-bar life-bar"></div>
    </div>`
  );
}

function addHoverCharacter(character) {
  const element = document.querySelectorAll(`#${character} .character`)[0];
  element.style.width = '48px';
  element.style.height = '48px';
}

function removeHoverCharacter(character) {
  const element = document.querySelectorAll(`#${character} .character`)[0];
  element.style.width = '50px';
  element.style.height = '50px';
}

function addHoverBar(id) {
  const elements = document.querySelectorAll(`#${id} .house-bar`);
  elements.forEach(element => (element.style.opacity = 1));
}

function removeHoverBar(id) {
  const elements = document.querySelectorAll(`#${id} .house-bar`);
  elements.forEach(element => (element.style.opacity = 0));
}

function addSkill() {
  const maxSkill = 10;
  for (let index = 0; index < maxSkill; index++) {
    document.getElementById('skill').insertAdjacentHTML(
      'beforeend',
      `<div class="col separate-column">
          <div class="skill skill-${index + 1}" onclick="useSkill();">
            <div class="skill-bg">
              <div class="progress house-bar fury-bg">
                <div
                  class="progress-bar bg-warning"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width:50%">
                </div>
              </div>
            </div>
          </div>
      </div>`
    );
  }
}

function openPlayerDetails() {
  showLoading();
  const interval = setInterval(() => {
    const bsOffcanvas = new bootstrap.Offcanvas('#offcanvasRight');
    bsOffcanvas.show();
    hideLoading();
    clearInterval(interval);
  }, 100);
}

function openEnemyDetails() {
  showLoading();
  const interval = setInterval(() => {
    const myModal = new bootstrap.Modal('#exampleModal');
    myModal.show();
    hideLoading();
    clearInterval(interval);
  }, 100);
}

function useSkill() {
  showLoading();
  const interval = setInterval(() => {
    const myModal = bootstrap.Modal.getInstance(
      document.getElementById('exampleModal')
    );
    myModal.hide();
    hideLoading();
    clearInterval(interval);
    showDamage();
  }, 100);
}

function showDamage() {
  showBlock();
  const character = 'house-15';
  addHoverBar(character);
  const shieldInterval = setInterval(() => {
    document.querySelectorAll(`#${character} .house-bar`)[0].style.width =
      '50%';
    hideBlock();
    clearInterval(shieldInterval);
  }, 500);
}

addEventListener('DOMContentLoaded', event => {
  generateBoard();
  showHouseId();
  addCharacter();
  addEnemy();
  addSkill();
});

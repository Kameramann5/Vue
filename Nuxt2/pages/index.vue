<script setup>
import { ref } from "vue";

import { IMaskComponent } from "vue-imask";

useHead({
  title: "Главная",
  meta: [
    { name: "description", content: "Главная страница" },
    { name: "keywords", content: "Главная страница" },
  ],
});

// реактивная переменная для номера телефона

// обработчики
const onAccept = (value) => {
  //console.log("Отформатированный телефон:", value);
};

const onAcceptUnmasked = (unmaskedValue) => {
  //console.log("Неконтролируемый ввод:", unmaskedValue);
};

const fio = ref("");
const phoneNumber = ref("");
const msg = ref("");
const hasAccepted = ref(false);

const errors = ref({
  fio: "",
  phoneNumber: "",
  msg: "",
  accept: "",
});

// Валидация формы
// Валидация формы
function validateForm() {
  let isValid = true;

  // Проверка имени
  if (!fio.value.trim()) {
    errors.value.fio = "Пожалуйста, введите ваше имя";
    isValid = false;
  } else if (fio.value.trim().length < 5) {
    errors.value.fio = "Имя должно быть минимум 5 символа";
    isValid = false;
  } else {
    errors.value.fio = "";
  }

  // Проверка номера телефона
  if (!phoneNumber.value.trim()) {
    errors.value.phoneNumber = "Пожалуйста, укажите номер телефона";
    isValid = false;
  } else if (phoneNumber.value.replace(/\D/g, "").length < 11) {
    // Проверка, что после удаления всех нецифровых символов, длина >= 11
    errors.value.phoneNumber = "Некорректный номер телефона";
    isValid = false;
  } else {
    errors.value.phoneNumber = "";
  }

  // Проверка сообщения
  if (!msg.value.trim()) {
    errors.value.msg = "Пожалуйста, введите сообщение";
    isValid = false;
  } else if (msg.value.trim().length < 10) {
    errors.value.msg = "Сообщение должно быть минимум 10 символов";
    isValid = false;
  } else {
    errors.value.msg = "";
  }

  // Проверка согласия
  if (!hasAccepted.value) {
    errors.value.accept = "Необходимо согласие";
    isValid = false;
  } else {
    errors.value.accept = "";
  }

  return isValid;
}

// Обработка отправки формы
function submitForm() {
  if (validateForm()) {
    alert("Можно отправлять.");
    // Очистка формы после успешной валидации
    fio.value = "";
    phoneNumber.value = "";
    msg.value = "";
    hasAccepted.value = false;
  }
}
</script>

<template>
  <div>
    <slot />
    <div class="container">
      <div class="block-1">
        <div class="block-1-left">
          <div class="title">Почему я?</div>
          <div class="title-mob">С чем я работаю</div>
          <div class="description">Почему мне доверяют своё состояние</div>
        </div>
        <div class="block-1-right">
          <div class="description">
            Комплексный подход к психике и сну, понятные объяснения и чёткий
            план действий. Консультации проходят очно и онлайн, в удобном для
            вас формате.
          </div>
        </div>
      </div>
      <div class="block-2">
        <div class="items">
          <div class="item item-1 item-purple">
            <div class="title">Комплексный подход</div>
            <div class="desc">
              Работа с психикой и сном для поиска истинной причины состояния.
            </div>
            <div class="item-img">
              <img src="../assets/img/item1.png" alt="item" />
            </div>
          </div>
          <div class="item item-2 item-purple-light">
            <div class="title">Индивидуальный план</div>
            <div class="desc">
              Чёткие персональные рекомендации и пошаговые действия.
            </div>
            <img src="../assets/img/item2.png" alt="item2" />
          </div>
          <div class="item-right-big-mob item-purple">
            <div class="title">Очно и онлайн</div>
            <div class="description">
              Консультации в клинике или дистанционно из любой точки мира.
            </div>
            <img class="main-img" src="../assets/img/big.png" alt="img" />
            <img
              class="vector10"
              src="../assets/img/Vector 10.png"
              alt="Vector 10"
            />
            <img
              class="vector9"
              src="../assets/img/Vector 9.png"
              alt="Vector 9"
            />
            <img
              class="vector8"
              src="../assets/img/Vector 8.png"
              alt="Vector 8"
            />
          </div>
          <div class="item item-3 item-purple-light">
            <div class="title">Понятная логика лечения</div>
            <div class="desc">Каждый шаг объясняется и согласуется с вами.</div>
            <img src="../assets/img/item3.png" alt="item3" />
          </div>
          <div class="item item-4 item-border">
            <div class="title-black">Точная диагностика</div>
            <div class="desc-black">
              Оценка сна, тревоги и настроения с подбором стратегии помощи.
            </div>
            <div class="title-black-mob">Понятная логика лечения</div>
            <div class="desc-black-mob">
              Каждый шаг объясняется и согласуется с вами.
            </div>

            <img src="../assets/img/item4.png" alt="item4" />
          </div>
        </div>
        <div class="item-right-big item-purple">
          <div class="title">Очно и онлайн</div>
          <div class="description">
            Консультации в клинике или дистанционно из любой точки мира.
          </div>
          <img class="main-img" src="../assets/img/big.png" alt="img" />
          <img
            class="vector10"
            src="../assets/img/Vector 10.png"
            alt="Vector 10"
          />
          <img
            class="vector9"
            src="../assets/img/Vector 9.png"
            alt="Vector 9"
          />
          <img
            class="vector8"
            src="../assets/img/Vector 8.png"
            alt="Vector 8"
          />
        </div>
      </div>
      <div class="block-3">
        <div class="block-3-left">
          <div class="title">Давайте поговорим</div>
          <div class="desc">
            Оставьте несколько слов о своём <br />
            сне или самочувствии.
          </div>
          <div class="main-img">
            <img src="../assets/img/talk.png" alt="img" />
          </div>
          <img src="../assets/img/talk5.png" alt="talk5" class="talk5" />
          <img src="../assets/img/talk6.png" alt="talk6" class="talk6" />
        </div>
        <div class="block-3-right">
          <form @submit.prevent="submitForm">
            <div class="input">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 11C13.5313 11 15.5834 8.94798 15.5834 6.41668C15.5834 3.88537 13.5313 1.83334 11 1.83334C8.46872 1.83334 6.41669 3.88537 6.41669 6.41668C6.41669 8.94798 8.46872 11 11 11Z"
                  stroke="#565656"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.8742 20.1667C18.8742 16.6192 15.345 13.75 11 13.75C6.65502 13.75 3.12585 16.6192 3.12585 20.1667"
                  stroke="#565656"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <input
                type="text"
                name="fio"
                placeholder="Ваше имя"
                v-model="fio"
              />
              <div v-if="errors.fio" class="error-input">{{ errors.fio }}</div>
            </div>

            <div class="input">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.1391 16.8025C20.1391 17.1325 20.0658 17.4716 19.91 17.8016C19.7541 18.1316 19.5525 18.4433 19.2866 18.7366C18.8375 19.2316 18.3425 19.5891 17.7833 19.8183C17.2333 20.0475 16.6375 20.1666 15.9958 20.1666C15.0608 20.1666 14.0616 19.9466 13.0075 19.4975C11.9533 19.0483 10.8991 18.4433 9.85415 17.6825C8.79998 16.9125 7.80081 16.06 6.84748 15.1158C5.90331 14.1625 5.05081 13.1633 4.28998 12.1183C3.53831 11.0733 2.93331 10.0283 2.49331 8.99248C2.05331 7.94748 1.83331 6.94831 1.83331 5.99498C1.83331 5.37165 1.94331 4.77581 2.16331 4.22581C2.38331 3.66665 2.73165 3.15331 3.21748 2.69498C3.80415 2.11748 4.44581 1.83331 5.12415 1.83331C5.38081 1.83331 5.63748 1.88831 5.86665 1.99831C6.10498 2.10831 6.31581 2.27331 6.48081 2.51165L8.60748 5.50915C8.77248 5.73831 8.89165 5.94915 8.97415 6.15081C9.05665 6.34331 9.10248 6.53581 9.10248 6.70998C9.10248 6.92998 9.03831 7.14998 8.90998 7.36081C8.79081 7.57165 8.61665 7.79165 8.39665 8.01165L7.69998 8.73581C7.59915 8.83665 7.55331 8.95581 7.55331 9.10248C7.55331 9.17581 7.56248 9.23998 7.58081 9.31331C7.60831 9.38665 7.63581 9.44165 7.65415 9.49665C7.81915 9.79915 8.10331 10.1933 8.50665 10.67C8.91915 11.1466 9.35915 11.6325 9.83581 12.1183C10.3308 12.6041 10.8075 13.0533 11.2933 13.4658C11.77 13.8691 12.1641 14.1441 12.4758 14.3091C12.5216 14.3275 12.5766 14.355 12.6408 14.3825C12.7141 14.41 12.7875 14.4191 12.87 14.4191C13.0258 14.4191 13.145 14.3641 13.2458 14.2633L13.9425 13.5758C14.1716 13.3466 14.3916 13.1725 14.6025 13.0625C14.8133 12.9341 15.0241 12.87 15.2533 12.87C15.4275 12.87 15.6108 12.9066 15.8125 12.9891C16.0141 13.0716 16.225 13.1908 16.4541 13.3466L19.4883 15.5008C19.7266 15.6658 19.8916 15.8583 19.9925 16.0875C20.0841 16.3166 20.1391 16.5458 20.1391 16.8025Z"
                  stroke="#565656"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
              </svg>
              <IMaskComponent
                v-model="phoneNumber"
                mask="+{7} (000) 000-00-00"
                placeholder="+7"
              />
              <div v-if="errors.phoneNumber" class="error-input">
                {{ errors.phoneNumber }}
              </div>
            </div>
            <textarea
              id=""
              cols="30"
              rows="10"
              name="msg"
              placeholder="Сообщение"
              v-model="msg"
            ></textarea>
            <div v-if="errors.msg" class="error-input">{{ errors.msg }}</div>

            <div class="wpcf7-acceptance">
              <input type="checkbox" v-model="hasAccepted" />
              <span>
                Я даю согласие на обработку данных в соответствии с Политикой
                конфиденциальности
              </span>
              <div v-if="errors.accept" class="error-input">
                {{ errors.accept }}
              </div>
            </div>

            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.block-1 {
  display: flex;
  justify-content: space-between;
  margin-top: 129px;
  margin-bottom: 80px;
  .block-1-left {
    width: 495px;
    .description {
      font-size: 44px;
      font-weight: 500;
    }
    .title {
      color: rgba(137, 69, 247, 1);
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    .title-mob {
      display: none;
    }
    .title-mob {
      color: rgba(137, 69, 247, 1);
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 16px;
    }
  }
  .block-1-right {
    width: 563px;
    display: flex;
    align-items: center;
    .description {
      font-weight: 400;
      font-size: 22px;
    }
  }
}
.block-2 {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 128px;
  .item-right-big-mob {
    display: none;
  }
  .item-right-big {
    border-radius: 50px;
    width: 610px;
    height: 600px;
    padding: 34px 48px;
    position: relative;
    overflow: hidden;
    .main-img {
      position: relative;
      z-index: 50;
    }
    .vector10 {
      position: absolute;
      bottom: 0px;
      right: 0px;
      z-index: 40;
    }
    .vector9 {
      position: absolute;
      bottom: -4px;
      right: -1px;
      z-index: 30;
    }
    .vector8 {
      position: absolute;
      bottom: -110px;
      right: 0px;
      z-index: 20;
    }
  }
  .title {
    color: white;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .description {
    font-size: 20px;
    font-weight: 400;
    color: white;
  }
  .title-black {
    color: rgba(0, 0, 0, 1);
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .desc-black {
    font-size: 20px;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
  }
  .desc {
    color: white;
    font-size: 20px;
    max-width: 363px;
    font-weight: 400;
  }
  .item-purple {
    background: rgba(137, 69, 247, 1);
  }
  .item-purple-light {
    background: rgba(200, 182, 255, 1);
  }
  .item-border {
    border: 2px solid rgba(137, 69, 247, 1);
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex: 1;
    gap: 20px;
    .item-1 {
      width: 660px;
      position: relative;
      img {
        position: absolute;
        top: 14px;
        right: 0;
      }
    }
    .item-2 {
      width: 446px;
      position: relative;
      img {
        position: absolute;
        top: 69px;
        right: 14px;
      }
    }
    .item-3 {
      width: 446px;
      position: relative;
      img {
        position: absolute;
        top: 74px;
        right: 14px;
      }
    }
    .item-4 {
      width: 660px;
      position: relative;
      .title-black-mob {
        display: none;
      }
      .desc-black-mob {
        display: none;
      }
      img {
        position: absolute;
        top: 60px;
        right: 4px;
      }
    }
    .item {
      padding: 34px 48px;

      border-radius: 50px;
      min-height: 290px;
    }
  }
}
.block-3 {
  display: flex;
  background: rgba(247, 244, 255, 1);
  margin-bottom: 128px;
  border-bottom-left-radius: 70px;
  border-top-left-radius: 70px;
  overflow: hidden;
  .block-3-left {
    width: 50%;
    padding: 64px;
    position: relative;

    .talk5 {
      position: absolute;
      bottom: 0px;
      left: 0;
    }
    .talk6 {
      position: absolute;
      bottom: 0px;
      left: 0;
    }
    .main-img {
      text-align: center;
    }
    .title {
      text-align: center;
      font-size: 44px;
      font-weight: 500;
      margin-bottom: 11px;
    }
    .desc {
      text-align: center;
      font-size: 20px;
      font-weight: 400;
      margin-bottom: 28px;
    }
  }
  .block-3-right {
    width: 50%;
    background: rgba(137, 69, 247, 1);
    border-radius: 70px;
    padding: 52px 92px;
    form {
      display: flex;
      flex-direction: column;
      .error-input {
        color: red;
        margin-bottom: 20px;
      }
      .input {
        position: relative;
        svg {
          position: absolute;
          top: 23px;
          left: 30px;
        }
        input {
          border-radius: 25px;
          height: 66px;
          border: none;
          outline: none;
          margin-bottom: 24px;
          font-size: 20px;
          font-weight: 400;
          padding-left: 68px;
          padding-right: 68px;
          width: 100%;
        }
      }
      textarea {
        border-radius: 25px;
        height: 142px;
        border: none;
        outline: none;
        margin-bottom: 24px;
        font-size: 20px;
        font-weight: 400;
        padding: 25px 30px;
        width: 100%;
        resize: none;
      }
      button {
        background: rgba(255, 255, 255, 1);
        text-align: center;
        color: rgba(137, 69, 247, 1);
        height: 62px;
        border: none;
        outline: none;
        border-radius: 40px;
        font-size: 20px;
        font-weight: 600;
        margin-top: 32px;
      }
      button:hover {
        color: white;
        background: rgba(137, 69, 247, 1);
        transition: 0.3s;
        cursor: pointer;
      }
      /*для надписи*/
      .wpcf7-acceptance {
        display: flex;
        align-items: center;
      }
      .wpcf7-acceptance span {
        font-size: 18px;
        margin-left: 15px;
        color: white;
        line-height: 120%;
      }
      /* checkbox contactform */
      .wpcf7-acceptance input[type="checkbox"] {
        position: relative;
        cursor: pointer;
        padding: 0;
        margin-right: 0px;
        width: 20px;
      }
      .wpcf7-acceptance input[type="checkbox"]:hover:before {
        background: rgb(137, 69, 247);
        border: 1px solid white;
      }
      .wpcf7-acceptance input[type="checkbox"]:before {
        content: "";
        margin-right: 0px;
        display: inline-block;
        margin-top: -3px;
        width: 20px;
        height: 20px;
        background: rgb(137, 69, 247);
        border: 1px solid white;

        border-radius: 50%;
        position: relative;
        left: -4px;
      }
      .wpcf7-acceptance input[type="checkbox"]:checked:before {
        background: white;
        border: 1px solid white;
      }
      .wpcf7-acceptance input[type="checkbox"]:disabled {
        color: #b8b8b8;
        cursor: auto;
      }
      .wpcf7-acceptance input[type="checkbox"]:disabled:before {
        box-shadow: none;
        background: #ddd;
      }
      .wpcf7-acceptance input[type="checkbox"]:checked:after {
        content: "";
        position: absolute;
        left: 5px;
        top: 8px;
        background: white;
        width: 2px;
        height: 2px;
        box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white,
          4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;
        transform: rotate(45deg);
      }
    }
  }
}

@media (max-width: 1000px) {
  .block-2 .items {
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: space-between;
  }
  .block-2 {
    flex-direction: column;
  }
  .block-1 {
    flex-direction: column;
    margin-top: 64px;
    margin-bottom: 40px;
    .block-1-left {
      width: auto;
      .title {
        display: none;
      }
      .title-mob {
        display: block;
      }
      .description {
        font-size: 24px;
        max-width: 382px;
      }
    }

    .block-1-right .description {
      display: none;
    }
  }
  .block-2 {
    display: inline-block;
    width: 100%;
    margin-bottom: 64px;
    .title-black {
      color: white;
      font-size: 18px;
      display: none;
    }
    .title-black-mob {
      display: block !important;
      color: white;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .desc-black-mob {
      display: block !important;
      color: white;
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 10px;
    }

    .desc-black {
      color: white;
      font-size: 16px;
      display: none;
    }
    .title {
      font-size: 18px;
    }
    .description {
      font-size: 16px;
    }
    .desc {
      font-size: 16px;
    }
    .items {
      width: 100%;
      gap: 40px;
      .item {
        padding: 26px 24px;
        min-height: 270px;
        border-radius: 30px;
      }
      .item-1 {
        width: 100%;
        img {
          width: 261px;
          height: auto;
          top: 58%;
          left: 50%;
          margin-right: -50%;
          transform: translate(-50%, -50%);
        }
      }
      .item-2 {
        width: 100%;
        img {
          width: 261px;
          height: auto;
          top: 58%;
          left: 50%;
          margin-right: -50%;
          transform: translate(-50%, -50%);
        }
      }
      .item-3 {
        width: 100%;
        img {
          width: 392px;
          height: auto;
          top: 58%;
          left: 50%;
          margin-right: -50%;
          transform: translate(-50%, -50%);
        }
      }
      .item-4 {
        width: 100%;
        background: rgb(137, 69, 247);
        img {
          width: 300px;
          height: auto;
          top: 58%;
          left: 50%;
          margin-right: -50%;
          transform: translate(-50%, -50%);
        }
      }
    }

    .item-right-big {
      display: none;
    }
    .item-img {
      display: block;
      width: 100%;
      text-align: center;
    }

    .item-right-big-mob {
      display: block;
      border-radius: 30px;
      width: 100%;
      height: 466px;
      padding: 24px 24px;
      position: relative;
      overflow: hidden;
      .main-img {
        position: relative;
        z-index: 50;
        height: auto;
        width: 376px;

        top: 44%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
      .vector10 {
        position: absolute;
        bottom: -73px;
        right: 0px;
        z-index: 40;
      }
      .vector9 {
        position: absolute;
        bottom: -106px;
        right: -1px;
        z-index: 30;
      }
      .vector8 {
        display: none;
        position: absolute;
        bottom: -110px;
        right: 0px;
        z-index: 20;
      }
    }
  }
  .block-3 {
    display: block;
    border-radius: 30px;
    overflow: hidden;
    margin-bottom: 30px;
    .block-3-left {
      width: 100%;
      padding: 30px;
      margin-bottom: 20px;
      border-radius: 30px;
      overflow: hidden;

      .title {
        font-size: 30px;
      }
      .desc {
        font-size: 15px;
      }
      .main-img img {
        width: 150px;
      }
      .talk5 {
        bottom: -125px;
        left: 0;
      }
    }
    .block-3-right {
      width: 100%;
      padding: 30px 20px;
      border-radius: 25px;
      form .input input {
        font-size: 17px;
        margin-bottom: 15px;
        height: 50px;
      }
      form .input svg {
        top: 13px;
      }
      form textarea {
        font-size: 17px;
        height: 100px;
        padding: 17px 20px;
      }
      form .wpcf7-acceptance span {
        font-size: 15px;
      }
      form button {
        font-size: 17px;
        margin-top: 20px;
      }
    }
  }
}
</style>

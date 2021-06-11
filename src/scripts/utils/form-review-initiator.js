import RestaurantDbSource from "../data/restaurantdb-source";

const FormReviewInitiator = {
  init({ form, elementResult }) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._dataInputValidation(form, elementResult);
    });
  },

  _setDataForm(form) {
    const data = new FormData(form);
    const dataForm = {};
    for (const key of data.keys()) {
      dataForm[key] = data.get(key);
    }
    return dataForm;
  },

  _dataInputValidation(form, elementResult) {
    const data = this._setDataForm(form);
    const error = {
      status: false,
      keys: [],
    };

    for (const key in data) {
      if (data[key] === "") {
        error.status = true;
        error.keys.push(key);
      }
    }

    if (error.status === false) {
      this._addReview({
        data: JSON.stringify(data),
        elementResult,
      });
    } else {
      this._failedHandler(error, elementResult);
    }
  },

  _successHandler(response, elementResult) {
    // eslint-disable-next-line no-param-reassign
    elementResult.innerHTML = `<p>${response.message} to add a review</p>`;
  },

  _failedHandler(error, elementResult) {
    error.keys.forEach((key) => {
      // eslint-disable-next-line no-param-reassign
      elementResult.innerHTML = `<p>${key} cannot empty!</p>`;
    });
  },

  async _addReview({ data, elementResult }) {
    try {
      const response = await RestaurantDbSource.addReviewRestaurant(data);
      this._successHandler(response, elementResult);
    } catch (err) {
      this._failedHandler(err);
    }
  },
};

export default FormReviewInitiator;

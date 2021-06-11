import RestaurantDbSource from "../data/restaurantdb-source";

const ReviewFormInitiator = {
  init({ form, elementResult }) {
    this._elementResult = elementResult;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._dataInputValidation(form);
    });
  },

  _dataInputValidation(form) {
    const data = this._setDataForm(form);
    const error = {
      status: false,
      keys: [],
    };

    /* todo for validation
    for (const key in data) {
      if (data[key] === "") {
        error.status = true;
        error.keys.push(key);
      }
    } */

    if (error.status === false) {
      this._addReview({
        data: JSON.stringify(data),
      });
    } else {
      this._failedHandler(error);
    }
  },

  _setDataForm(form) {
    const data = new FormData(form);
    const dataForm = {};
    for (const key of data.keys()) {
      dataForm[key] = data.get(key);
    }
    return dataForm;
  },

  async _addReview(data, elementResult) {
    try {
      const responseAddReview = await RestaurantDbSource.addReviewRestaurant(
        data
      );
      this._successHandler(responseAddReview, elementResult);
    } catch (error) {
      this._failedHandler(error.message, elementResult);
    }
  },

  _successHandler(response) {
    this._elementResult.innerText = response.message;
  },

  _failedHandler(error) {
    this._elementResult.innerText = error.message;
  },
};

export default ReviewFormInitiator;

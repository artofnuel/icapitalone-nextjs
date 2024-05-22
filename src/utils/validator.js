function validateForm(callbackElementId) {
  let errors = {};
  ["select", "textarea", "input"].map((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      const error = validateInput(element);
      if (error) {
        errors[element.name] = error;
      } else {
        delete errors[element.name];
      }

      handleErrorDisplay(errors[element.name], element);
    });
  });

  if (callbackElementId) {
    let callbackElement = document.getElementById(callbackElementId);

    if (callbackElement) {
      callbackElement.disabled = Object.values(errors).length > 0;
    }
  }
  console.log(errors);
  return errors;
}
/**
 * @param {HTMLElement} element
 */
function validateInput(element) {
  if (element.value == "" && !element.checkValidity()) {
    return element.validationMessage;
  }
  return null;
}

/**
 * @param {HTMLElement} element
 */
function handleErrorDisplay(error, element) {
  let errorElement = element.parentElement.querySelector(".invalid-feedback");
  if (error) {
    element.classList.add("is-invalid");

    if (!errorElement) {
      errorElement = document.createElement("div");
      errorElement.classList.add("invalid-feedback");
      element.parentElement.appendChild(errorElement);
    }
    errorElement.textContent = error;
  } else {
    element.classList.remove("is-invalid");
    if (errorElement) {
      errorElement.remove();
    }
  }
}
export { validateForm };

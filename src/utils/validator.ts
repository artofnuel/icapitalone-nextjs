function validateForm(callbackElementId: string): { [key: string]: string } {
  let errors: { [key: string]: string } = {}; // Define the type explicitly
  ["select", "textarea", "input"].forEach((selector) => { 
    // Use forEach instead of map for iteration
    document.querySelectorAll(selector).forEach((element) => {
      const error = validateInput(element);
      if (error) {
        errors[(element as HTMLInputElement).name] = error;
      } else {
        delete errors[(element as HTMLInputElement).name];
      }

      handleErrorDisplay(error, element);
    });
  });

  if (callbackElementId) {
    let callbackElement = document.getElementById(callbackElementId);

    if (callbackElement) {
      callbackElement.toggleAttribute("disabled", Object.keys(errors).length > 0);
    }
  }
  return errors;
}

/**
 * Validate the input element.
 * @param {Element} element - The input element to validate.
 * @returns {string | null} - The validation error message or null if valid.
 */
function validateInput(element: Element): string | null {
  if ((element as HTMLInputElement).validity && !(element as HTMLInputElement).validity.valid) {
    return (element as HTMLInputElement).validationMessage;
  }
  return null;
}

/**
 * Handle the display of error messages.
 * @param {string | null} error - The error message to display or null if no error.
 * @param {Element} element - The input element related to the error.
 */
function handleErrorDisplay(error: string | null, element: Element): void {
  let errorElement = element.parentElement?.querySelector(".invalid-feedback");
  if (error) {
    element.classList.add("is-invalid");

    if (!errorElement) {
      errorElement = document.createElement("div");
      errorElement.classList.add("invalid-feedback");
      element.parentElement?.appendChild(errorElement);
    }
    if (errorElement) errorElement.textContent = error;
  } else {
    element.classList.remove("is-invalid");
    errorElement?.remove();
  }
}

export { validateForm };

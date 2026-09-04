# Temperature Converter

A simple, interactive web tool that converts temperature values between Celsius, Fahrenheit, and Kelvin, with real-time input validation.

**Internship:** Oasis Infobyte (OIBSIP)
**Track:** Web Development
**Level:** 1
**Task:** 3

---

## Features

- Convert between **Celsius**, **Fahrenheit**, and **Kelvin**
- Input validation — rejects empty or non-numeric entries with a clear error message
- Absolute zero validation — rejects values below −273.15°C / −459.67°F / 0K
- Displays all three converted values simultaneously
- Convert on button click or by pressing **Enter**
- Clear/reset button to reset the form
- Clean, centered, responsive UI

---

## Tech Stack

- **HTML5** — structure
- **CSS3** — styling and layout
- **JavaScript (Vanilla)** — logic, validation, DOM manipulation

No frameworks, libraries, or build tools required.

---

## Project Structure

```
WebDevelopment-Level1Task3-TemperatureConverter/
├── index.html        # Page structure and markup
├── style.css         # Styling and layout
├── script.js         # Conversion logic, validation, event handlers
├── README.md         # Project documentation
└── screenshots/      # Screenshots of the working application
```

---

## How to Run

1. Download or clone this folder.
2. Make sure `index.html`, `style.css`, and `script.js` are all in the **same folder**.
3. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari) by double-clicking it.
4. No server or installation is needed — it runs entirely in the browser.

---

## How to Use

1. Enter a temperature value in the input field.
2. Select the unit of the value you entered (Celsius, Fahrenheit, or Kelvin) from the dropdown.
3. Click **Convert** (or press **Enter**).
4. The converted values in all three units are displayed below.
5. Click **Clear** to reset the form.

---

## Conversion Formulas Used

| From | To | Formula |
|------|----|---------|
| Celsius | Fahrenheit | `F = (C × 9/5) + 32` |
| Fahrenheit | Celsius | `C = (F − 32) × 5/9` |
| Celsius | Kelvin | `K = C + 273.15` |
| Kelvin | Celsius | `C = K − 273.15` |

All conversions are chained through Celsius as the common intermediate, and results are rounded to 2 decimal places.

---

## Validation Rules

1. **Empty input** → "Please enter a temperature value."
2. **Non-numeric input** (letters, symbols, invalid formatting) → "Please enter a valid number (digits only, e.g. 37 or -12.5)."
3. **Below absolute zero** for the selected unit → a friendly error message stating the coldest possible value for that unit.

---

## Screenshots

Screenshots of the working application are available in the `screenshots/` folder.

| Screenshot | Description |
|---|---|
| `screenshots/home.png` | Default view of the converter |
| `screenshots/result.png` | Converted values displayed after clicking Convert |
| `screenshots/error.png` | Validation error message shown for invalid input |

---

## Author

Submitted as part of the Oasis Infobyte Web Development Internship (OIBSIP).

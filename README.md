# desktop.abd mobile calculator

## Calculator application

This project features a sleek, responsive calculator with its core logic handled by a robust Go backend. It provides basic arithmetic operations through an intuitive web interface.

### Table of Contents
- [Features](#Basic Arithmetic)
- [Technologies Used](#technologies-used)
- [How to Run Locally](#how-to-run-locally)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

### Features

* **Basic Arithmetic Operations:** Supports addition (+), subtraction (-), multiplication (*), division (/), modulo (%), and exponentiation (^).
* **Clear All (C) & Clear Entry (CE):** Convenient buttons for managing input.
* **Responsive User Interface:** Adapts to various screen sizes for a consistent experience on desktop and mobile.
* **Go Backend:** All calculations are securely and efficiently performed on the server-side using Go.
* **User-Friendly Display:** Allows selection and copying of results from the output screen.


### Technologies Used

* **Frontend:**
    * HTML5
    * CSS3 (with responsive design principles)
    * JavaScript
* **Backend:**
    * Go (Golang)
    * [`net/http` package](https://pkg.go.dev/net/http) (for web server functionality)
    * [`math` package](https://pkg.go.dev/math) (for exponentiation and other operations)
* **Version Control:**
    * Git
    * GitHub

### How to Run Locally

Follow these steps to get the calculator up and running on your local machine.

#### Prerequisites

Before you begin, ensure you have the following installed:

* **Go:** [Download and install Go](https://golang.org/doc/install) (version 1.16 or higher recommended).
* **Git:** [Download and install Git](https://git-scm.com/downloads).
* **wails** install wails 
#### Installation Steps

1.  **Clone the repository:**
    Open your terminal or command prompt and run:
    ```bash
    git clone [https://github.com/SuperninjaXII/calculator-go-.git](https://github.com/SuperninjaXII/calculator-go-.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd calculator-go-/app
    ```
3.  **Run the Go Backend:**
    From within the `app` directory and build.
    ```bash
    wails build
    ```
    *The server typically runs on `http://localhost:8080` by default. You can check your terminal output for the exact address and port.*

4.  **Access the Frontend:**
    for development run
    ```bash
    wails dev
    ```
    You should now see the calculator interface.

### Usage

1.  **Enter Numbers:** Click the numerical buttons (0-9) to input numbers into the display.
2.  **Select Operations:** Click the operator buttons (+, -, *, /, %, ^) to perform arithmetic operations.
3.  **Clear All (C):** Click the 'C' button to clear the entire display.
4.  **Clear Entry (CE):** Click the 'CE' button (represented by a back-arrow icon) to remove the last character from the display.
5.  **Calculate:** Click the '=' button to evaluate the expression and display the result.
6.  **Copy Result:** You can select and copy the text from the display input field.

### Future Enhancements

* **Keyboard Support:** Add full keyboard input for numbers and operations.
* **Operation History:** Implement a feature to view previous calculations.
* **Error Handling:** Enhance error messages for invalid expressions or division by zero.
* **More Advanced Functions:** Include scientific calculator functions (e.g., sin, cos, tan, log).
* **Unit Tests:** Implement comprehensive tests for both frontend and backend logic.
* **Scientific Calculations:** Advanced Scientific Calculations
### Contributing

Contributions are welcome! If you'd like to improve this calculator, please follow these steps:

1.  Fork the repository (`https://github.com/SuperninjaXII/calculator-go-/fork`).
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

### License

This project is open-source and available under the **MIT License**.

---

**Author:** [- SuperninjaXII (https://github.com/SuperninjaXII) - VoxyJr https://github.com/VoxyJr ]

---

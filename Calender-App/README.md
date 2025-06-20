

# CalendarApp

CalendarApp is a simple and interactive calendar built with **React**, **Day.js**, and **Tailwind CSS**. It lets you easily navigate through months and view scheduled events.

---

## Features

* **Monthly Navigation**: Move between previous and next months with ease.
* **Current Day Highlight**: See today's date clearly highlighted.
* **Event Display**: View event titles directly on the calendar days.
* **Event Details**: Hover over an event to see its full title and time.

---

## Setup and Installation

1.  **Clone the repository** (or navigate to your project directory).
2.  **Install dependencies**:
    ```bash
    npm install
    # OR
    yarn install
    ```
3.  **Create `public/events.json`** and add your event data (example provided below).
4.  **Run the app**:
    ```bash
    npm start
    # OR
    yarn start
    ```
    This will open the app in your browser, usually at `http://localhost:3000`.

### Example `events.json`

```json
[
  {
    "title": "Team Meeting",
    "date": "2025-06-22",
    "time": "14:00",
    "duration": "1h"
  },
  {
    "title": "Demo Review",
    "date": "2025-06-22",
    "time": "14:00",
    "duration": "30m"
  },
  {
    "title": "Hackathon",
    "date": "2025-06-24",
    "time": "09:00",
    "duration": "8h"
  }
]
```

---

## Technologies

* **React**: For building the user interface.
* **Day.js**: For date and time manipulation.
* **Tailwind CSS**: For quick and responsive styling.

---

## Customization

* Modify the `events.json` file to update your calendar events.
* Adjust Tailwind CSS classes in `App.js` for styling changes.

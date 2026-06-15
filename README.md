# Interview Command Center

## Open the app

Double-click `Launch Interview App.cmd`, or open `index.html` in a browser.

The app is self-contained and works offline. No installation or build command is required.

## Fast controls

- `/` or `Ctrl+K`: focus search
- `Up` / `Down`: move through matching questions
- `Enter`: open the first search result
- `Esc`: clear search or close the mobile menu
- `Focus mode`: hide navigation and enlarge the answer

## Update the content

The app data is generated from `build_interview_guide.py`.

From the project root:

```powershell
python generate_interview_app_data.py
```

This rebuilds `interview-app/data.js` while preserving the app layout and interactions.

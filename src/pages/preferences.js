import { useState } from 'react';

export default function Preferences() {
  const [preference, setPreference] = useState({
    notifications: true,
    darkMode: false,
  });

  const handleInputChange = (event) => {
    setPreference({
      ...preference,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="p-4 pl-[6rem]">
      <h1 className="text-2xl font-bold mb-4">Preferences</h1>
      <div className="space-y-4">
        <div>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="notifications"
              checked={preference.notifications}
              onChange={handleInputChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="text-gray-900 font-medium">Enable Notifications</span>
          </label>
        </div>
        <div>
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="darkMode"
              checked={preference.darkMode}
              onChange={handleInputChange}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="text-gray-900 font-medium">Enable Dark Mode</span>
          </label>
        </div>
      </div>
    </div>
  );
}
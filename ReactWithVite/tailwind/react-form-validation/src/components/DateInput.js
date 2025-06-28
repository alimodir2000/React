const DateInput = ({ 
  value, 
  onChange, 
  error = [], 
  touched = false, 
  name = "birthdate",
  label = "Birth Date",
  placeholder = "Select your birth date"
}) => {
  const hasError = touched && error.length > 0;

  // Calculate max date (must be at least 13 years old)
  const today = new Date();
  const maxDate = new Date(today.getFullYear() - 13, today.getMonth(), today.getDate());
  const maxDateString = maxDate.toISOString().split('T')[0];

  // Min date (reasonable age limit - 120 years old)
  const minDate = new Date(today.getFullYear() - 120, today.getMonth(), today.getDate());
  const minDateString = minDate.toISOString().split('T')[0];

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      
      <div className="relative">
        <input
          type="date"
          name={name}
          value={value}
          onChange={onChange}
          min={minDateString}
          max={maxDateString}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-colors
            ${hasError
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-gray-300 focus:ring-blue-500'
            }`}
          placeholder={placeholder}
        />
        
        {/* Calendar icon */}
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>

      {hasError && (
        <div className="text-red-600 text-sm space-y-1">
          {error.map((err, index) => (
            <div key={index}>{err}</div>
          ))}
        </div>
      )}
      
      {value && !hasError && (
        <div className="text-sm text-gray-600">
          Age: {Math.floor((new Date() - new Date(value)) / (365.25 * 24 * 60 * 60 * 1000))} years old
        </div>
      )}
    </div>
  );
};

export default DateInput;
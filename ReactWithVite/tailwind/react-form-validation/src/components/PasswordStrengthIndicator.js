const PasswordStrengthIndicator = ({ password }) => {
  const getPasswordStrength = (pwd) => {
    let score = 0;
    if (!pwd) return { score: 0, text: '', color: '' };
    
    // Length check
    if (pwd.length >= 8) score += 1;
    if (pwd.length >= 12) score += 1;
    
    // Character variety checks
    if (/[a-z]/.test(pwd)) score += 1;
    if (/[A-Z]/.test(pwd)) score += 1;
    if (/[0-9]/.test(pwd)) score += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;
    
    if (score < 3) return { score, text: 'Weak', color: 'bg-red-500' };
    if (score < 5) return { score, text: 'Medium', color: 'bg-yellow-500' };
    return { score, text: 'Strong', color: 'bg-green-500' };
  };

  const strength = getPasswordStrength(password);
  const width = (strength.score / 6) * 100;

  if (!password) return null;

  return (
    <div className="mt-2 space-y-2">
      <div className="flex justify-between text-xs">
        <span className="text-gray-600">Password strength:</span>
        <span className={`font-medium ${
          strength.text === 'Weak' ? 'text-red-600' :
          strength.text === 'Medium' ? 'text-yellow-600' :
          'text-green-600'
        }`}>
          {strength.text}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-300 ${strength.color}`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default PasswordStrengthIndicator;
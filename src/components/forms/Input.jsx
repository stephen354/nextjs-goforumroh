import styles from '@/styles/components/_form.module.scss'
import Image from 'next/image';
import { useState } from 'react';

export default function Input({ label, name, value,placeholder, onChange, type = "text", className="" }) {
  return (
    <div className={styles.input}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
      />
    </div>
  );
}

export function PasswordInput({ label, name, value,placeholder, onChange, className=""}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>{label}</label>

      <div className={`${styles.inputWrapper} ${className}`}>
        <input
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          type={showPassword ? "text" : "password"}
          className={styles.inputPass}
        />

        <button
          type="button"
          className={styles.eyeButton}
          onClick={() => setShowPassword(!showPassword)}
        >
           <Image
            src={showPassword ? "/icons/eye-hide.png" : "/icons/eye.png"}
            alt="toggle password"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
}

export function PhoneInput({ label, name, value, placeholder,onChange, type = "text", className="" }) {
  const countryCodes = ["+1", "+62", "+44"];
  const [selectedCode, setSelectedCode] = useState(countryCodes[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (code) => {
    setSelectedCode(code);
    setIsOpen(false);
    if (value) {
      const number = value.replace(selectedCode, "");
      onChange({
        target: {
          name,
          value: code + number
        }
      });
    }
  };

   const handleChange = (e) => {
    const number = e.target.value;
    onChange({
      target: {
        name,
        value: selectedCode + number
      }
    });
  };



  return (
    <div className={`${styles["wrapper"]} ${styles["wrapper-dropdown"]}`}>
      <label className={styles.label}>{label}</label>

      <div className={`${styles['inputWrapper']} ${styles['inputWrapper-dropdown']}`}>
        {/* LEFT: Dropdown */}
        <div
          className={styles.dropdown}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedCode}</span>
          <span className={styles.arrow}>▼</span>
        </div>

        {isOpen && (
          <ul className={styles.dropdownList}>
            {countryCodes.map((code) => (
              <li
                key={code}
                className={styles.dropdownItem}
                onClick={() => handleSelect(code)}
              >
                {code}
              </li>
            ))}
          </ul>
        )}

        {/* Vertical Divider */}
        <div className={styles.divider} />

        {/* RIGHT: Input Number */}
        <input
          id={name}
          type={type}
          name={name}
          className={`${styles.inputDropdown} ${className}`}
          placeholder={placeholder}
          value={value.replace(selectedCode, "")}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

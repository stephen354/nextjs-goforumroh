import styles from '@/styles/components/_form.module.scss'

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

export function InputPass({ label, name, value,placeholder, onChange, type = "password" }) {
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
      />

    <span>👁️</span>
    </div>
  );
}

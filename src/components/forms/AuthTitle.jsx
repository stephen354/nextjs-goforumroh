import styles from '@/styles/components/_form.module.scss'

export default function AuthTitle({title,subtitle, className = ""}){
    return (
         <div className={`${styles.formSide} ${className}`}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
    )
}
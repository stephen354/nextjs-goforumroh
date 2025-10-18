import styles from '@/styles/components/_form.module.scss'

export default function Terms(){
    return(
        <div className={styles.formTerms}>
            <p>
                By signing in or creating an account, you agree with our <strong>Terms & conditions</strong> and <strong>Privacy statement</strong>
            </p>        
        </div>
    )
}
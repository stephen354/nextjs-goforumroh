import style from "@/styles/components/dashboard/dashboard.module.scss";

export default function Title({title,value}){
    return (
        <div className={style.title}>
            <h3>{title}</h3>
            <button>{value}</button>
        </div>
    );
}
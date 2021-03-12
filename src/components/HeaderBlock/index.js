import s from './style.module.css';

const HeaderBlock = ({title, hideBackground = false, description}) => {
    const styleRoot = hideBackground ? {backgroundImage: 'none'} : {};
    return (
        <div className={s.root} style={styleRoot}>
            <div className={s.container}>
                {
                    title && (<h1 className={s.header}>{title}</h1>)
                }
                {description && <p className={s.paragraph}>{description}</p>}
            </div>
        </div>
    );
}

export default HeaderBlock;
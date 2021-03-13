import s from './style.module.css';

const Layout = ({title, urlBg, colorBg, children}) => {
    const styleRoot = {};
    if (urlBg) {
        styleRoot.backgroundImage = `url(${urlBg})`;
    }
    if (colorBg) {
        styleRoot.backgroundColor = colorBg;
    }

    return (
        <section className={s.root} style={styleRoot}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        {title && <h3>{title}</h3>}
                        <span className={s.separator}/>
                    </div>
                    <div className={[s.desc, s.full]}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Layout;
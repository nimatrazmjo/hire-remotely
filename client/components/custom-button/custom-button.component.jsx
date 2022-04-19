export default ({children, className,...otherProps}) => (
    <button className={`${className}`} {...otherProps}>{children}</button>
)
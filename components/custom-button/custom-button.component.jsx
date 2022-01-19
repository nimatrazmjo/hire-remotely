export default ({children, className,...otherProps}) => (
    <button className={`bg-emerald-500 text-white ${className}`} {...otherProps}>{children}</button>
)
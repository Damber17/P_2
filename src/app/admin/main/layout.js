const Layout = ({children}) => {
    return (
        <div style={{position: 'absolute', top: 0, left: 0, width: '100%'}}>
            {children}
        </div>
    )
}
export default Layout
enum ERouterPath {
    MAIN = '/',
    ONE = '/:id',
    DELETE = `${ERouterPath.ONE}/delete`,
    EDIT = `${ERouterPath.ONE}/edit`,
    ADD = '/add',
}

export {ERouterPath}

declare const SRC: string

declare module "inline:*" {
    const content: string
    export default content
}

declare module "*.scss" {
    import sass from 'sass'
    const content: sass
    export default content
}

declare module "*.blp" {
    const content: string
    export default content
}

declare module "*.css" {
    const content: string
    export default content
}

declare module "*.kdl" {
    const content: string;
    export default content
}

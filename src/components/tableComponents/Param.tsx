export type PaginationParam = {
    start: number,
    end: number,
    active?: number,
    handleClick: React.MouseEventHandler<HTMLElement>
}
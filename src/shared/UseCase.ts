export default interface IUseCase<T, Y> {
    /**
     * run
     */
    run(data: T): Y;
}
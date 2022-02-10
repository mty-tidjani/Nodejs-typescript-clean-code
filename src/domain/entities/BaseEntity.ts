export default abstract class BaseEntity {
    constructor (data: any) {
        if (!data) {
            throw new Error('Data must be valid!');
        }
    }
}
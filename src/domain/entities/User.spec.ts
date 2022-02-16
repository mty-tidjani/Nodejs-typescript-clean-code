import { UserEntity } from "./User"

describe('User Entity', () => {
    let userData: any

    beforeEach(() => {
        userData = {
            name: 'Test user',
            username: 'Test username',
            email: "email.me@test.com",
            password: 'password'
        }
    })

    it('should throw if userData is null', () => {
        userData = undefined
        expect(() => new UserEntity(userData)).toThrow()
    })

    it('should throw if name is invalid or absent', () => {
        userData.name = ''
        expect(() => new UserEntity(userData)).toThrow()
        delete userData.name
        expect(() => new UserEntity(userData)).toThrow()
    })

    it('should throw if username is invalid or absent', () => {
        userData.username = ''
        expect(() => new UserEntity(userData)).toThrow()
        delete userData.username
        expect(() => new UserEntity(userData)).toThrow()
    })

    it('should throw if email is absent', () => {
        delete userData.email
        expect(() => new UserEntity(userData)).toThrow()
    })

    it('should remove extra dots on email', () => {
        userData.email = 'me.toto.user@gamil.com'
        expect(new UserEntity(userData).getFields().email).toBe('metotouser@gamil.com')
    })

    it('should throw if email is absent or invalid', () => {
        userData.email = 'this is my email'
        expect(() => new UserEntity(userData)).toThrow()
    })

    it('should throw if password is less than 6 character or absent', () => {
        userData.password = '01234'
        expect(() => new UserEntity(userData)).toThrow()
        delete userData.password
        expect(() => new UserEntity(userData)).toThrow()
    })

    it('Should be idempotent', () => {
        const user1 = new UserEntity(userData)
        const user2 = new UserEntity(user1.getFields())

        expect(user1.getFields().name).toBe(user2.getFields().name)
        expect(user1.getFields().username).toBe(user2.getFields().username)
        expect(user1.getFields().email).toBe(user2.getFields().email)
    })
})
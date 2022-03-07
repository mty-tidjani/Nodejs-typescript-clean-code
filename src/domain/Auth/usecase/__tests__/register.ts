// import { AuthUserEntity } from "../../Entities/AuthUser"
// import { UserEntity } from "./AuthUser"

// describe('User Entity', () => {
//     let userData: AuthUserEntity

//     beforeEach(() => {
//         userData = {
//             id: '223',
//             userId: 'xxx',
//             email: "email.me@test.com",
//             password: 'password'
//         }
//     })

//     it('should throw if userData is null', () => {
//         userData = undefined
//         expect(() => new UserEntity(userData)).toThrow()
//     })

//     it('should throw if id is invalid or absent', () => {
//         userData.id = ''
//         expect(() => new UserEntity(userData)).toThrow()
//         delete userData.id
//         expect(() => new UserEntity(userData)).toThrow()
//     })

//     it('should throw if userid is invalid or absent', () => {
//         userData.userid = ''
//         expect(() => new UserEntity(userData)).toThrow()
//         delete userData.userid
//         expect(() => new UserEntity(userData)).toThrow()
//     })

//     it('should throw if email is absent', () => {
//         delete userData.email
//         expect(() => new UserEntity(userData)).toThrow()
//     })

//     it('should remove extra dots on email', () => {
//         userData.email = 'me.toto.user@gamil.com'
//         expect(new UserEntity(userData).getFields().email).toBe('metotouser@gamil.com')
//     })

//     it('should throw if email is absent or invalid', () => {
//         userData.email = 'this is my email'
//         expect(() => new UserEntity(userData)).toThrow()
//     })

//     it('should throw if password is less than 6 character or absent', () => {
//         userData.password = '01234'
//         expect(() => new UserEntity(userData)).toThrow()
//         delete userData.password
//         expect(() => new UserEntity(userData)).toThrow()
//     })

//     it('Should be idempotent', () => {
//         const user1 = new UserEntity(userData)
//         const user2 = new UserEntity(user1.getFields())

//         expect(user1.getFields().id).toBe(user2.getFields().id)
//         expect(user1.getFields().userid).toBe(user2.getFields().userid)
//         expect(user1.getFields().email).toBe(user2.getFields().email)
//     })
// })
import * as user from '../user'
describe('user handler', ()=>{
    it('shold create new user',async () => {
        const req = {body: {username: 'hello', password: 'hi'}}
        const res = { json({token}){
                console.log(token)
                expect(token).toBeTruthy()
            }}
        const newUser = await user.createNewUser(req,res, ()=>{

        })
    })
})
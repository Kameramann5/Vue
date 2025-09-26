export default defineEventHandler(async (event)=>{
    const body= await readBody(event)

//if(body.name=='') {}

    return {
        mess: body
    }
})
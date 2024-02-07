const baseURL = 'https://api.spacexdata.com/v3'

const posts = '/posts'
const launches = '/launches'
const urls = {
    users: {
        base:'/users',
        byId: (id) => `${users}/${id}`
    },
    posts:{
        base:posts,
        byId: (id) => `${posts}/${id}`
    }}
export {
    baseURL,
    urls
}
// const baseURL='https://jsonplaceholder.typicode.com'
// const users ='/users'
// const posts ='/posts'
// const urls ={
//     users:{base:users,
//         byId:(id)=>`${users}/${id}`},
//     posts:{
//         base:posts,
//         byId:(id)=>`${posts}/${id}`}}
// export {
//     baseURL, urls}
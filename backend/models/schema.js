const graphql=require('graphql');
const {
    GraphQLObjectType,
    GraphQLSchema
}=graphql;
const _=require('lodash')

const DB=[
    {
        id:'1',
        name:'Samarth Kadam',
        age:42
    },
    {
        id:'2',
        name:'Kevin Mcqueen',
        age:42
    },
    {
        id:'3',
        name:'Jalbin bloie',
        age:42
    },
    {
        id:'4',
        name:'Alpha num',
        age:42
    },
]


const UserType=new GraphQLObjectType({
    name:'User',
    fields:()=>({
        id:{type:graphql.GraphQLString},
        name:{type:graphql.GraphQLString},
        age:{type:graphql.GraphQLInt},
    })
});



const RootQuery=new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        users:{
            type:new graphql.GraphQLList(UserType),
            resolve(){
                return DB;
            }
        },
        user:{
            type:UserType,
            args:{id:{type:graphql.GraphQLString}},
            resolve(parentValue,args){
                const data=DB.find((data)=>data.id===args.id)
                return data;
            },
        }
    }
});


module.exports=new GraphQLSchema({
    query:RootQuery,
})
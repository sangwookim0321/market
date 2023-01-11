
export default function handler(req,res){
    res.status(200).json([
        {
            id: 0,
            title: "Black",
            cont: "Born in France",
            price: 12000,
        },

        {
            id: 1,
            title: "Green",
            cont: "Born in Seoul",
            price: 36000,
        }
    ])
}

const allPosts = [];

module.exports = {
    notes: function(req, res) {
        JournalPost.find().exec(function(error, result) {
            if (error) {
                return res.serverError(error.toString())
            }
            res.send(result)
            console.log("Posting is done");
        })
    },

    searchById: function(req, res) {
        const id = req.param('id')
        const filteredPosts = allPosts.filter(p => {return p.id == id })
        if (filteredPosts.length > 0) {
            res.send(filteredPosts)
        } else {
            res.send('Failed to find by Id:' + id)
        }
    },

    //Creating the post
    createPost: function(req, res) {
        const id = req.body.id
        const name = req.body.name
        const b = req.headers['content-type'];
        console.log(b)
        console.log(req.headers['x-c1b-jhcn']);
        // const newPost = {id: id, name: name}
        JournalPost.create({title: id, body: name}).exec(function(error) {
            if (error) {
                return res.serverError(error.toString())
            }
            console.log("Finished Creation")
            return res.end()
        })
    },

    //Deleting the post
    deletePost: async function(req, res) {
        try {
            const id = req.params("id")
            await JournalPost.destroy({id: id})
            console.log("Requested Id Is" + id)
            res.end()
        } catch (error) {
            res.serverError(error.toString)
        }
        // res.send("Deleting the post")
        
    }
}

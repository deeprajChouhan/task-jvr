module.exports = mongoose => {
    let schema = mongoose.Schema(
        {
            name: String,
            mobile: String,
            gender: String
        }
    );

    schema.method("toJSON" , () => {
        const { __v, _id, ...object} = this.toObject();
        object.id = _id
        return object
    })

    const Data = mongoose.model("data" , schema)
    return Data
}
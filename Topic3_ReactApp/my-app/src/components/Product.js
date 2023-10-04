// Sử dụng function để định nghĩa 1 component
function Product({data}){

    return (
        <div>
            <h2>List of products</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th><th>Name</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map(({id, name}) =>  (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

// Xuất bản component này (export module)
export default Product
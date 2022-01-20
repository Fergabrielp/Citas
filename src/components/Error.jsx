const Error = ({mensaje}) => {
    return (
        <div className="bg-red-600 rounded-md text-center text-white mb-3 p-3 
        uppercase font-bold">
            <p>{mensaje}</p>
        </div>

    )
}

export default Error

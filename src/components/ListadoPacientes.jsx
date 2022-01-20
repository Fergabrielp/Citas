import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    return (

        <div className="md:w-1/2 lg:w-3/5">

          {pacientes && pacientes.length ? (
            <>
              <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
              <p className="text-lg mt-5 text-center mb-8">Administra tus Pacientes y 
              <span className="text-indigo-600 font-bold"> Citas</span>
              </p>
              <div className="md:h-screen overflow-y-scroll">
                {pacientes.map((paciente) => (
                    <Paciente
                      key={paciente.id}
                      paciente={paciente}
                      setPaciente={setPaciente}
                      eliminarPaciente={eliminarPaciente}
                    />
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 className="font-black text-3xl text-center">Aún no hay citas creadas</h2>
              <p className="text-lg mt-5 text-center mb-10">Agréguelas y podra 
              <span className="text-indigo-600 font-bold"> visualizarlas aquí:</span>
              </p>
            </>
          )}

        

       

        </div>
    )
}

export default ListadoPacientes

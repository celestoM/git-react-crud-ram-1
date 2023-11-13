import useFetch from "./useFetch";

export default function Listar(){
  const {data}=useFetch("https://jsonplaceholder.typicode.com/users");
  const nombre = data.map((user, indice) => {
    if (indice === 0) {
      return user.name;
    }
  });
  const len =5;
    
  return (
  <><main className='flex-container'>
      <div className='text-title'>To-Do list</div>
    </main><div>
        <ol className='lista1'>
          <li className='caja-content1'><p className='elementos'>1 &emsp;&emsp;{nombre}</p></li>
        </ol>
      </div><div>
        <ol className='lista2'>
          {data.map((u, indice) => {
            if (indice > 0 && indice < 5) {
              return (
                <li className='caja-content' key={u.id}><p className='elementos'>{u.id} &emsp;&emsp;{u.name}</p></li>
              );
            }
          })}

        </ol>
        <ol className='lista2'>
          <li className='caja-content2'><p className='elemento-total'>Total: {len}</p></li>
        </ol>
      </div>
      </>
  )
}

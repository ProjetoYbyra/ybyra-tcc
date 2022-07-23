import { useState, useEffect } from 'react';

import FormModal from '../../Modal/FormModal';
import ONGRegistro from './ongs.js';
import PessoaRegistro from './pessoas';

const Formulario = () => {
  const [user, setUser] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true)

  return (
    <>
      <FormModal 
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
        user={user} 
        setUser={setUser}
      />
      {user ==="ONG"? <ONGRegistro/> : <PessoaRegistro/>}
    </>
  )

}
export default Formulario; 